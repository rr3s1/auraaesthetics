"use client";

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback for browsers that don't support LCP
      }

      // First Input Delay (FID) - replaced by Interaction to Next Paint (INP)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Fallback for browsers that don't support FID
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support CLS
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    // Monitor resource loading
    const monitorResources = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 1000) { // Resources taking more than 1s
            console.warn('Slow resource:', entry.name, entry.duration + 'ms');
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ['resource'] });
      } catch (e) {
        // Fallback
      }

      return () => observer.disconnect();
    };

    // Monitor long tasks (blocking main thread)
    const monitorLongTasks = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.warn('Long task detected:', entry.duration + 'ms');
        });
      });
      
      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Fallback for browsers that don't support longtask
      }

      return () => observer.disconnect();
    };

    const cleanupWebVitals = observeWebVitals();
    const cleanupResources = monitorResources();
    const cleanupLongTasks = monitorLongTasks();

    return () => {
      cleanupWebVitals?.();
      cleanupResources?.();
      cleanupLongTasks?.();
    };
  }, []);

  return null; // This component doesn't render anything
}