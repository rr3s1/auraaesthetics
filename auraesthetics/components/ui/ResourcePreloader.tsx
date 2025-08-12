"use client";

import { useEffect } from 'react';

interface PreloadResource {
  href: string;
  as: 'image' | 'font' | 'script' | 'style' | 'video';
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

const CRITICAL_RESOURCES: PreloadResource[] = [
  // Critical images for hero section
  {
    href: '/assets/icons/logo-icon.svg',
    as: 'image',
    type: 'image/svg+xml',
  },
  {
    href: '/assets/luxury-texture.svg',
    as: 'image',
    type: 'image/svg+xml',
  },
  // Critical fonts
  {
    href: 'https://fonts.gstatic.com/s/cinzeldecorative/v16/daaCSScvJGqLYhG8nNt8KPPswUAPnh7URs0.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    href: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
];

export function ResourcePreloader() {
  useEffect(() => {
    // Preload critical resources
    CRITICAL_RESOURCES.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) {
        link.type = resource.type;
      }
      
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }
      
      // Only add if not already present
      const existing = document.querySelector(`link[href="${resource.href}"]`);
      if (!existing) {
        document.head.appendChild(link);
      }
    });

    // Preload critical images that will be visible immediately
    const criticalImages = [
      '/TreatmentRoom.png',
      '/assets/star4.png',
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Prefetch resources that will be needed soon
    const prefetchResources = [
      '/laser.png',
      '/client_SCase.png',
      '/frontEnd.png',
    ];

    // Use requestIdleCallback for non-critical prefetching
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        prefetchResources.forEach((src) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = src;
          document.head.appendChild(link);
        });
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        prefetchResources.forEach((src) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = src;
          document.head.appendChild(link);
        });
      }, 2000);
    }
  }, []);

  return null; // This component doesn't render anything
}