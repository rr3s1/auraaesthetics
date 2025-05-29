"use client";

import { IconHome, IconUser, IconMessage } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

import { NavbarLogo } from "@/components/ui/resizable-navbar";

import { MotionGradientButton } from '../animations/animated-components';

export function NavbarComponent() {
  // Create a component for the icons that will properly handle hover states
  const NavIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="size-5 text-orange-600 transition-colors duration-200 group-hover:text-white">
      {children}
    </div>
  );

  const navItems = [
    {
      name: "Services",
      link: "/services",
      icon: <NavIcon><IconHome className="size-full" /></NavIcon>,
    },
    {
      name: "About",
      link: "/about",
      icon: <NavIcon><IconUser className="size-full" /></NavIcon>,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <NavIcon><IconMessage className="size-full" /></NavIcon>,
    },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full ">
      <div className="bg-project-bg/90 dark:bg-project-bg flex items-center border-transparent py-3 pl-2 pr-6 backdrop-blur-md">
        {/* Logo on the left */}
        <div className="flex w-[120px] items-center">
          <Link href="/" className="group inline-block" aria-label="AURA Homepage">
            <NavbarLogo />
          </Link>
        </div>
        
        {/* Navigation items in the middle */}
        <div className="flex grow items-center justify-center">
          <div className="flex items-center space-x-8 pl-4 pr-10 ">
            {navItems.map((item, idx) => (
              <a
                key={`nav-item-${idx}`}
                href={item.link}
                className="group relative flex items-center space-x-1 transition-colors duration-200 hover:text-white dark:text-orange-600 dark:hover:text-white"
              >
                <span className="block sm:hidden">{item.icon}</span>
                <span className="hidden text-sm font-medium uppercase sm:block lg:text-lg">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Admin button on the right */}
        <div className="flex w-[120px] items-center justify-end">
          <MotionGradientButton
            href="/admin"
            variant="variant"
            className="cormorant-garamond p-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2"
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
