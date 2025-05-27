"use client";

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import { PasskeyModal } from "@/components/PasskeyModal";

export function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPasskeyModalOpen, setIsPasskeyModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Services', 'About', 'Contact'];

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Enhanced nav link styling with luxury aesthetics
  const navLinkClass = (itemName: string, extraClasses = '') =>
    `text-base md:text-lg lg:text-xl font-medium transition-all duration-300 px-4 py-2 rounded-md relative
     cormorant-garamond tracking-wider uppercase text-text-primary
     hover:text-accent-yellow-dark hover:scale-105 hover:font-semibold
     before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
     before:bg-gradient-to-r before:from-accent-yellow-dark before:to-accent-orange 
     before:transition-all before:duration-300 before:ease-out
     hover:before:w-full
     ${hoveredNavItem === itemName 
       ? 'text-accent-yellow-dark before:w-full shadow-lg' 
       : ''
     } ${extraClasses}`;

  // Handle scroll effect for floating nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleAdminClick = () => {
    setIsPasskeyModalOpen(true);
  };

  const handlePasskeyModalClose = () => {
    setIsPasskeyModalOpen(false);
  };

  return (
    <nav 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out no-scrollbar
        ${isScrolled 
          ? 'border-b border-accent-yellow-dark/20 bg-site-bg/90 py-3 shadow-lg backdrop-blur-md' 
          : 'bg-gradient-to-r from-site-bg/90 to-content-bg/90 py-4 backdrop-blur-sm'
        }`} 
      style={{pointerEvents: 'auto'}}
    >
      <div className="container mx-auto px-4 no-scrollbar sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with Gradient Animation */}
          <div className="flex items-center">
            <a href="/" className="group shrink-0">
              <span className="cinzel-decorative-bold bg-size-200 bg-pos-0 hover:bg-pos-100 animate-shimmer relative bg-gradient-to-r 
                             from-accent-yellow-dark via-accent-orange to-accent-red
                             bg-clip-text px-5 pl-1 text-2xl
                             font-extrabold tracking-wide text-transparent transition-all
                             duration-1000 ease-in-out group-hover:drop-shadow-[0_0_15px_rgba(245,122,8,0.5)] md:pl-16
                             md:text-4xl
                             lg:text-5xl">
                AURA
              </span>
            </a>
          </div>

          {/* Desktop Navigation with Luxury Styling */}
          <div className="hidden items-center space-x-1 md:flex">
            {navItems.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && (
                  <div className="mx-2 h-6 w-px bg-accent-yellow-dark/30"></div>
                )}
                <a
                  href={`/${item.toLowerCase()}`}
                  className={navLinkClass(item)}
                  onMouseEnter={() => handleMouseEnterNavItem(item)}
                  onMouseLeave={handleMouseLeaveNavItem}
                  style={{
                    textShadow: hoveredNavItem === item 
                      ? '0 0 8px rgba(253, 177, 16, 0.6)' 
                      : 'none'
                  }}
                >
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>

          {/* Enhanced Admin Button with GradientButton Styling */}
          <div className="hidden items-center space-x-3 pr-10 md:flex">
            <motion.button 
              className="bg-gradient-to-r from-accent-yellow-dark to-accent-orange cormorant-garamond focus-visible:ring-ring inline-flex min-w-[90px]
                         items-center justify-center rounded-[11px] px-6 py-3
                         font-sans text-sm 
                         font-semibold uppercase tracking-wider
                         text-white transition-colors duration-300
                         ease-in-out focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
              onClick={handleAdminClick}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(245, 122, 8, 0.3)",
                background: "linear-gradient(to right, #F57A08, #E8400C)"
              }}
              whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(232, 64, 12, 0.2)" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Admin
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-text-primary transition-colors duration-300 hover:scale-110
                         hover:text-accent-yellow-dark focus:text-accent-orange focus:outline-none"
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

      {/* Enhanced Mobile Menu with Luxury Styling */}
      <div className={`fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] space-y-4 overflow-y-auto 
                      border-b border-accent-yellow-dark/20 bg-gradient-to-b from-site-bg/95
                      to-content-bg/95 p-6 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden 
                      ${isMobileMenuOpen 
                        ? 'pointer-events-auto translate-y-0 opacity-100' 
                        : 'pointer-events-none -translate-y-4 opacity-0'
                      }`}>
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`/${item.toLowerCase()}`} 
            className="cormorant-garamond block rounded-r-lg border-l-2 border-transparent py-3 text-lg
                       font-semibold uppercase tracking-wider text-text-primary
                       transition-all duration-300 hover:border-accent-yellow-dark
                       hover:bg-accent-yellow-dark/5 hover:pl-4 hover:text-accent-orange" 
            onClick={toggleMobileMenu}
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            }}
          >
            {item}
          </a>
        ))}
      
        <motion.button 
          className="bg-gradient-to-r from-accent-yellow-dark to-accent-orange cormorant-garamond focus-visible:ring-ring mt-6 inline-flex w-full min-w-[90px]
                     items-center justify-center rounded-[11px] px-6 py-3
                     font-sans text-sm 
                     font-semibold uppercase tracking-wider
                     text-white transition-colors duration-300
                     ease-in-out focus-visible:outline-none
                     focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
          onClick={handleAdminClick}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(245, 122, 8, 0.3)",
            background: "linear-gradient(to right, #F57A08, #E8400C)"
          }}
          whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(232, 64, 12, 0.2)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          Admin
        </motion.button>
      </div>

      {isPasskeyModalOpen && <PasskeyModal onClose={handlePasskeyModalClose} />}
    </nav>
  );
}
