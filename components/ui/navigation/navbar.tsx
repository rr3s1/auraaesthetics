"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { GradientButton } from "@/components/ui/gradient-button";
import { GradientText } from "@/components/ui/gradient-text";

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
    `text-base md:text-xl lg:text-2xl font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
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
    <nav className="no-scrollbar fixed inset-x-0 top-0 z-50 bg-black py-4 backdrop-blur-md" style={{pointerEvents: 'auto'}}>
      <div className="no-scrollbar container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="shrink-0">
              <GradientText className="cinzel-decorative-bold pl-20 pr-5 text-2xl tracking-wide text-white md:text-4xl lg:text-5xl">
                AURA
              </GradientText>
            </a>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`${navLinkClass(item)} cormorant-garamond`}
                onMouseEnter={() => handleMouseEnterNavItem(item)}
                onMouseLeave={handleMouseLeaveNavItem}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center space-x-3 pr-10 md:flex">
            {/* <Link href="/register">
              <GradientButton className="text-xs md:text-lg font-medium scale-70 transform">
                Register
              </GradientButton>
            </Link> */}
            <Link href="/admin">
              <GradientButton className="scale-70 text-xs font-medium md:text-lg">
                Admin
              </GradientButton>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <div className={`fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] space-y-2 overflow-y-auto bg-gray-900/95 p-4 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'}`}>
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`/${item.toLowerCase()}`} 
            className="cormorant-garamond block py-2 text-base text-gray-300 transition duration-150 hover:text-gray-100" 
            onClick={toggleMobileMenu}
          >
            {item}
          </a>
        ))}
      
      <Link href="/admin">
              <GradientButton className="scale-70 text-xs font-medium md:text-lg">
                Admin
              </GradientButton>
            </Link>
      </div>
    </nav>
  );
}
