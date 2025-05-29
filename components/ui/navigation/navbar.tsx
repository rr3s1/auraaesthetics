"use client";

import Link from 'next/link';
import React from 'react';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavbarLogo } from "@/components/ui/resizable-navbar";
import { MotionGradientButton } from '../animations/animated-components';
import { IconHome, IconUser, IconMessage } from '@tabler/icons-react';

export function NavbarComponent() {
  // Create a component for the icons that will properly handle hover states
  const NavIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors duration-200">
      {children}
    </div>
  );

  const navItems = [
    {
      name: "Services",
      link: "/services",
      icon: <NavIcon><IconHome className="h-full w-full" /></NavIcon>,
    },
    {
      name: "About",
      link: "/about",
      icon: <NavIcon><IconUser className="h-full w-full" /></NavIcon>,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <NavIcon><IconMessage className="h-full w-full" /></NavIcon>,
    },
  ];
  
  // Admin button that will be displayed on the right
  const AdminButton = () => (
    <div className="flex items-center justify-end w-[120px] pl-10">
      <MotionGradientButton
        href="/admin"
        variant="variant"
        className="cormorant-garamond px-2 py-1 text-sm w-[75%] sm:px-3 sm:py-1.5 sm:text-base md:px-4 md:py-2"
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
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full ">
      <div className="flex items-center pl-2 pr-6 py-3 bg-project-bg/90 dark:bg-project-bg backdrop-blur-md border-transparent">
        {/* Logo on the left */}
        <div className="flex items-center w-[120px]">
          <Link href="/" className="group inline-block" aria-label="AURA Homepage">
            <NavbarLogo />
          </Link>
        </div>
        
        {/* Navigation items in the middle */}
        <div className="flex-grow flex items-center justify-center">
          <div className="flex items-center space-x-8 pl-4 pr-10 ">
            {navItems.map((item, idx) => (
              <a
                key={`nav-item-${idx}`}
                href={item.link}
                className="relative items-center flex space-x-1 dark:text-orange-600 hover:text-white dark:hover:text-white group transition-colors duration-200"
              >
                <span className="block sm:hidden">{item.icon}</span>
                <span className="hidden sm:block text-sm lg:text-lg font-medium uppercase">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Admin button on the right */}
        <div className="flex items-center w-[120px] justify-end">
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
      </div>
    </div>
  );
}
