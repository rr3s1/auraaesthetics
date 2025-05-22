"use client";

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Navbar } from '../navigation/navbar';
import { HeroSplineBackground } from './hero-spline-background';
import { HeroContent } from './hero-content';
import { AuraDifferenceSection } from '../content-sections/aura-difference-section';
import { TestimonialBlockquote } from '../content-sections/testimonial-blockquote';
import { SignatureTreatmentsSection } from '../content-sections/signature-treatments-section';
import { RefinedNaturalismSection } from '../content-sections/refined-naturalism-section';
import { AestheticInnovationSection } from '../content-sections/aesthetic-innovation-section';
import { PersonalisedJourneySection } from '../content-sections/personalised-journey-section';
import { ClientTransformationsSection } from '../content-sections/client-transformations-section';
import { AwardsExpertiseSection } from '../content-sections/awards-expertise-section';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
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
      <div className="relative h-screen w-full pb-30 overflow-hidden"> {/* Full height on all screens */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentWrapperRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10,
          // pointerEvents handled by JS now
        }}>
          <div className="container mx-auto">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white text-xl">Loading Aura Experience...</div>}>
              <HeroContent />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="bg-black relative z-10 text-white py-16 md:py-24" style={{ marginTop: '-10vh', overflowX: 'hidden', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}> {/* Full width container */}
          {/* --- THE AURA DIFFERENCE --- */}
          <div className="w-full">
            <AuraDifferenceSection />
          </div>
          
          {/* Container for other components with constrained width */}
          <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond">
            <TestimonialBlockquote 
              quote="Where science meets artistry, and confidence is beautifully sculpted."
              citation="– The Aura Aesthetics Philosophy"
              className="md:col-span-2 text-center text-2xl sm:text-3xl lg:text-5xl italic opacity-90 py-10 border-t border-b border-gray-700"
            />
          </div>

          {/* Container for all other components with constrained width */}
          <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond">
            {/* --- OUR SIGNATURE TREATMENTS --- */}
            <SignatureTreatmentsSection />
            
            <TestimonialBlockquote 
              quote="Revealing your Inner Radiance, Sculpting Timeless Elegance."
              citation="– The Aura Aesthetics Team"
              className="text-center text-2xl sm:text-3xl lg:text-4xl italic opacity-90 py-12 border-t border-b border-gray-700 cinzel-decorative-bold"
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
              className="text-center text-xl sm:text-2xl lg:text-3xl italic opacity-90 py-10 mb-20 border-t border-b border-purple-400 max-w-3xl mx-auto cinzel-decorative-bold bg-gradient-to-r from-purple-900/20 to-indigo-900/20 text-gradient-to-r from-purple-200 to-indigo-100 rounded-lg shadow-lg"
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
