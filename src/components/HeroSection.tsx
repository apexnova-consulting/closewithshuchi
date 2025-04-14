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
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-pattern" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center md:text-left"
          >
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your All-In-One Real Estate, Title & Notary Expert in New Jersey
            </h1>
            
            <p className="mb-8 text-xl text-gray-700">
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
                <h3 className="text-lg font-bold mb-4">Request a Quick Quote</h3>
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
          
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                alt="Real estate professional"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
} 