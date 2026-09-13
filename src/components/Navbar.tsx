'use client';

import { useState } from 'react';
import Link from 'next/link';
import { businessInfo } from '@/config/constants';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/#team', label: 'Our Team' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo1.jpeg"
              alt="Revive Holistic Wellness Centre"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={businessInfo.social.phone}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-dark-900 px-4 py-2 rounded-lg transition-colors"
              aria-label="Call us"
            >
              <FiPhone size={18} />
              <span className="text-sm font-medium">Call</span>
            </a>
            <a
              href={businessInfo.whatsapp}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <SiWhatsapp size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <Link
              href="#appointments"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-2 py-3 space-y-2 border-t border-gray-200">
            <a
              href={businessInfo.social.phone}
              className="flex items-center space-x-2 bg-gray-100 text-dark-900 px-4 py-2 rounded-lg transition-colors w-full"
            >
              <FiPhone size={18} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <a
              href={businessInfo.whatsapp}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg transition-colors w-full"
            >
              <SiWhatsapp size={18} />
              <span className="text-sm font-medium">Message WhatsApp</span>
            </a>
            <Link
              href="#appointments"
              className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
