"use client";

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import CalendarModal from '@/components/CalendarModal';
import StructuredData from '@/components/StructuredData';
import { generateServiceStructuredData, generateProfessionalStructuredData } from '@/utils/structuredData';
import { getTestimonialsByService } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Notary Services | Shuchi Alam - NJ Notary Public',
  description: 'Professional notary services in New Jersey. Quick, convenient, and reliable document notarization from a licensed Notary Public.',
  keywords: 'notary public, NJ notary, document notarization, mobile notary, notary services',
};

export default function NotaryPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const serviceData = generateServiceStructuredData({
    name: 'Notary Public Services in New Jersey',
    description: 'Professional notary services in New Jersey. Quick, convenient, and reliable document notarization from a licensed Notary Public.',
    provider: 'Shuchi Alam',
    areaServed: 'New Jersey',
    serviceType: 'Notary Public Services',
  });

  const professionalData = generateProfessionalStructuredData();

  return (
    <main className="flex min-h-screen flex-col">
      <StructuredData data={serviceData} />
      <StructuredData data={professionalData} />
      {/* Rest of your component code */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        serviceType="notary"
      />
    </main>
  );
}