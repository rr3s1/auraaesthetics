"use client";

import { useState } from "react";
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavbarLogo } from "@/components/ui/resizable-navbar";
import { MotionGradientButton } from '@/components/ui/animations/animated-components';

export function AuraFloatingNavbar() {
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
  
  // Logo component that will be displayed on the left
  const LogoSection = () => (
    <div className="flex items-center mr-6">
      <Link href="/" className="group inline-block" aria-label="AURA Homepage">
        <NavbarLogo />
      </Link>
    </div>
  );
  
  // Admin button that will be displayed on the right
  const AdminButton = () => (
    <div className="flex items-center">
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
  );

  return (
    <div className="relative w-full">
      <FloatingNav 
        navItems={navItems}
        className="pl-6 pr-6 py-3 bg-white/90 dark:bg-black/80 backdrop-blur-md border-transparent"
        rightContent={
          <>
            <LogoSection />
            <div className="flex-grow" />
            <AdminButton />
          </>
        }
      />
    </div>
  );
}
