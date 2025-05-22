"use client";

import React from 'react';
import Link from 'next/link';
import { GradientText } from "@/components/ui/gradient-text";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Aesthetic Treatments", href: "/services/aesthetic" },
        { name: "Wellness Programs", href: "/services/wellness" },
        { name: "Consultations", href: "/services/consultations" },
        { name: "Signature Treatments", href: "/services/signature" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-lg pt-16 pb-8 border-t border-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <GradientText className="text-white text-3xl tracking-wide cinzel-decorative-bold">
                AURA
              </GradientText>
            </div>
            <p className="text-gray-400 cormorant-garamond text-base">
              Elevating beauty through personalized aesthetic journeys and innovative treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-gray-200 text-lg font-medium cormorant-garamond">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 cormorant-garamond"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MdEmail className="text-gray-400 h-5 w-5" />
              <span className="text-gray-400 cormorant-garamond">contact@aura-aesthetics.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MdPhone className="text-gray-400 h-5 w-5" />
              <span className="text-gray-400 cormorant-garamond">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MdLocationOn className="text-gray-400 h-5 w-5" />
              <span className="text-gray-400 cormorant-garamond">123 Elegance Avenue, Suite 200</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm cormorant-garamond">
            © {currentYear} AURA Aesthetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
