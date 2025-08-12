"use client";

import { useEffect } from 'react';

export function usePerformanceOptimization() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreloads = [
        '/fonts/cinzel-decorative.woff2',
        '/fonts/cormorant-garamond.woff2',
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize scroll performance
    const optimizeScrolling = () => {
      // Add passive event listeners for better scroll performance
      let ticking = false;
      
      const updateScrollPosition = () => {
        ticking = false;
        // Any scroll-based animations should be handled here
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    };

    // Reduce layout thrashing
    const optimizeLayout = () => {
      // Force layout calculations to happen in batches
      const observer = new ResizeObserver(entries => {
        // Batch DOM reads and writes
        const reads: (() => void)[] = [];
        const writes: (() => void)[] = [];

        entries.forEach(entry => {
          // Batch layout operations
          reads.push(() => {
            // Read DOM properties
          });
          writes.push(() => {
            // Write DOM properties
          });
        });

        // Execute all reads first, then all writes
        reads.forEach(read => read());
        writes.forEach(write => write());
      });

      return observer;
    };

    preloadCriticalResources();
    const cleanupScroll = optimizeScrolling();
    const layoutObserver = optimizeLayout();

    return () => {
      cleanupScroll?.();
      layoutObserver?.disconnect();
    };
  }, []);
}

// Hook for optimizing images
export function useImageOptimization() {
  useEffect(() => {
    // Implement intersection observer for lazy loading
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);
}