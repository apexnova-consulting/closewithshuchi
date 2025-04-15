"use client";

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { FaHome, FaFileContract, FaSignature } from 'react-icons/fa';
import { MotionDiv } from './motion-wrapper';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ServicesSection() {
  const [categories] = useState({
    'Real Estate': {
      id: 'real-estate',
      icon: <FaHome className="h-12 w-12 mb-4 text-primary" />,
      title: 'Real Estate Services',
      description: "Whether you're buying your dream home, selling your property, or looking for rental opportunities, I provide comprehensive real estate services tailored to your needs.",
      features: [
        'Expert guidance for buying and selling homes',
        'Local market knowledge across Northern and Central NJ',
        'Property valuation and comparative market analysis',
        'Negotiation and contract expertise'
      ],
      cta: 'Start Your Home Journey',
      ctaLink: '#contact'
    },
    'Title Insurance': {
      id: 'title',
      icon: <FaFileContract className="h-12 w-12 mb-4 text-secondary" />,
      title: 'Title Insurance Services',
      description: 'Protect your real estate investment with comprehensive title insurance services that provide peace of mind during and after your property purchase.',
      features: [
        'Title searches and examination',
        'Resolution of title issues and defects',
        'Seamless title closing process',
        "Owner's and lender's title insurance policies"
      ],
      cta: 'Get Title Help Now',
      ctaLink: '#contact'
    },
    'Notary Public': {
      id: 'notary',
      icon: <FaSignature className="h-12 w-12 mb-4 text-accent" />,
      title: 'Notary Public Services',
      description: 'Convenient and professional notarization services for all your important documents, available 7 days a week both virtually and in person.',
      features: [
        'Document acknowledgments and jurats',
        'Mobile notary service - I come to you',
        'Virtual notarization options',
        'Quick and efficient service with flexible hours'
      ],
      cta: 'Book a Notary Visit',
      ctaLink: '#contact'
    },
  });

  return (
    <section id="services" className="section bg-soft-pink">
      <div className="container">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Comprehensive real estate, title insurance, and notary services all in one place
          </p>
        </MotionDiv>

        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-white rounded-xl shadow-md max-w-3xl mx-auto mb-12">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-4 text-sm leading-5 font-medium rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-primary text-white shadow'
                      : 'text-gray-700 hover:bg-gray-100'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((category, idx) => (
              <Tab.Panel
                key={idx}
                id={category.id}
                className={classNames(
                  'rounded-xl p-3',
                  'focus:outline-none'
                )}
              >
                <MotionDiv 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 md:p-12 flex flex-col">
                      {category.icon}
                      <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {category.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto">
                        <a href={category.ctaLink} className={`btn ${idx === 0 ? 'btn-primary' : idx === 1 ? 'btn-secondary' : 'btn-accent'}`}>
                          {category.cta}
                        </a>
                      </div>
                    </div>
                    
                    <div className="hidden md:block relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-90"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white p-12">
                        <div>
                          <h3 className="text-3xl font-bold mb-4">Why Choose This Service?</h3>
                          <ul className="space-y-4">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <span>Personalized approach for your unique needs</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                              <span>Licensed, insured, and trusted professional</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Efficient process saving you time and stress</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
} 