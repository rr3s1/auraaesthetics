"use client";

import React, { useEffect, useRef, Suspense, useCallback } from 'react';

import { AuraDifferenceSection } from '../content-sections/aura-difference-section';
import { AwardsExpertiseSection } from '../content-sections/awards-expertise-section';
import { ClientTransformationsSection } from '../content-sections/client-transformations-section';
import ContactAndNewsletterSection from '../content-sections/ContactAndNewsletterSection';
import { SignatureTreatmentsSection } from '../content-sections/signature-treatments-section';
import { TestimonialBlockquote } from '../content-sections/testimonial-blockquote';
import { UnifiedLuxurySections } from '../content-sections/unified-luxury-sections';
import { NavbarComponent } from '../navigation/navbar';

import { HeroContent } from './hero-content';
import { HeroSplineBackground } from './hero-spline-background';
import { AnimatedPhilosophy } from '../content-sections';
import { PremiumTestimonialCard } from '../content-sections/PremiumTestimonialCard';

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
    <div className="relative bg-site-bg overflow-hidden"> {/* Main page overflow */}
      <NavbarComponent />
      {/* Hero Area */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* ... (hero background elements remain the same) ... */}
        <div className="absolute inset-0 z-[-1] opacity-70 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 size-1/2 md:size-3/4 rounded-full bg-gradient-radial from-accent-yellow-dark/70 via-accent-orange/50 to-transparent" style={{ filter: 'blur(80px)' }} />
          <div className="absolute -bottom-1/4 -right-1/4 size-1/2 md:size-3/4 rounded-full bg-gradient-radial from-accent-red/70 via-accent-red-deep/50 to-transparent" style={{ filter: 'blur(80px)' }} />
          <div className="absolute left-1/4 top-1/4 size-1/2 md:size-3/4 rounded-full bg-gradient-radial from-accent-yellow/60 via-accent-yellow-dark/40 to-transparent" style={{ filter: 'blur(100px)' }} />
        </div>

        <div className="absolute inset-0 z-0 hero-gradient-mask">
          <HeroSplineBackground />
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
        className="bg-project-bg relative z-10 py-16 text-text-primary md:py-24 overflow-hidden" // Added overflow-hidden here
      >
           
        {/* Ambient overlays BEHIND the content now */}
        <div className="absolute -right-20 -top-20 z-[-1] size-2/5 rounded-full bg-gradient-radial from-accent-orange/25 via-accent-yellow-dark/15 to-transparent opacity-30" style={{ filter: 'blur(400px)' }} />
        <div className="absolute -bottom-20 -left-20 z-[-1] size-2/5 rounded-full bg-gradient-radial from-accent-red/30 to-transparent opacity-25" style={{ filter: 'blur(300px)' }} />
        <div className="w-full">
            <AuraDifferenceSection />
          </div>
        <AnimatedPhilosophy/>
        {/* Content wrapper - will now be on top of the z-[-1] overlays */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%', position: 'relative' /* Ensures it participates in stacking */ }}>
            {/* --- OUR SIGNATURE TREATMENTS --- */}
            <SignatureTreatmentsSection />
            
            {/* ... (rest of the content in HeroSection) ... */}
            {/* Container for philosophy quote with enhanced styling */}
            <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }}>
              {/* ... (philosophy quote content) ... */}
            </div>
          
          
          
        
          {/* Container for all other components with constrained width */}
          <div style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%' }} className="cormorant-garamond">
          
            <TestimonialBlockquote 
              quote="Revealing your Inner Radiance, Sculpting Timeless Elegance."
              citation="– The Aura Aesthetics Team"
              className="cinzel-decorative-bold rounded-lg border-y border-accent-yellow/20 bg-gradient-to-r from-transparent via-accent-orange/10 to-transparent py-12 text-center text-2xl italic opacity-90 sm:text-3xl lg:text-4xl"
            />
            <UnifiedLuxurySections />
           
         


        {/* --- PREMIUM TESTIMONIAL --- */}
        <div className="relative my-24">
    {/* Luxury texture overlay */}
    <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-10 rounded-2xl"></div>
    
    <div className="relative z-10 bg-[url('/assets/luxury-texture.svg')] bg-cover bg-center opacity-90 border border-gold-accent/30 rounded-2xl p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Metallic gradient border */}
      <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-conic-gradient from-gold-accent via-transparent to-gold-accent animate-spin-slow opacity-10"></div>
      </div>
      
      {/* Gold foil accents */}
      <div className="absolute top-0 right-0 z-0 w-24 h-24 bg-gold-accent/10 blur-xl transform translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 z-0 w-32 h-32 bg-gold-accent/8 blur-xl transform -translate-x-12 translate-y-12"></div>
      
      {/* Content container */}
      <div className="relative z-20">
        {/* Star rating */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-gold-accent mr-1" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>
        
     
        
        <div className="pl-12 pr-8 py-2">
          {/* Headline */}
          <h3 className="playfair-display text-gold-accent text-2xl tracking-widest uppercase mb-6">
            Exceptional Experience
          </h3>
          
          {/* Testimonial text */}
          <p className="playfair-display text-light-cream text-2xl leading-relaxed italic mb-8">
            "The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly. 
            I feel more confident and radiant than ever before!"
          </p>
          
          {/* Gold divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent my-8"></div>
          
          {/* Client attribution */}
          <div className="flex items-center">
            {/* Client avatar */}
            <div className="relative mr-6">
              <div className="absolute inset-0 rounded-full border border-gold-accent/50 animate-pulse-slow"></div>
              <div className="size-16 rounded-full bg-deep-emerald flex items-center justify-center border-2 border-gold-accent/30 overflow-hidden">
                {/* Replace with actual image */}
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
            </div>
            
            <div>
              <p className="montserrat font-semibold text-light-cream text-xl mb-1">
                Sarah Johnson
              </p>
              <div className="flex items-center">
                <span className="montserrat text-gold-accent text-sm tracking-wide mr-3">
                  VERIFIED CLIENT
                </span>
                <span className="w-1 h-1 rounded-full bg-gold-accent/70"></span>
                <span className="montserrat text-light-cream/80 text-sm ml-3">
                  Facial Sculpting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



        {/* --- PREMIUM TESTIMONIAL --- */}
        <div className="relative my-24">
    {/* Luxury texture overlay */}
    <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-10 rounded-2xl"></div>
    
    <div className="relative z-10 bg-[url('/assets/luxury-texture.svg')] bg-cover bg-center opacity-100 border border-gold-accent/30 rounded-2xl p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Metallic gradient border */}
      <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-conic-gradient from-gold-accent via-transparent to-gold-accent animate-spin-slow opacity-10"></div>
      </div>
      
      {/* Gold foil accents */}
      <div className="absolute top-0 right-0 z-0 w-24 h-24 bg-gold-accent/10 blur-xl transform translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 z-0 w-32 h-32 bg-gold-accent/8 blur-xl transform -translate-x-12 translate-y-12"></div>
      
      {/* Content container */}
      <div className="relative z-20">
        {/* Star rating */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-gold-accent mr-1" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>
        
     
        
        <div className="pl-12 pr-8 py-2">
          {/* Headline */}
          <h3 className="playfair-display text-gold-accent text-2xl tracking-widest uppercase mb-6">
            Exceptional Experience
          </h3>
          
          {/* Testimonial text */}
          <p className="playfair-display text-light-cream text-2xl leading-relaxed italic mb-8">
            "The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly. 
            I feel more confident and radiant than ever before!"
          </p>
          
          {/* Gold divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent my-8"></div>
          
          {/* Client attribution */}
          <div className="flex items-center">
            {/* Client avatar */}
            <div className="relative mr-6">
              <div className="absolute inset-0 rounded-full border border-gold-accent/50 animate-pulse-slow"></div>
              <div className="size-16 rounded-full bg-deep-emerald flex items-center justify-center border-2 border-gold-accent/30 overflow-hidden">
                {/* Replace with actual image */}
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
            </div>
            
            <div>
              <p className="montserrat font-semibold text-light-cream text-xl mb-1">
                Sarah Johnson
              </p>
              <div className="flex items-center">
                <span className="montserrat text-gold-accent text-sm tracking-wide mr-3">
                  VERIFIED CLIENT
                </span>
                <span className="w-1 h-1 rounded-full bg-gold-accent/70"></span>
                <span className="montserrat text-light-cream/80 text-sm ml-3">
                  Facial Sculpting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>





   {/* --- PREMIUM TESTIMONIAL CARDS --- */}
        {/* <div className="max-w-5xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          <PremiumTestimonialCard
            headline="Exceptional Experience"
            testimonial="The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly. I feel more confident and radiant than ever before!"
            clientName="Sarah Johnson"
            clientType="VERIFIED CLIENT"
            treatment="Facial Sculpting"
          />
          <PremiumTestimonialCard
            headline="Truly Transformative"
            testimonial="Aura gave me a natural, youthful glow that friends and family immediately noticed. The care and attention to detail was second to none."
            clientName="Emily Chen"
            clientType="VERIFIED CLIENT"
            treatment="Signature Glow Treatment"
          />
          <PremiumTestimonialCard
            headline="Luxury & Comfort"
            testimonial="From the stunning clinic ambiance to the expertise of the staff, my experience was pure luxury. I left feeling rejuvenated and valued."
            clientName="Michael Lee"
            clientType="VERIFIED CLIENT"
            treatment="Wellness Infusion"
          />
        </div> */}

            
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
