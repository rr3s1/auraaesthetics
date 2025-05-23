"use client";

import React, { useState, useEffect } from 'react';

import { PasskeyModal } from "@/components/PasskeyModal";

export function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPasskeyModalOpen, setIsPasskeyModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Services', 'Gallery', 'About'];

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Enhanced nav link styling with luxury aesthetics
  const navLinkClass = (itemName: string, extraClasses = '') =>
    `text-base md:text-lg lg:text-xl font-medium transition-all duration-300 px-4 py-2 rounded-md relative
     cormorant-garamond tracking-wider uppercase text-white/90
     hover:text-[#e0b97c] hover:scale-105 hover:font-semibold
     before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
     before:bg-gradient-to-r before:from-[#e0b97c] before:to-[#fcd7a0] 
     before:transition-all before:duration-300 before:ease-out
     hover:before:w-full
     ${hoveredNavItem === itemName 
       ? 'text-[#e0b97c] before:w-full shadow-lg' 
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
          ? 'border-b border-[#e0b97c]/20 bg-black/60 py-3 shadow-lg backdrop-blur-md' 
          : 'bg-gradient-to-r from-[#1a0d15]/80 to-[#0a0a0a]/80 py-4 backdrop-blur-sm'
        }`} 
      style={{pointerEvents: 'auto'}}
    >
      <div className="container mx-auto px-4 no-scrollbar sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with Gradient Animation */}
          <div className="flex items-center">
            <a href="#" className="group shrink-0">
              <span className="cinzel-decorative-bold bg-size-200 bg-pos-0 hover:bg-pos-100 animate-shimmer relative bg-gradient-to-r 
                             from-[#fcd7a0] via-[#fff4e0] to-[#e0b97c]
                             bg-clip-text px-5 pl-1 text-2xl
                             font-extrabold tracking-wide text-transparent transition-all
                             duration-1000 ease-in-out group-hover:drop-shadow-[0_0_15px_rgba(224,185,124,0.5)] md:pl-16
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
                  <div className="mx-2 h-6 w-px bg-neutral-600/40"></div>
                )}
                <a
                  href={`/${item.toLowerCase()}`}
                  className={navLinkClass(item)}
                  onMouseEnter={() => handleMouseEnterNavItem(item)}
                  onMouseLeave={handleMouseLeaveNavItem}
                  style={{
                    textShadow: hoveredNavItem === item 
                      ? '0 0 8px rgba(224, 185, 124, 0.6)' 
                      : 'none'
                  }}
                >
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>

          {/* Enhanced Admin Button with Luxury Styling */}
          <div className="hidden items-center space-x-3 pr-10 md:flex">
            <button 
              className="cormorant-garamond rounded-xl border border-white/20 bg-gradient-to-br from-[#6d2c91] via-[#5c1d84]
                         to-[#240b36] px-6 py-3 text-sm
                         font-semibold uppercase tracking-wider 
                         text-white shadow-inner
                         backdrop-blur-sm transition-all duration-300
                         ease-in-out hover:scale-105 hover:border-[#e0b97c]/40
                         hover:from-[#7d3ca1]
                         hover:via-[#6c2d94] hover:to-[#341b46]"
              onClick={handleAdminClick}
              style={{
                boxShadow: 'inset 0 0 4px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'inset 0 0 4px rgba(255, 255, 255, 0.2), 0 0 20px rgba(224, 185, 124, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'inset 0 0 4px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3)';
              }}
            >
              Admin
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white/80 transition-colors duration-300 hover:scale-110
                         hover:text-[#e0b97c] focus:text-[#e0b97c] focus:outline-none"
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
                      border-b border-[#e0b97c]/20 bg-gradient-to-b from-[#1a0d15]/95
                      to-[#0a0a0a]/95 p-6 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden 
                      ${isMobileMenuOpen 
                        ? 'pointer-events-auto translate-y-0 opacity-100' 
                        : 'pointer-events-none -translate-y-4 opacity-0'
                      }`}>
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`/${item.toLowerCase()}`} 
            className="cormorant-garamond block rounded-r-lg border-l-2 border-transparent py-3 text-lg
                       font-semibold uppercase tracking-wider text-white/90
                       transition-all duration-300 hover:border-[#e0b97c]
                       hover:bg-white/5 hover:pl-4 hover:text-[#e0b97c]" 
            onClick={toggleMobileMenu}
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            }}
          >
            {item}
          </a>
        ))}
      
        <button 
          className="cormorant-garamond mt-6 w-full rounded-xl border border-white/20 bg-gradient-to-br from-[#6d2c91] via-[#5c1d84]
                     to-[#240b36] px-6 py-3 text-sm
                     font-semibold uppercase tracking-wider 
                     text-white shadow-inner
                     transition-all duration-300 ease-in-out
                     hover:shadow-lg"
          onClick={handleAdminClick}
          style={{
            boxShadow: 'inset 0 0 4px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          Admin
        </button>
      </div>

      {isPasskeyModalOpen && <PasskeyModal onClose={handlePasskeyModalClose} />}
    </nav>
  );
}
