import Link from 'next/link';
import { FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#8D6E63] text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Close With Shuchi</h3>
            <p className="mb-4">Your All-In-One Real Estate, Title & Notary Expert in New Jersey</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sue_realestate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#real-estate" className="hover:text-accent transition-colors">
                  Real Estate Services
                </a>
              </li>
              <li>
                <a href="#title" className="hover:text-accent transition-colors">
                  Title Insurance
                </a>
              </li>
              <li>
                <a href="#notary" className="hover:text-accent transition-colors">
                  Notary Public
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="h-4 w-4 mr-2" />
                <a href="tel:9735677307" className="hover:text-accent transition-colors">
                  (973) 567-7307
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 mr-2" />
                <a href="mailto:shuchialamrealtor@gmail.com" className="hover:text-accent transition-colors">
                  shuchialamrealtor@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Shuchi
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-accent transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-opacity-20 border-white text-center text-sm">
          <p>NJ Realtor License: 2336672 | NJ Notary: 0050217472</p>
          <p className="mt-2">
            &copy; {currentYear} Close With Shuchi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 