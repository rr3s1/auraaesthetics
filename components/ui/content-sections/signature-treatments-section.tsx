"use client";

import { motion } from 'framer-motion';
// No need for Link here anymore, it's in TreatmentCardItem
import React from 'react';

import { AnimatedBlock, AnimatedText } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, // Used by TreatmentCardItem and section titles
  paragraphLineVariants, 
  imageDramaticRevealVariants
} from '../animations/animation-variants';
import { TreatmentCardItem } from './TreatmentCardItem'; // Import the new component

interface TreatmentCard {
  title: string;
  image: string;
  alt: string;
  linkText: string;
  linkHref: string;
}

export function SignatureTreatmentsSection() {
  const cardData: TreatmentCard[] = [
    { title: "Advanced Dermal Fillers", image: "/advanced_dermal.png", alt: "Client receiving dermal filler treatment", linkText: "Discover Smoothing", linkHref: "/treatments/dermal-fillers" },
    { title: "Laser Skin Rejuvenation", image: "/laser.png", alt: "Advanced laser skin treatment", linkText: "Explore Radiance", linkHref: "/treatments/laser-rejuvenation" },
    { title: "Non-Invasive Body Sculpting", image: "/body_sculpt.png", alt: "Client undergoing body sculpting treatment", linkText: "View Contouring", linkHref: "/treatments/body-sculpting" },
    { title: "LED Blue Light Therapy", image: "/frontEnd.png", alt: "Relaxing LED Blue Light Therapy", linkText: "LED Blue Light Therapy", linkHref: "/treatments/led-blue-light-therapy" },
    { title: "Medical-Grade Skincare", image: "/products.png", alt: "Display of premium medical-grade skincare products", linkText: "Unlock Your Glow", linkHref: "/skincare" },
    { title: "Hair Restoration Therapies", image: "/hairR.png", alt: "Advanced hair restoration procedure", linkText: "Revitalize & Renew", linkHref: "/treatments/hair-restoration" },
  ];

  return (
    <div className="relative bg-site-bg px-4 py-24 md:py-32 overflow-hidden">
      {/* Background Gradients - Unchanged */}
      <div className="absolute inset-0 z-[-2] opacity-40 md:opacity-50">
        <div className="absolute -left-1/4 -top-1/4 size-[150%] rounded-full bg-gradient-radial from-accent-yellow-dark/30 via-accent-orange/15 to-transparent filter blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 size-[150%] rounded-full bg-gradient-radial from-accent-red/25 via-accent-red-deep/10 to-transparent filter blur-[120px]" />
      </div>

      <motion.section
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl relative z-0"
      >
        {/* Section Header - Unchanged */}
        <div className="mb-20 text-center">
          <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-6 text-center">
            <span className="cinzel-decorative-bold bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-4xl font-bold tracking-wider text-transparent md:text-5xl lg:text-6xl">
              OUR SIGNATURE TREATMENTS
            </span>
          </AnimatedBlock>
          <div className="mx-auto mb-12 h-1 w-32 rounded-full bg-gradient-to-r from-accent-yellow-dark/70 via-accent-orange to-accent-red/70 md:w-40" />
          <AnimatedText
            text="Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique — meticulously planned from initial consultation through to aftercare, ensuring exceptional results."
            el="p"
            className="cormorant-garamond mx-auto max-w-3xl text-center text-xl font-normal leading-loose text-text-primary/85 md:text-2xl"
            variants={paragraphLineVariants}
            staggerAmount={0.02}
            splitter="line"
          />
          <AnimatedBlock variants={imageDramaticRevealVariants} delay={0.3} className="mx-auto mt-16 w-full max-w-3xl">
            <img
              src="/collage.png"
              alt="Collage showcasing various aesthetic treatments and results"
              className="rounded-2xl shadow-2xl ring-2 ring-accent-orange/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(245,122,8,0.25)]"
            />
          </AnimatedBlock>
        </div>

        {/* Grid of Treatment Cards */}
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-16"
          // Stagger children for Framer Motion entrance animation
          variants={{ 
            visible: { 
              transition: { staggerChildren: 0.1 } 
            } 
          }}
          initial="hidden" // Ensure parent also has initial="hidden" for stagger to work correctly
          whileInView="visible" // Ensure parent also has whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Adjust viewport for when the grid starts animating
        >
          {cardData.map((card, index) => (
            // The individual card's motion.div is now inside TreatmentCardItem
            // It will inherit the stagger from this parent
            <TreatmentCardItem
              key={card.title + index}
              card={card}
              index={index}
            />
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}