"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionDiv } from './motion-wrapper';

export default function HeroSection() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative min-h-[85vh] bg-soft-pink overflow-hidden">
      {/* Full-width video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Darker semi-transparent overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto md:mr-auto md:ml-0">
          <MotionDiv 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center md:text-left bg-black bg-opacity-30 p-8 rounded-lg"
          >
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Your All-In-One Real Estate, Title & Notary Expert in New Jersey
            </h1>
            
            <p className="mb-8 text-xl text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
              Whether you're buying, selling, closing a deal, or notarizing documents — Shuchi Alam makes it seamless.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a Free Consultation
              </a>
              
              <button 
                onClick={() => setShowEmailForm(!showEmailForm)}
                className="btn bg-white text-primary border border-primary hover:bg-gray-50"
              >
                Get a Quick Quote
              </button>
            </div>
            
            {/* Email form popup */}
            {showEmailForm && (
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-white rounded-lg shadow-xl"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-800">Request a Quick Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="title">Title Insurance</option>
                      <option value="notary">Notary Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full btn btn-primary"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </MotionDiv>
            )}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
} 