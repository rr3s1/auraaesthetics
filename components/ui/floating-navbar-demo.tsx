"use client";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from 'next/link';
import React from "react";

import { MotionGradientButton } from '@/components/ui/animations/animated-components';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavbarLogo } from "@/components/ui/resizable-navbar";


export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Services",
      link: "/services",
      icon: <IconHome className="size-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="size-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="size-4 text-neutral-500 dark:text-white" />,
    },
  ];
  
  const CustomRightContent = () => (
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
        ADMIN2
      </MotionGradientButton>
    </div>
  );
  
  return (
    <div className="relative w-full">
      <FloatingNav 
        navItems={navItems} 
        rightContent={<CustomRightContent />} 
        className="border-accent-yellow-dark/30 bg-gradient-to-r from-accent-yellow-dark/80 via-accent-orange/80 to-accent-red/80 backdrop-blur-md"
      />
    </div>
  );
}
