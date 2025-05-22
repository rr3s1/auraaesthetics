"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GradientText } from "@/components/ui/gradient-text";
import { GradientButton } from "@/components/ui/gradient-button";

export function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Services', 'Gallery', 'About'];

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (itemName: string, extraClasses = '') =>
    `text-base md:text-lg lg:text-xl font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
      hoveredNavItem === itemName
        ? 'bg-gray-700/50 text-white'
        : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
    } ${extraClasses}`;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/30 no-scrollbar backdrop-blur-md" style={{pointerEvents: 'auto'}}>
      <div className="container mx-auto px-4 sm:px-6 no-scrollbar lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <GradientText className="text-white pl-2 text-xl md:text-2xl lg:text-3xl font-black tracking-wide font-racing-sans-one">
                AURA
              </GradientText>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={navLinkClass(item)}
                onMouseEnter={() => handleMouseEnterNavItem(item)}
                onMouseLeave={handleMouseLeaveNavItem}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {/* <Link href="/register">
              <GradientButton className="text-xs md:text-lg font-medium scale-70 transform">
                Register
              </GradientButton>
            </Link> */}
            <Link href="/admin">
              <GradientButton className="text-xs md:text-lg font-medium scale-70 transform">
                Admin
              </GradientButton>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden fixed inset-x-0 top-16 bg-gray-900/95 backdrop-blur-lg p-4 space-y-2 transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-4rem)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`/${item.toLowerCase()}`} 
            className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" 
            onClick={toggleMobileMenu}
          >
            {item}
          </a>
        ))}
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Book Now</a>
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Contact Us</a>
        <a href="/client-portal" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Client Portal</a>
         <button className="w-full mt-2 gradient-button text-white text-sm font-medium py-2.5 px-4 rounded-md" onClick={toggleMobileMenu}>
            Book Appointment
        </button>
      </div>
    </nav>
  );
}
