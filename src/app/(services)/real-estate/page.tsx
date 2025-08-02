"use client";

import { useState } from 'react';
import Image from 'next/image';
import CalendarModal from '@/components/CalendarModal';
import StructuredData from '@/components/StructuredData';
import { generateServiceStructuredData, generateProfessionalStructuredData } from '@/utils/structuredData';
import { getTestimonialsByService } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

export default function RealEstatePage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const serviceData = generateServiceStructuredData({
    name: 'Real Estate Services in New Jersey',
    description: 'Expert real estate services for buying, selling, and investing in New Jersey properties. Professional guidance from a licensed NJ real estate agent.',
    provider: 'Shuchi Alam',
    areaServed: 'New Jersey',
    serviceType: 'Real Estate Agent Services',
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
        serviceType="real-estate"
      />
    </main>
  );
}