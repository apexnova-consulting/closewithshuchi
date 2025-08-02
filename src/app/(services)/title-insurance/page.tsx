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
  title: 'Title Insurance Services | Shuchi Alam - NJ Title Insurance Producer',
  description: 'Protect your property investment with comprehensive title insurance in New Jersey. Expert guidance from a licensed title insurance producer.',
  keywords: 'title insurance, NJ title insurance, property title, title search, title producer',
};

export default function TitleInsurancePage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const serviceData = generateServiceStructuredData({
    name: 'Title Insurance Services in New Jersey',
    description: 'Comprehensive title insurance services in New Jersey. Protect your property investment with expert title search and insurance coverage.',
    provider: 'Shuchi Alam',
    areaServed: 'New Jersey',
    serviceType: 'Title Insurance Services',
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
        serviceType="title-insurance"
      />
    </main>
  );
}