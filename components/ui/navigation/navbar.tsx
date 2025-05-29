"use client";

import Link from 'next/link';
import React, { useState } from 'react';

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

import { MotionGradientButton } from '../animations/animated-components';

export function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="ml-8">
            <Link href="/" className="group inline-block" aria-label="AURA Homepage">
              <NavbarLogo />
            </Link>
          </div>
          <NavItems items={navItems} />
          <div className="mr-8 flex items-center gap-4">
          <MotionGradientButton
            href="/admin"
            variant="variant"
            className="cormorant-garamond px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)" 
            }}
            whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            ADMIN
          </MotionGradientButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" className="group inline-block" aria-label="AURA Homepage">
              <NavbarLogo />
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cormorant-garamond w-full rounded-lg p-3 text-lg font-medium text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-accent-orange dark:text-slate-500 dark:hover:bg-neutral-200 sm:text-xl"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="mt-4 flex w-full flex-col gap-4">
              <MotionGradientButton
                href="/admin"
                variant="variant"
                className="cormorant-garamond w-full justify-center px-3 py-2 text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)" 
                }}
                whileTap={{ scale: 0.98, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ADMIN
              </MotionGradientButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
