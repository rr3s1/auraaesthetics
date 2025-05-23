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
        
        if (heroContentWrapperRef.current) {
          heroContentWrapperRef.current.style.opacity = opacity.toString();
          heroContentWrapperRef.current.style.transform = `scale(${scale})`;
          // Prevent interaction when faded
          heroContentWrapperRef.current.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
        }
      });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define a warmer base background color
  const warmBgColor = '#1c0800'; // A very dark, warm reddish-brown

  return (
    <div className="relative no-scrollbar" style={{ backgroundColor: warmBgColor, overflowX: 'hidden' }}> {/* Changed from bg-black to warmBgColor */}
      <Navbar />
      {/* Hero Area */}
      <div className="pb-30 relative h-screen w-full overflow-hidden no-scrollbar"> {/* Full height on all screens */}
        {/* Enhanced Warm Background Gradients for Hero - behind Spline */}
        <div className="absolute inset-0 z-[-1] no-scrollbar">
          {/* Element 1: Large top-left sunset orange/red */}
          <div className="absolute -left-1/3 -top-1/3 size-full rounded-full bg-gradient-radial from-orange-500/75 via-red-600/50 to-transparent no-scrollbar" style={{ filter: 'blur(160px)' }} />
          {/* Element 2: Large bottom-right magenta/fiery rose */}
          <div className="absolute -bottom-1/3 -right-1/3 size-full rounded-full bg-gradient-radial from-rose-500/80 via-pink-600/55 to-transparent no-scrollbar" style={{ filter: 'blur(140px)' }} />
          {/* Element 3: Central golden ember, very large and diffuse */}
          <div className="absolute left-1/4 top-1/4 size-[150%] rounded-full bg-gradient-radial from-amber-400/65 via-yellow-600/40 to-transparent opacity-80 no-scrollbar" style={{ filter: 'blur(200px)' }} />
          {/* Element 4: Additional accent - top right, fiery orange */}
          <div className="absolute -top-1/2 right-0 size-3/4 animate-pulse-slow rounded-full bg-gradient-radial from-orange-500/75 via-red-600/50 to-transparent opacity-70 no-scrollbar" style={{ filter: 'blur(160px)' }} />
          {/* Element 5: Additional accent - bottom left, deep rose */}
          <div className="absolute -bottom-1/2 left-0 size-3/4 animate-pulse-slower rounded-full bg-gradient-radial from-rose-500/80 via-pink-600/55 to-transparent opacity-70 no-scrollbar" style={{ filter: 'blur(140px)' }} />
        </div>

        <div className="pointer-events-auto absolute inset-0 z-0 no-scrollbar">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentWrapperRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10,
          // pointerEvents handled by JS now
        }}>
          <div className="container mx-auto no-scrollbar">
            <Suspense fallback={<div className="flex size-full items-center justify-center text-xl text-white">Loading Aura Experience...</div>}>
              <HeroContent />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-16 text-white no-scrollbar md:py-24" style={{ backgroundColor: warmBgColor, marginTop: '-10vh', overflowX: 'hidden', width: '100%' }}>
        {/* Updated Gradients with Warmer Colors and Increased Impact */}
        <div className="absolute -right-20 -top-20 z-[1] size-3/5 rounded-full bg-gradient-radial from-amber-100/40 via-orange-200/30 to-transparent opacity-60 no-scrollbar" style={{ filter: 'blur(600px)' }} /> {/* Was white__gradient */}
        <div className="absolute -right-1/4 top-1/4 z-[1] size-4/5 rounded-full bg-gradient-to-b from-transparent to-red-800/80 opacity-50 no-scrollbar" style={{ filter: 'blur(150px)' }} /> {/* Was blue__gradient */}
        <div className="absolute -bottom-20 -left-20 z-[1] size-3/5 rounded-full bg-gradient-to-b from-transparent to-red-800/80 opacity-50 no-scrollbar" style={{ filter: 'blur(150px)' }} /> {/* Was blue__gradient */}
       
        <div className="no-scrollbar" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}> {/* Full width container */}
          {/* --- THE AURA DIFFERENCE --- */}
          
        {/* Container for other components with constrained width */}
        <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond no-scrollbar">
            <TestimonialBlockquote 
              quote="Where science meets artistry, and confidence is beautifully sculpted."
              citation="– The Aura Aesthetics Philosophy"
              className="border-y border-gray-700 py-10 text-center text-2xl italic opacity-90 sm:text-3xl md:col-span-2 lg:text-5xl"
            />
          </div>
          <div className="w-full no-scrollbar">
            <AuraDifferenceSection />
          </div>
          
        
          {/* Container for all other components with constrained width */}
          <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond no-scrollbar">
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
