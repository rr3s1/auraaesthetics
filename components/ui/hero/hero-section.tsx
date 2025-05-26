"use client";

import React, { useEffect, useRef, Suspense, useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AuraDifferenceSection } from '../content-sections/aura-difference-section';
import { AwardsExpertiseSection } from '../content-sections/awards-expertise-section';
import { ClientTransformationsSection } from '../content-sections/client-transformations-section';
import ContactAndNewsletterSection from '../content-sections/ContactAndNewsletterSection';
import { SignatureTreatmentsSection } from '../content-sections/signature-treatments-section';
import { TestimonialBlockquote } from '../content-sections/testimonial-blockquote';
import { UnifiedLuxurySections } from '../content-sections/unified-luxury-sections';
import { Navbar } from '../navigation/navbar';

import { HeroContent } from './hero-content';
import { HeroSplineBackground } from './hero-spline-background';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroContentWrapperRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null); // Ref for the main hero section (scroll trigger)

  useLayoutEffect(() => {
    if (!heroContentWrapperRef.current || !heroSectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroSectionRef.current,
        start: "top top",
        end: "+=400", // Animate over 400px of scroll
        scrub: true,
        animation: gsap.to(heroContentWrapperRef.current, {
          autoAlpha: 0, // Fades out and sets visibility: hidden
          scale: 0.95,
          ease: "none"
        }),
        // For debugging ScrollTrigger positions:
        // markers: true 
      });
    }, heroSectionRef); // scope context to heroSectionRef for cleanup

    return () => ctx.revert(); // Cleanup GSAP animations and ScrollTriggers
  }, []);

  // Define a warmer base background color
  const warmBgColor = '#2d1810'; // Updated to a rust-influenced dark brown

  return (
    <div className="relative" style={{ backgroundColor: warmBgColor }}> {/* Removed overflowX hidden and no-scrollbar */}
      <Navbar />
      {/* Hero Area */}
      <div ref={heroSectionRef} className="relative h-screen w-full"> {/* Removed overflow-hidden and no-scrollbar to fix scroll issues */}
        {/* Simplified and optimized background gradients - reduced from 5 to 3 elements */}
        <div className="absolute inset-0 z-[-1]">
          {/* Element 1: Main gradient - top left */}
          <div className="absolute -left-1/4 -top-1/4 size-3/4 rounded-full bg-gradient-radial from-orange-500/60 via-red-600/40 to-transparent" style={{ filter: 'blur(120px)' }} />
          {/* Element 2: Main gradient - bottom right */}
          <div className="absolute -bottom-1/4 -right-1/4 size-3/4 rounded-full bg-gradient-radial from-rose-500/60 via-pink-600/40 to-transparent" style={{ filter: 'blur(120px)' }} />
          {/* Element 3: Central ambient glow - removed animation for better performance */}
          <div className="absolute left-1/4 top-1/4 size-3/4 rounded-full bg-gradient-radial from-amber-400/50 via-yellow-600/30 to-transparent" style={{ filter: 'blur(140px)' }} />
        </div>

        <div className="absolute inset-0 z-0">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentWrapperRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10,
          willChange: 'transform, opacity', // Optimize for animations
          // Initial opacity and scale are now handled by GSAP if needed, or CSS.
          // For ScrollTrigger, GSAP will manage these from their current state.
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
        className="relative z-10 py-16 text-white md:py-24" 
        style={{ 
          background: 'radial-gradient(circle at 50% 0%, rgba(139, 69, 19, 0.15) 0%, rgba(100, 42, 20, 0.3) 45%, rgba(22, 7, 2, 0.85) 100%)',
          marginTop: '-5vh', // Reduced from -10vh to minimize layout shifts
        }}
      >
        {/* Simplified ambient overlays for better performance */}
        <div className="absolute -right-20 -top-20 z-[1] size-2/5 rounded-full bg-gradient-radial from-orange-800/25 via-amber-900/15 to-transparent opacity-30" style={{ filter: 'blur(400px)' }} />
        <div className="absolute -bottom-20 -left-20 z-[1] size-2/5 rounded-full bg-gradient-radial from-red-800/30 to-transparent opacity-25" style={{ filter: 'blur(300px)' }} />
       
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
          {/* --- PHILOSOPHY SECTION WITH ENHANCED TYPOGRAPHY --- */}
          
        {/* Container for philosophy quote with enhanced styling */}
        <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }}>
            {/* Enhanced Philosophy Statement */}
            <div className="mb-20 mt-20 text-center">
              <h2 className="cormorant-garamond mx-auto max-w-5xl px-4 text-3xl font-light italic leading-relaxed tracking-wide text-[#fdf7ef] md:text-4xl lg:text-5xl">
                Where science meets artistry,<br />
                <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent">
                  and confidence is beautifully sculpted.
                </span>
              </h2>
              <div className="mt-8 flex justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"></div>
              </div>
              <p className="cormorant-garamond mt-6 text-lg italic text-amber-100/80">
                – The Aura Aesthetics Philosophy
              </p>
            </div>
          </div>
          
          <div className="w-full">
            <AuraDifferenceSection />
          </div>
          
        
          {/* Container for all other components with constrained width */}
          <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond">
            {/* --- OUR SIGNATURE TREATMENTS --- */}
            <SignatureTreatmentsSection />
            
            <TestimonialBlockquote 
              quote="Revealing your Inner Radiance, Sculpting Timeless Elegance."
              citation="– The Aura Aesthetics Team"
              className="cinzel-decorative-bold rounded-lg border-y border-amber-300/20 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent py-12 text-center text-2xl italic opacity-90 sm:text-3xl lg:text-4xl"
            />
            <UnifiedLuxurySections />
           
            
            {/* --- ENHANCED TESTIMONIAL BLOCKQUOTE --- */}
            <TestimonialBlockquote 
              quote="The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly. I feel more confident and radiant than ever before!"
              citation="– A Delighted Aura Client"
              className="cinzel-decorative-bold mx-auto mb-20 max-w-3xl rounded-lg border border-amber-300/30 bg-gradient-to-r from-amber-900/20 via-orange-900/20 to-rose-900/20 px-8 py-10 text-center text-xl italic opacity-90 shadow-2xl backdrop-blur-sm sm:text-2xl lg:text-3xl"
            />

            {/* --- CLIENT TRANSFORMATIONS CTA --- */}
            <ClientTransformationsSection />

            {/* --- AWARDS/EXPERTISE --- */}
            <AwardsExpertiseSection />
          </div>
        </div>
      </div>

      <ContactAndNewsletterSection />
    </div>
  );
};
