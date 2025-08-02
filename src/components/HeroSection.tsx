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
      
      <div className="container relative z-10 py-12 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="max-w-3xl mx-auto md:mr-auto md:ml-0">
          <MotionDiv 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center md:text-left bg-black bg-opacity-30 p-6 md:p-8 rounded-lg backdrop-blur-sm"
          >
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Three Services. One Trusted Expert.
            </h1>
            
            <h2 className="mb-4 text-2xl md:text-3xl font-heading text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Buy, insure, and notarize — all with Shuchi Alam.
            </h2>
            
            <p className="mb-8 text-xl text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
              Licensed in NJ as a Real Estate Agent, Title Insurance Producer, and Notary, Shuchi offers seamless support for every step of your real estate journey — or stand-alone services when you need them most.
            </p>
            
            {/* Service Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white bg-opacity-95 p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-200"
              >
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-heading font-bold mb-2 text-secondary">Real Estate Services</h3>
                <p className="text-sm text-secondary">Expert guidance for buying and selling properties in NJ</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg cursor-pointer"
              >
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-heading font-bold mb-2 text-secondary">Title Insurance</h3>
                <p className="text-sm text-secondary">Protect your property investment with comprehensive coverage</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg cursor-pointer"
              >
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-heading font-bold mb-2 text-secondary">Notary Services</h3>
                <p className="text-sm text-secondary">Convenient and professional document notarization</p>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
              >
                Book a Free Consultation
              </a>
              
              <button 
                onClick={() => setShowEmailForm(!showEmailForm)}
                className="px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
              >
                Download Free Guide
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