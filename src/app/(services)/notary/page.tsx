import { Metadata } from 'next';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion-wrapper';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Notary Services | Shuchi Alam - NJ Notary Public',
  description: 'Professional notary services in New Jersey. Quick, convenient, and reliable document notarization from a licensed Notary Public.',
  keywords: 'notary public, NJ notary, document notarization, mobile notary, notary services',
};

"use client";

import { useState } from 'react';
import CalendarModal from '@/components/CalendarModal';
import StructuredData from '@/components/StructuredData';
import { generateServiceStructuredData, generateProfessionalStructuredData } from '@/utils/structuredData';
import { getTestimonialsByService } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

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
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-secondary">
              Professional Notary Services
            </h1>
            <p className="text-xl mb-8 text-secondary">
              Licensed Notary Public in New Jersey providing convenient and reliable document notarization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsCalendarOpen(true)}
                className="px-6 py-3 bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-center"
              >
                Schedule Notarization
              </button>
              <a 
                href="#download-guide"
                className="px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-center"
              >
                Download Notary Checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Notary Services Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Document Types</h3>
              <ul className="space-y-2">
                <li>✓ Real estate documents</li>
                <li>✓ Affidavits</li>
                <li>✓ Power of attorney</li>
                <li>✓ Business documents</li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Service Options</h3>
              <ul className="space-y-2">
                <li>✓ Mobile notary service</li>
                <li>✓ Same-day availability</li>
                <li>✓ Evening appointments</li>
                <li>✓ Weekend service</li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Additional Services</h3>
              <ul className="space-y-2">
                <li>✓ Document review</li>
                <li>✓ Identity verification</li>
                <li>✓ Witness coordination</li>
                <li>✓ Electronic notarization</li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl font-heading font-bold mb-4 text-accent">1</div>
              <h3 className="text-xl font-heading font-bold mb-2">Schedule</h3>
              <p>Book your preferred time and location online</p>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl font-heading font-bold mb-4 text-accent">2</div>
              <h3 className="text-xl font-heading font-bold mb-2">Prepare</h3>
              <p>Have your documents and valid ID ready</p>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl font-heading font-bold mb-4 text-accent">3</div>
              <h3 className="text-xl font-heading font-bold mb-2">Notarize</h3>
              <p>Quick and professional notarization service</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="download-guide" className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Download Notary Checklist</h2>
            <p className="text-lg mb-8">
              Get our free "What to Bring: NJ Notary Checklist" and ensure you have everything ready for your notarization.
            </p>
            <LeadCaptureForm
              formType="notary"
              downloadType="Notary Checklist"
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getTestimonialsByService('notary').map((testimonial, index) => (
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
          serviceType="notary"
        />
      </main>
  );
}