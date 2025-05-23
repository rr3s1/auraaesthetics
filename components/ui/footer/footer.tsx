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
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#0c0b0d] via-[#0a0a0e] to-[#060608] text-white shadow-inner">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Enhanced Brand Column */}
          <div className="max-w-md space-y-6 lg:col-span-2">
            <Link href="/" className="group inline-block" aria-label="AURA Homepage">
              <GradientText className="cinzel-decorative-bold text-5xl tracking-[0.2em] text-white transition-all duration-300 group-hover:scale-105">
                AURA
              </GradientText>
              <div className="cinzel-decorative mt-2 text-sm uppercase tracking-[0.3em] text-pink-300/70">
                Aesthetics
              </div>
            </Link>
            
            <p className="cormorant-garamond text-lg font-light leading-relaxed text-neutral-300">
              Elevating beauty through personalized aesthetic journeys and innovative treatments. 
              Discover your inherent radiance and embrace a new era of well-being with 
              <span className="font-medium text-pink-300/90"> AURA</span>.
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
                  className="group relative text-neutral-400 transition-all duration-300 hover:scale-110 hover:text-pink-400"
                >
                  <social.icon className="relative z-10 size-6" />
                  <div className="absolute inset-0 scale-0 rounded-full bg-pink-400/20 blur-sm transition-transform duration-300 group-hover:scale-150"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h3 className="cinzel-decorative-bold border-b border-white/10 pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="cormorant-garamond group relative inline-block text-base text-neutral-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-xs text-pink-400/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {'›'}
                      </span>
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="mx-auto max-w-2xl text-center">
            <h4 className="cinzel-decorative-bold mb-4 text-2xl tracking-wide text-white">
              Stay Connected
            </h4>
            <p className="cormorant-garamond mb-6 text-lg text-neutral-400">
              Be the first to discover our latest treatments and exclusive offers
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-300 placeholder:text-neutral-500 focus:border-pink-400/50 focus:bg-white/10 focus:outline-none"
              />
              <button className="rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:from-pink-600 hover:to-rose-700 hover:shadow-lg hover:shadow-pink-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm tracking-wider text-neutral-500">
            © {currentYear} AURA Aesthetics. All rights reserved.
          </p>
          <p className="cormorant-garamond mt-3 text-xs font-light italic tracking-wide text-neutral-400">
            Designed for radiance. Crafted with precision.
          </p>
          
          {/* Trust Indicators */}
          <div className="mt-6 flex items-center justify-center space-x-8 text-xs text-neutral-600">
            <span className="flex items-center space-x-1">
              <div className="size-2 animate-pulse rounded-full bg-green-400"></div>
              <span>SSL Secured</span>
            </span>
            <span>Privacy Protected</span>
            <span>Certified Professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
