"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { AnimatedBlock, AnimatedText, MotionGradientButton } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants
} from '../animations/animation-variants';

export function ClientTransformationsSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-content-bg/50 via-site-bg to-content-bg/50 py-20 text-center md:py-28" 
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Glows for emphasis */}
      <div className="absolute inset-0 z-[-1] opacity-30 md:opacity-40">
        <div className="absolute -left-1/4 top-0 size-[120%] rounded-full bg-gradient-radial from-accent-yellow-dark/30 via-accent-orange/20 to-transparent blur-[100px]" />
        <div className="absolute -right-1/4 bottom-0 size-[120%] rounded-full bg-gradient-radial from-accent-red/30 via-accent-red-deep/20 to-transparent blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl overflow-auto px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>  
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-6 md:mb-8">
          <span className="cinzel-decorative-bold bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            Witness the Aura Effect
          </span>
        </AnimatedBlock>

        <AnimatedText
          text="Explore inspiring client journeys, see stunning before-and-after transformations, and hear directly from those who have experienced the Aura difference. Your path to renewed confidence starts here."
          el="p"
          className="cormorant-garamond mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-text-primary/90 md:mb-12 md:text-2xl lg:text-3xl"
          variants={paragraphLineVariants}
          splitter="line"
          staggerAmount={0.02}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.2}>
          <Link href="/gallery-testimonials" passHref legacyBehavior>
            <a className="inline-block">
              <MotionGradientButton
                variant="ignitedRadiance"
                className="cormorant-garamond px-10 py-4  text-2xl font-semibold text-slate-900 md:px-12 md:py-5"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 25px rgba(245, 122, 8, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Gallery & Testimonials
              </MotionGradientButton>
            </a>
          </Link>
        </AnimatedBlock>
      </div>
    </motion.section>
  );
}
