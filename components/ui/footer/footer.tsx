"use client";

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


import { GradientText } from "@/components/ui/gradient-text";

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
    <footer className="border-t border-gray-800/50 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/95 text-gray-300 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
      
        {/* Section 2: Main Footer Content (Brand, Links) */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 border-b border-t border-gray-800/60 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column (takes 2 cols on lg) */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="AURA Homepage">
              <GradientText className="cinzel-decorative-bold text-5xl tracking-wider text-white">
                AURA
              </GradientText>
            </Link>
            <p className="cormorant-garamond text-lg leading-relaxed text-gray-400">
              Elevating beauty through personalized aesthetic journeys and innovative treatments. Discover your inherent radiance and embrace a new era of well-being with AURA.
            </p>
            <div className="flex space-x-5">
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
                  className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-color-1"
                >
                  <social.icon className="size-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-5">
              <h3 className="cinzel-decorative-bold text-xl font-semibold tracking-wide text-gray-100">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="cormorant-garamond group inline-block text-base text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      <span className="mr-2 inline-block text-color-2/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-color-2">></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Section 4: Copyright & Bottom Bar */}
        <div className="mt-8 border-t border-gray-800/60 pt-10 text-center">
          <p className="cormorant-garamond text-sm text-gray-500">
            © {currentYear} AURA Aesthetics. All rights reserved.
          </p>
          <p className="cormorant-garamond mt-2 text-xs text-gray-600">
            Designed for radiance. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
