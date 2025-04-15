"use client";

import { motion } from 'framer-motion';
import { MotionDiv } from './motion-wrapper';

export default function ServiceAreaSection() {
  // List of counties in New Jersey (Northern and Central)
  const counties = [
    'Bergen', 'Essex', 'Hudson', 'Hunterdon', 'Mercer',
    'Middlesex', 'Monmouth', 'Morris', 'Passaic', 'Somerset',
    'Sussex', 'Union', 'Warren'
  ];

  return (
    <section id="service-area" className="section bg-soft-pink">
      <div className="container">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Service Area</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Serving clients throughout Northern and Central New Jersey
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Counties Served</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {counties.map((county) => (
                <div key={county} className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{county} County</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Don't see your county? Contact me to discuss your specific location. I may still be able to help!
              </p>
              
              <a href="#contact" className="btn btn-primary">
                Check Availability
              </a>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="h-96 relative">
              {/* For an actual implementation, you'd use a real map API like Google Maps */}
              {/* This is a placeholder for the map */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    title="Map of New Jersey"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513516.875978512!2d-75.5594529225612!3d40.12002993413522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1644537234289!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mobile Services Available</h3>
              <p className="text-gray-600">
                As a mobile notary, I can come to your home, office, or any convenient location for document signings. Virtual services are also available.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
} 