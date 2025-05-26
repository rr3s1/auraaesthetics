"use client";

import Link from 'next/link';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { GradientButton } from '../gradient-button';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ClientTransformationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const refs = [sectionRef.current, titleRef.current, paragraphRef.current, ctaWrapperRef.current];
    if (refs.some(ref => !ref)) {
      return;
    }

    const ctx = gsap.context(() => {
      // Section animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true, onEnter: () => gsap.set(sectionRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(sectionRef.current, {visibility: 'hidden'});

      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: 0.2,
          scrollTrigger: { trigger: titleRef.current, start: "top 90%", once: true, onEnter: () => gsap.set(titleRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(titleRef.current, {visibility: 'hidden'});

      // Paragraph animation
      gsap.fromTo(paragraphRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: 0.4,
          scrollTrigger: { trigger: paragraphRef.current, start: "top 90%", once: true, onEnter: () => gsap.set(paragraphRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(paragraphRef.current, {visibility: 'hidden'});

      // CTA Button Wrapper animation
      gsap.fromTo(ctaWrapperRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)', delay: 0.6, // Using ease for a bit of bounce like spring
          scrollTrigger: { trigger: ctaWrapperRef.current, start: "top 95%", once: true, onEnter: () => gsap.set(ctaWrapperRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(ctaWrapperRef.current, {visibility: 'hidden'});

      // CTA Button hover and tap effects
      if (ctaWrapperRef.current) {
        const cta = ctaWrapperRef.current;
        cta.addEventListener('mouseenter', () => {
          gsap.to(cta, { scale: 1.05, boxShadow: '0px 0px 15px rgba(220, 180, 255, 0.4)', duration: 0.2 }); // Adjusted shadow color
        });
        cta.addEventListener('mouseleave', () => {
          gsap.to(cta, { scale: 1, boxShadow: '0px 0px 0px rgba(220, 180, 255, 0)', duration: 0.2 });
        });
        cta.addEventListener('mousedown', () => {
          gsap.to(cta, { scale: 0.95, duration: 0.1 });
        });
        cta.addEventListener('mouseup', () => {
          gsap.to(cta, { scale: 1.05, duration: 0.1 }); // Return to hover scale if mouse is still over
        });
        // Ensure it returns to normal scale if mouseup happens outside
        document.addEventListener('mouseup', () => {
            if (!cta.matches(':hover')) { // Check if mouse is NOT over the element
                gsap.to(cta, { scale: 1, duration: 0.1 });
            }
        });
      }

    }, sectionRef); // Scope GSAP context

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-center py-20 px-6" // Added padding for consistency
    >
      <h2 
        ref={titleRef} 
        className="cormorant-garamond mb-8 bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl"
      >
        CLIENT TRANSFORMATIONS & <span className="text-pink-300">TESTIMONIALS</span>
      </h2>
      <p 
        ref={paragraphRef} 
        className="cormorant-garamond mb-10 text-2xl text-indigo-100 lg:text-3xl"
      >
        Hear from our valued clients and witness the beautiful transformations achieved at Aura Aesthetics.
      </p>
      <div ref={ctaWrapperRef} className="inline-block"> {/* Added inline-block for proper scaling center */} 
        <Link href="#">
          <GradientButton className="scale-100 text-xl font-medium md:text-2xl">
            View Gallery & Testimonials
          </GradientButton>
        </Link>
      </div>
    </section>
  );
}
