"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface TreatmentCard {
  title: string;
  image: string;
  alt: string;
  linkText: string;
  linkHref: string;
}

interface TreatmentCardItemProps {
  card: TreatmentCard;
  index: number;
}

// Animation variants for Framer Motion (initial entrance)
const simpleFadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function TreatmentCardItem({ card, index }: TreatmentCardItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaArrowRef = useRef<HTMLSpanElement>(null);
  const outerGlowRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);
  const innerContentRef = useRef<HTMLDivElement>(null);

  // Define colors from your Tailwind theme for GSAP
  const accentOrange = '#F57A08';
  const textPrimary = '#3A3A3A';
  const accentYellowDarkInitialBorder = 'rgba(253, 177, 16, 0.2)'; // accent-yellow-dark/20
  const accentOrangeHoverBorder = 'rgba(245, 122, 8, 0.5)'; // accent-orange/50

  const handleMouseEnter = () => {
    if (!cardRef.current || !imageRef.current || !titleRef.current || !ctaArrowRef.current || !outerGlowRef.current || !borderGlowRef.current || !innerContentRef.current) return;

    gsap.timeline({ defaults: { duration: 0.4, ease: 'power3.out' } })
      .to(cardRef.current, {
        y: -8,
        scale: 1.03,
        boxShadow: '0px 25px 50px -12px rgba(245, 122, 8, 0.25)', // Accent orange shadow
      }, 0)
      .to(innerContentRef.current, {
        borderColor: accentOrangeHoverBorder,
        // boxShadow: '0_15px_45px_-10px_rgba(245,122,8,0.1)' // Subtle inner shadow if desired
      }, 0)
      .to(imageRef.current, {
        scale: 1.07,
      }, 0)
      .to(titleRef.current, {
        color: accentOrange,
      }, 0)
      .to(ctaArrowRef.current, {
        x: 6,
      }, 0)
      .to([outerGlowRef.current, borderGlowRef.current], {
        opacity: 1,
      }, 0);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !imageRef.current || !titleRef.current || !ctaArrowRef.current || !outerGlowRef.current || !borderGlowRef.current || !innerContentRef.current) return;
    
    gsap.timeline({ defaults: { duration: 0.4, ease: 'power3.out' } })
      .to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07)', // Softer default shadow
      }, 0)
      .to(innerContentRef.current, {
        borderColor: accentYellowDarkInitialBorder,
        // boxShadow: 'none'
      }, 0)
      .to(imageRef.current, {
        scale: 1,
      }, 0)
      .to(titleRef.current, {
        color: textPrimary,
      }, 0)
      .to(ctaArrowRef.current, {
        x: 0,
      }, 0)
      .to([outerGlowRef.current, borderGlowRef.current], {
        opacity: 0,
      }, 0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={simpleFadeInUp} // Framer Motion for initial entrance
      // transition={{ duration: 0.6, delay: index * 0.07 }} // This is handled by parent stagger
      viewport={{ once: true, amount: 0.2 }}
      className="signature-treatment-card-group group relative flex flex-col overflow-hidden rounded-xl bg-site-bg p-1 shadow-lg" // Added shadow-lg default
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Intense "Ignited Radiance" Background Glow (Outer layer, softer) - GSAP controlled */}
      <div
        ref={outerGlowRef}
        className="absolute inset-[-10px] z-[-2] rounded-[20px] bg-gradient-to-br from-accent-yellow-dark/40 via-accent-orange/50 to-accent-red/40 opacity-0 blur-3xl" 
      />

      {/* 2. "Ignited Radiance" Border Glow (More defined, sharper) - GSAP controlled opacity, CSS for color change via group-hover */}
      <div
        ref={borderGlowRef}
        className="card-border-glow absolute inset-0 z-[-1] rounded-xl opacity-0 
                   [box-shadow:0_0_0_2px_var(--color-border-start),_0_0_30px_5px_var(--color-glow-start),_inset_0_0_10px_var(--color-inner-glow-start)]
                   dark:[box-shadow:0_0_0_2px_var(--color-border-start),_0_0_60px_5px_var(--color-glow-start),_inset_0_0_20px_var(--color-inner-glow-start)]"
         style={{
           // Initial values set via CSS @property, CSS hover rule will change them
           // GSAP will animate opacity only for this element
         } as any}
      />
      
      {/* Inner content wrapper - applies the actual visible background and static border */}
      <div ref={innerContentRef} className="relative z-0 flex h-full flex-grow flex-col rounded-[11px] bg-content-bg p-5 border border-accent-yellow-dark/20">
        <div className="mb-5 overflow-hidden rounded-lg shadow-md">
          <img
            ref={imageRef}
            src={card.image}
            alt={card.alt}
            className="aspect-video w-full object-cover" // Removed GSAP-handled transitions
          />
        </div>

        <h3
          ref={titleRef}
          className="cormorant-garamond mb-3 text-2xl font-semibold leading-tight text-text-primary lg:text-[1.6rem]" // Removed GSAP-handled transitions
        >
          {card.title}
        </h3>

        <div className="flex-grow" /> {/* Spacer */}

        <Link href={card.linkHref} legacyBehavior>
          <a className="group/link mt-4 self-start bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-base font-bold uppercase tracking-wider text-transparent hover:brightness-125 focus:brightness-125"> {/* Retain group/link for focus, hover visual cue */}
            {card.linkText}
            <span ref={ctaArrowRef} className="ml-2 inline-block"> {/* Removed GSAP-handled transitions */}
              →
            </span>
          </a>
        </Link>
      </div>
    </motion.div>
  );
}