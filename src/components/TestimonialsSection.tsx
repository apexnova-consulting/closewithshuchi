"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionDiv } from './motion-wrapper';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Home Buyer',
    image: '/images/testimonial-1.jpg',
    quote: 'Shuchi made the home buying process so smooth. Her knowledge of the local market and negotiation skills saved us thousands!'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Property Seller',
    image: '/images/testimonial-2.jpg',
    quote: 'I needed to sell my house quickly, and Shuchi handled everything. From staging to closing, she was professional and efficient.'
  },
  {
    id: 3,
    name: 'Jennifer Taylor',
    role: 'Title Insurance Client',
    image: '/images/testimonial-3.jpg',
    quote: 'The title insurance process can be confusing, but Shuchi explained everything clearly and made sure our property rights were protected.'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Notary Client',
    image: '/images/testimonial-4.jpg',
    quote: 'Needed urgent notarization for business documents and Shuchi was available on short notice. She even came to my office. Excellent service!'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section bg-soft-pink">
      <div className="container">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            See what my clients have to say about working with me
          </p>
        </MotionDiv>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                    <MotionDiv 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-white p-8 rounded-lg shadow-lg"
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        
                        <div className="text-center">
                          <svg className="w-10 h-10 text-gray-200 mb-4 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8v6a6 6 0 01-6 6H4v6h6v-6a6 6 0 016-6V8h-6zm12 0v6a6 6 0 01-6 6h0v6h6v-6a6 6 0 016-6V8h-6z" />
                          </svg>
                          
                          <p className="text-gray-700 text-lg mb-6">
                            "{testimonial.quote}"
                          </p>
                          
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-primary">{testimonial.role}</p>
                        </div>
                      </div>
                    </MotionDiv>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 