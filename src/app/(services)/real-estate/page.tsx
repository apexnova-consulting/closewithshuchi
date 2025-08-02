import { Metadata } from 'next';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion-wrapper';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Real Estate Services | Shuchi Alam - NJ Real Estate Agent',
  description: 'Expert real estate services in New Jersey. Whether buying or selling, get personalized guidance from a licensed professional.',
  keywords: 'real estate agent, NJ realtor, buy house NJ, sell house NJ, New Jersey real estate',
};

"use client";

import { useState } from 'react';
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
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-secondary">
              Your Trusted Guide in Real Estate
            </h1>
            <p className="text-xl mb-8 text-secondary">
              Navigate the NJ real estate market with confidence. From first-time homebuyers to seasoned investors, I'll guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsCalendarOpen(true)}
                className="px-6 py-3 bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-center"
              >
                Book a Free Consultation
              </button>
              <a 
                href="#download-guide"
                className="px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-center"
              >
                Download Buyer's Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">How I Can Help You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Home Buying</h3>
              <ul className="space-y-2">
                <li>✓ Property search assistance</li>
                <li>✓ Market analysis</li>
                <li>✓ Negotiation support</li>
                <li>✓ First-time buyer guidance</li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Home Selling</h3>
              <ul className="space-y-2">
                <li>✓ Comparative market analysis</li>
                <li>✓ Professional staging advice</li>
                <li>✓ Marketing strategy</li>
                <li>✓ Offer negotiation</li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold mb-4">Investment Properties</h3>
              <ul className="space-y-2">
                <li>✓ ROI analysis</li>
                <li>✓ Market trends insights</li>
                <li>✓ Portfolio consultation</li>
                <li>✓ Property management referrals</li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="download-guide" className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Download Your Free Guide</h2>
            <p className="text-lg mb-8">
              Get my comprehensive NJ Homebuyer's Guide and learn everything you need to know about buying property in New Jersey.
            </p>
            <LeadCaptureForm
              formType="real-estate"
              downloadType="NJ Homebuyer's Guide"
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">What My Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getTestimonialsByService('real-estate').map((testimonial, index) => (
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
          serviceType="real-estate"
        />
      </main>
  );
}