"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-primary">Close With Shuchi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <a href="#booking" className="btn btn-primary">
            Book Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-t border-gray-200">
          <div className="container py-4 space-y-4">
            <a 
              href="#services" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#booking" 
              className="btn btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 