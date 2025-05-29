"use client";

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { NavbarLogo } from "@/components/ui/resizable-navbar";

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

  return(
    <footer className="border-t border-accent-yellow-dark/20 bg-site-bg text-text-primary">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Enhanced Brand Column */}
          <div className="max-w-md space-y-6 lg:col-span-2">
            
            <div className="ml-8">
              <Link 
                href="/" 
                className="group inline-block" 
                aria-label="AURA Homepage"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}
              >
                <NavbarLogo />
              </Link>
            </div>
            
            <p className="cormorant-garamond text-lg font-light leading-relaxed text-text-secondary">
              Elevating beauty through personalized aesthetic journeys and innovative treatments. 
              Discover your inherent radiance and embrace a new era of well-being with 
              <span className="font-medium text-accent-orange"> AURA</span>.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-6 pt-2">
              {[
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={`AURA on ${social.label}`}
                  className="group relative text-text-secondary transition-all duration-300 hover:scale-110 hover:text-accent-yellow-dark"
                >
                  <social.icon className="relative z-10 size-6" />
                  <div className="absolute inset-0 scale-0 rounded-full bg-accent-orange/20 blur-sm transition-transform duration-300 group-hover:scale-150"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h3 className="cinzel-decorative-bold border-b border-accent-yellow-dark/30 pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent-yellow-dark">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="cormorant-garamond group relative inline-block text-base text-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-text-primary"
                    >
                      <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-xs text-accent-orange opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {'›'}
                      </span>
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent-yellow-dark to-accent-orange transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
        {/* Enhanced Footer Bottom */}
        <div className="mt-16 border-t border-accent-yellow-dark/20 pt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-xs text-text-secondary">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-text-secondary">Privacy Protected</span>
            </div>
  
          </div>
          
          <p className="mt-4 text-sm tracking-wider text-text-secondary/80">
            {currentYear} AURA Aesthetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
