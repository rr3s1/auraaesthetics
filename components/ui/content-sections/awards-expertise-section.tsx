"use client";

import { motion } from 'framer-motion';
import React from 'react';

import { AnimatedBlock } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp
} from '../animations/animation-variants';

interface Pillar {
  title: string;
  description: string;
}

export function AwardsExpertiseSection() {
  const pillarsOfTrust: Pillar[] = [
    {
      title: "AWARD-WINNING TREATMENTS",
      description: "Recognized for excellence and innovation in aesthetic care, delivering consistently outstanding, natural-looking results."
    },
    {
      title: "BOARD-CERTIFIED EXPERTS",
      description: "Our team comprises highly skilled, board-certified dermatologists and aesthetic specialists dedicated to your safety and satisfaction."
    },
    {
      title: "PREMIUM BRAND PARTNERS",
      description: "We exclusively partner with leading global brands for medical-grade products and technologies, ensuring efficacy and quality."
    },
    // Expanded data
    {
      title: "PATIENT-CENTRIC CARE",
      description: "Your journey is our priority. We provide compassionate, personalized attention from consultation through to comprehensive aftercare."
    },
    {
      title: "COMMITMENT TO SAFETY",
      description: "Adhering to the highest medical standards and protocols to ensure your well-being and provide treatments in a secure, sterile environment."
    },
  ];

  return (
    <motion.section
      className="bg-content-bg/60 py-20 md:py-28 border-t border-b border-accent-yellow-dark/20 relative overflow-hidden"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <div className="absolute -left-1/3 top-0 size-full rounded-full bg-gradient-radial from-accent-yellow/20 to-transparent filter blur-[80px]" />
        <div className="absolute -right-1/3 bottom-0 size-full rounded-full bg-gradient-radial from-accent-orange/15 to-transparent filter blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 text-center">
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-16 md:mb-20">
          <span className="cinzel-decorative-bold bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            Our Pillars of Trust & Excellence
          </span>
        </AnimatedBlock>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-12"> {/* Adjusted for more items */}
          {pillarsOfTrust.map((pillar, i) => (
            <AnimatedBlock
              key={pillar.title}
              el="div"
              variants={simpleFadeInUp}
              delay={i * 0.15} 
              className="flex flex-col items-center p-6 rounded-xl bg-site-bg/70 shadow-lg border border-accent-yellow-dark/10 transition-all duration-300 hover:shadow-2xl hover:border-accent-orange/30 hover:scale-105"
            >
              <h3 className="cormorant-garamond mb-3 text-xl font-semibold tracking-wider text-text-primary lg:text-2xl">
                {pillar.title}
              </h3>
              <p className="cormorant-garamond text-base leading-relaxed text-text-primary/80">
                {pillar.description}
              </p>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
