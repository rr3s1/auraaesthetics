"use client";

import React, { useEffect, useRef, Suspense } from 'react';

import { AestheticInnovationSection } from '../content-sections/aesthetic-innovation-section';
import { AuraDifferenceSection } from '../content-sections/aura-difference-section';
import { AwardsExpertiseSection } from '../content-sections/awards-expertise-section';
import { ClientTransformationsSection } from '../content-sections/client-transformations-section';
import { PersonalisedJourneySection } from '../content-sections/personalised-journey-section';
import { RefinedNaturalismSection } from '../content-sections/refined-naturalism-section';
import { SignatureTreatmentsSection } from '../content-sections/signature-treatments-section';
import { TestimonialBlockquote } from '../content-sections/testimonial-blockquote';
import { Navbar } from '../navigation/navbar';

import { HeroContent } from './hero-content';
import { HeroSplineBackground } from './hero-spline-background';

export const HeroSection = () => {
  const heroContentWrapperRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (heroContentWrapperRef.current) {
      requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;
        const maxScroll = 400; // Fade out over 400px
        const opacity = Math.max(0, 1 - scrollPosition / maxScroll); // Ensure opacity doesn't go below 0
        const scale = Math.max(0.9, 1 - (scrollPosition / maxScroll) * 0.1); // Subtle scale down
        
        heroContentWrapperRef.current.style.opacity = opacity.toString();
        heroContentWrapperRef.current.style.transform = `scale(${scale})`;
        // Prevent interaction when faded
        heroContentWrapperRef.current.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
      });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black" style={{ overflowX: 'hidden' }}> {/* Ensure base background for areas not covered */}
      <Navbar />
      {/* Hero Area */}
      <div className="pb-30 relative h-screen w-full overflow-hidden"> {/* Full height on all screens */}
        <div className="pointer-events-auto absolute inset-0 z-0">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentWrapperRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10,
          // pointerEvents handled by JS now
        }}>
          <div className="container mx-auto">
            <Suspense fallback={<div className="flex size-full items-center justify-center text-xl text-white">Loading Aura Experience...</div>}>
              <HeroContent />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-black py-16 text-white md:py-24" style={{ marginTop: '-10vh', overflowX: 'hidden', width: '100%' }}>
      <div className="absolute z-[1] w-[20%] h-[20%] rounded-full right-100 top-100 opacity-30 white__gradient" />
      <div className="absolute z-[1] w-[50%] h-[50%] rounded-full right-1 opacity-20 blue__gradient" />
      <div className="absolute z-[1] w-[64%] h-[64%] rounded-full left-10 bottom-30 opacity-20 blue__gradient" />
      <div className="absolute z-[1] w-[64%] h-[64%] rounded-full left-10 bottom-0 opacity-20 blue__gradient" />
       
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}> {/* Full width container */}
          {/* --- THE AURA DIFFERENCE --- */}
          
        {/* Container for other components with constrained width */}
        <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond">
            <TestimonialBlockquote 
              quote="Where science meets artistry, and confidence is beautifully sculpted."
              citation="– The Aura Aesthetics Philosophy"
              className="border-y border-gray-700 py-10 text-center text-2xl italic opacity-90 sm:text-3xl md:col-span-2 lg:text-5xl"
            />
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
              className="cinzel-decorative-bold border-y border-gray-700 py-12 text-center text-2xl italic opacity-90 sm:text-3xl lg:text-4xl"
            />

            {/* --- REFINED NATURALISM --- */}
            <RefinedNaturalismSection />

            {/* --- AESTHETIC INNOVATION --- */}
            <AestheticInnovationSection />

            {/* --- PERSONALISED JOURNEYS --- */}
            <PersonalisedJourneySection />
            
            {/* --- TESTIMONIAL BLOCKQUOTE --- */}
            <TestimonialBlockquote 
              quote="The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly. I feel more confident and radiant than ever before!"
              citation="– A Delighted Aura Client"
              className="cinzel-decorative-bold text-gradient-to-r mx-auto mb-20 max-w-3xl rounded-lg border-y border-purple-400 bg-gradient-to-r from-purple-200 from-purple-900/20 to-indigo-100 to-indigo-900/20 py-10 text-center text-xl italic opacity-90 shadow-lg sm:text-2xl lg:text-3xl"
            />

            {/* --- CLIENT TRANSFORMATIONS CTA --- */}
            <ClientTransformationsSection />

            {/* --- AWARDS/EXPERTISE --- */}
            <AwardsExpertiseSection />
          </div>
        </div>
      </div>
    </div>
  );
};
