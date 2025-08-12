"use client";

import React, { useEffect, useRef, Suspense, useCallback, lazy } from 'react';

import { LazySection } from '../LazySection';
import { NavbarComponent } from '../navigation/navbar';

import { HeroContent } from './hero-content';

// Lazy load heavy components to reduce initial bundle size
const HeroSplineBackground = lazy(() => import('./hero-spline-background').then(m => ({ default: m.HeroSplineBackground })));
const AnimatedPhilosophy = lazy(() => import('../content-sections').then(m => ({ default: m.AnimatedPhilosophy })));
const AuraDifferenceSection = lazy(() => import('../content-sections/aura-difference-section').then(m => ({ default: m.AuraDifferenceSection })));
const AwardsExpertiseSection = lazy(() => import('../content-sections/awards-expertise-section').then(m => ({ default: m.AwardsExpertiseSection })));
const ClientTransformationsSection = lazy(() => import('../content-sections/client-transformations-section').then(m => ({ default: m.ClientTransformationsSection })));
const ContactAndNewsletterSection = lazy(() => import('../content-sections/ContactAndNewsletterSection'));
const SignatureTreatmentsSection = lazy(() => import('../content-sections/signature-treatments-section').then(m => ({ default: m.SignatureTreatmentsSection })));
const TestimonialBlockquote = lazy(() => import('../content-sections/testimonial-blockquote').then(m => ({ default: m.TestimonialBlockquote })));
const TestimonialCards = lazy(() => import('../content-sections/TestimonialCards'));
const UnifiedLuxurySections = lazy(() => import('../content-sections/unified-luxury-sections').then(m => ({ default: m.UnifiedLuxurySections })));

export const HeroSection = () => {
  const heroContentWrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      if (heroContentWrapperRef.current) {
        const scrollPosition = window.pageYOffset;
        const maxScroll = 400; // Fade out over 400px
        const opacity = Math.max(0, 1 - scrollPosition / maxScroll);
        const scale = Math.max(0.95, 1 - (scrollPosition / maxScroll) * 0.05); // Reduced scale change for smoother animation
        
        // Use transform3d for hardware acceleration
        heroContentWrapperRef.current.style.opacity = opacity.toString();
        heroContentWrapperRef.current.style.transform = `translate3d(0, 0, 0) scale(${scale})`;
        heroContentWrapperRef.current.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  // Define a warmer base background color
  // const warmBgColor = '#2d1810'; // Updated to a rust-influenced dark brown // Commented out, using Tailwind class now

  return (
    <div className="relative overflow-hidden bg-site-bg"> {/* Main page overflow */}
      <NavbarComponent />
      {/* Hero Area */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* ... (hero background elements remain the same) ... */}
        <div className="absolute inset-0 z-[-1] overflow-hidden opacity-70">
          <div className="absolute -left-1/4 -top-1/4 size-1/2 rounded-full bg-gradient-radial from-accent-yellow-dark/70 via-accent-orange/50 to-transparent md:size-3/4" style={{ filter: 'blur(80px)' }} />
          <div className="absolute -bottom-1/4 -right-1/4 size-1/2 rounded-full bg-gradient-radial from-accent-red/70 via-accent-red-deep/50 to-transparent md:size-3/4" style={{ filter: 'blur(80px)' }} />
          <div className="absolute left-1/4 top-1/4 size-1/2 rounded-full bg-gradient-radial from-accent-yellow/60 via-accent-yellow-dark/40 to-transparent md:size-3/4" style={{ filter: 'blur(100px)' }} />
        </div>

        <div className="hero-gradient-mask absolute inset-0 z-0">
          <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-accent-yellow-dark/20 to-accent-red/20" />}>
            <HeroSplineBackground />
          </Suspense>
        </div>

        <div ref={heroContentWrapperRef} className="hero-gradient-mask" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10,
          willChange: 'transform, opacity',
        }}>
          <div className="container mx-auto">
            <Suspense fallback={<div className="flex size-full items-center justify-center text-xl text-white">Loading Aura Experience...</div>}>
              <HeroContent />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Enhanced Transition Section with smoother transition */}
      <div 
        className="bg-project-bg relative z-10 overflow-hidden py-16 text-text-primary md:py-24" // Added overflow-hidden here
      >
           
        {/* Ambient overlays BEHIND the content now */}
        <div className="absolute -right-20 -top-20 z-[-1] size-2/5 rounded-full bg-gradient-radial from-accent-orange/25 via-accent-yellow-dark/15 to-transparent opacity-30" style={{ filter: 'blur(400px)' }} />
        <div className="absolute -bottom-20 -left-20 z-[-1] size-2/5 rounded-full bg-gradient-radial from-accent-red/30 to-transparent opacity-25" style={{ filter: 'blur(300px)' }} />
        <LazySection className="w-full" fallback={<div className="h-32 w-full animate-pulse bg-gradient-to-r from-accent-yellow-dark/10 to-accent-orange/10" />}>
          <Suspense fallback={<div className="h-32 w-full animate-pulse bg-gradient-to-r from-accent-yellow-dark/10 to-accent-orange/10" />}>
            <AuraDifferenceSection />
          </Suspense>
        </LazySection>
        
        <LazySection fallback={<div className="h-24 w-full animate-pulse bg-gradient-to-r from-accent-red/10 to-accent-yellow/10" />}>
          <Suspense fallback={<div className="h-24 w-full animate-pulse bg-gradient-to-r from-accent-red/10 to-accent-yellow/10" />}>
            <AnimatedPhilosophy/>
          </Suspense>
        </LazySection>
        
        {/* Content wrapper - will now be on top of the z-[-1] overlays */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%', position: 'relative' }}>
            {/* --- OUR SIGNATURE TREATMENTS --- */}
            <LazySection fallback={<div className="h-96 w-full animate-pulse bg-gradient-to-r from-accent-orange/10 to-accent-red/10" />}>
              <Suspense fallback={<div className="h-96 w-full animate-pulse bg-gradient-to-r from-accent-orange/10 to-accent-red/10" />}>
                <SignatureTreatmentsSection />
              </Suspense>
            </LazySection>
          
          {/* Container for all other components with constrained width */}
          <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond">
          
            <LazySection fallback={<div className="h-32 w-full animate-pulse rounded-xl bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10" />}>
              <Suspense fallback={<div className="h-32 w-full animate-pulse rounded-xl bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10" />}>
                <TestimonialBlockquote 
                  quote="Revealing your Inner Radiance, Sculpting Timeless Elegance."
                  citation="– The Aura Aesthetics Team"
                  className="
                    mx-auto                   
                    max-w-4xl        
                    rounded-xl                 
                    border-y-2 border-accent-orange/70      
                    bg-gradient-to-br    
                    from-content-bg via-accent-yellow/15 to-content-bg px-8 
                    py-12                      
                    opacity-100       
                    shadow-xl               
                  "
                  quoteClassName="
                    cinzel-decorative-bold     
                    text-text-primary          
                    text-2xl sm:text-3xl lg:text-4xl 
                    italic                     
                    leading-snug sm:leading-normal 
                  "
                />
              </Suspense>
            </LazySection>
            
            <LazySection fallback={<div className="h-64 w-full animate-pulse bg-gradient-to-r from-accent-red/10 to-accent-yellow-dark/10" />}>
              <Suspense fallback={<div className="h-64 w-full animate-pulse bg-gradient-to-r from-accent-red/10 to-accent-yellow-dark/10" />}>
                <UnifiedLuxurySections />
              </Suspense>
            </LazySection>
            
            {/* --- CLIENT TRANSFORMATIONS CTA --- */}
            <LazySection fallback={<div className="h-48 w-full animate-pulse bg-gradient-to-r from-accent-orange/10 to-accent-red/10" />}>
              <Suspense fallback={<div className="h-48 w-full animate-pulse bg-gradient-to-r from-accent-orange/10 to-accent-red/10" />}>
                <ClientTransformationsSection />
              </Suspense>
            </LazySection>

            {/* --- AWARDS/EXPERTISE --- */}
            <LazySection fallback={<div className="h-40 w-full animate-pulse bg-gradient-to-r from-accent-yellow-dark/10 to-accent-orange/10" />}>
              <Suspense fallback={<div className="h-40 w-full animate-pulse bg-gradient-to-r from-accent-yellow-dark/10 to-accent-orange/10" />}>
                <AwardsExpertiseSection />
              </Suspense>
            </LazySection>
            
            <LazySection fallback={<div className="h-56 w-full animate-pulse bg-gradient-to-r from-accent-red/10 to-accent-yellow/10" />}>
              <Suspense fallback={<div className="h-56 w-full animate-pulse bg-gradient-to-r from-accent-red/10 to-accent-yellow/10" />}>
                <TestimonialCards />
              </Suspense>
            </LazySection>
          </div>
        </div>
      </div>

      <LazySection fallback={<div className="h-64 w-full animate-pulse bg-gradient-to-r from-accent-yellow-dark/10 to-accent-red/10" />}>
        <Suspense fallback={<div className="h-64 w-full animate-pulse bg-gradient-to-r from-accent-yellow-dark/10 to-accent-red/10" />}>
          <ContactAndNewsletterSection />
        </Suspense>
      </LazySection>
    </div>
  );
};
