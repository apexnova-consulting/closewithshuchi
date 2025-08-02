import { Metadata } from 'next';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion-wrapper';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Title Insurance Services | Shuchi Alam - NJ Title Insurance Producer',
  description: 'Protect your property investment with comprehensive title insurance in New Jersey. Expert guidance from a licensed title insurance producer.',
  keywords: 'title insurance, NJ title insurance, property title, title search, title producer',
};

"use client";

import { useState } from 'react';
import CalendarModal from '@/components/CalendarModal';
import StructuredData from '@/components/StructuredData';
import { generateServiceStructuredData, generateProfessionalStructuredData } from '@/utils/structuredData';
import { getTestimonialsByService } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

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
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-secondary">
              Protect Your Property Investment
            </h1>
            <p className="text-xl mb-8 text-secondary">
              As a licensed Title Insurance Producer in New Jersey, I ensure your property rights are protected with comprehensive title insurance coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsCalendarOpen(true)}
                className="px-6 py-3 bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-center"
              >
                Get a Quote
              </button>
              <a 
                href="#download-guide"
                className="px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-center"
              >
                Download Title Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Title Insurance Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Title Search</h3>
              <ul className="space-y-2">
                <li>✓ Property history review</li>
                <li>✓ Public records search</li>
                <li>✓ Lien verification</li>
                <li>✓ Ownership confirmation</li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Title Insurance</h3>
              <ul className="space-y-2">
                <li>✓ Owner's policy</li>
                <li>✓ Lender's policy</li>
                <li>✓ Extended coverage</li>
                <li>✓ Claims assistance</li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Settlement Services</h3>
              <ul className="space-y-2">
                <li>✓ Closing coordination</li>
                <li>✓ Document preparation</li>
                <li>✓ Fund disbursement</li>
                <li>✓ Recording services</li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Why Title Insurance */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Why You Need Title Insurance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Protection Against:</h3>
              <ul className="space-y-2">
                <li>• Unknown liens or encumbrances</li>
                <li>• Forged or fraudulent documents</li>
                <li>• Undisclosed heirs</li>
                <li>• Recording errors</li>
                <li>• Boundary disputes</li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Benefits:</h3>
              <ul className="space-y-2">
                <li>• One-time premium</li>
                <li>• Coverage for life of ownership</li>
                <li>• Legal cost coverage</li>
                <li>• Peace of mind</li>
                <li>• Lender requirement satisfaction</li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="download-guide" className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Get Your Free Title Insurance Guide</h2>
            <p className="text-lg mb-8">
              Download "Title Insurance in Plain English – NJ Edition" and understand how to protect your property investment.
            </p>
            <LeadCaptureForm
              formType="title-insurance"
              downloadType="Title Insurance Guide"
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getTestimonialsByService('title-insurance').map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
            <CalendarModal
          isOpen={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)}
          serviceType="title-insurance"
        />
      </main>
  );
}