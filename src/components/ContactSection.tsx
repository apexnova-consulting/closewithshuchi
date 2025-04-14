"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { MotionDiv } from './motion-wrapper';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    contactMethod: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission to a backend service
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      phone: '',
      service: '',
      contactMethod: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message! I will get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Let's Get Started</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Contact me today for a free consultation or quote within 24 hours
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="title">Title Insurance</option>
                      <option value="notary">Notary Services</option>
                      <option value="other">Other/Not Sure</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="contact-email"
                        name="contactMethod"
                        value="email"
                        checked={formState.contactMethod === 'email'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor="contact-email" className="ml-2 text-sm text-gray-700">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="contact-phone"
                        name="contactMethod"
                        value="phone"
                        checked={formState.contactMethod === 'phone'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor="contact-phone" className="ml-2 text-sm text-gray-700">
                        Phone
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="contact-either"
                        name="contactMethod"
                        value="either"
                        checked={formState.contactMethod === 'either'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor="contact-either" className="ml-2 text-sm text-gray-700">
                        Either
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Tell me about your needs or any questions you have"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
                
                <p className="text-xs text-gray-500">
                  * Required fields. I'll respond to your inquiry within 24 hours.
                </p>
              </form>
            </MotionDiv>
          </div>
          
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div id="booking" className="bg-primary text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Book a Consultation</h3>
              <p className="mb-6">
                Ready to schedule a free consultation? Use my online booking system to find a time that works for you.
              </p>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 bg-white text-primary text-center font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Book on Calendly
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-lg text-primary mr-4">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:9735677307" className="text-primary hover:underline">
                      (973) 567-7307
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-lg text-primary mr-4">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:shuchialamrealtor@gmail.com" className="text-primary hover:underline break-all">
                      shuchialamrealtor@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-lg text-primary mr-4">
                    <FaInstagram className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/sue_realestate" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @sue_realestate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
} 