"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHome, FaFileContract, FaSignature } from 'react-icons/fa';
import { MotionDiv } from './motion-wrapper';

export default function AboutSection() {
  return (
    <section id="about" className="section bg-soft-pink">
      <div className="container">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Shuchi Alam</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/shuchi-portrait.jpg"
              alt="Shuchi Alam"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Your Trusted Real Estate Professional</h3>
            
            <p className="text-gray-700">
              With expertise across real estate, title insurance, and notary services, Shuchi Alam brings a comprehensive approach to every client's needs in New Jersey.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-lg text-primary mr-4">
                  <FaHome className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Licensed NJ Realtor</h4>
                  <p className="text-sm text-gray-600">License #2336672</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-green-100 rounded-lg text-secondary mr-4">
                  <FaFileContract className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Trusted Title Insurance Partner</h4>
                  <p className="text-sm text-gray-600">Providing seamless closing experiences</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-amber-100 rounded-lg text-accent mr-4">
                  <FaSignature className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Certified NJ Notary</h4>
                  <p className="text-sm text-gray-600">License #0050217472</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
} 