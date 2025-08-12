"use client";

import { useEffect } from 'react';

import { HeroSection } from '@/components/ui/hero';
import { PerformanceMonitor } from '@/components/ui/PerformanceMonitor';
import { ResourcePreloader } from '@/components/ui/ResourcePreloader';

export default function LandingPage() {
  useEffect(() => {
    // Register service worker for caching and performance
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-site-bg">
      <ResourcePreloader />
      <PerformanceMonitor />
      <HeroSection />
    </main>
  );
}
