"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MotionDiv } from './motion-wrapper';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-[90vh] bg-secondary overflow-hidden">
      {/* Background Video with Overlay */}
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
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      <div className="container relative z-10 h-full flex items-center py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-left space-y-8"
          >
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white">
              New Jersey Real Estate, Title Insurance & Notary Services — Fast, Reliable, Local.
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
              From closings to notarizations, we make the entire process seamless and secure.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 py-6">
              <div className="flex items-center gap-2 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed NJ Realtor</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified Notary Public</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Title Insurance Specialist</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#quote-form"
                className="btn bg-primary hover:bg-primary-dark text-white font-bold text-lg shadow-lg transform transition hover:scale-105"
              >
                Get a Free Quote
              </a>
              
              <a 
                href="#notary-booking"
                className="btn bg-accent hover:bg-accent-dark text-white font-bold text-lg shadow-lg transform transition hover:scale-105"
              >
                Book a Notary
              </a>
              
              <a 
                href="https://calendly.com/shuchialamrealtor/consultation-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-secondary-light hover:bg-neutral-200 text-secondary font-bold text-lg shadow-lg transform transition hover:scale-105"
              >
                Schedule a Consultation
              </a>
            </div>

            {/* Location Tags for SEO */}
            <div className="text-neutral-300 text-sm mt-8">
              Serving: Essex County • Union County • Passaic County • Hudson County • Morris County • and all of North & Central New Jersey
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}