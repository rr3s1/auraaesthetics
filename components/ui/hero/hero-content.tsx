"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { AnimatedText } from "@/components/ui/animated-shiny-text";

import { MotionGradientButton } from '../animations/animated-components';
import { 
  containerVariants, 
  titleWrapperVariants, 
  paragraphVariants, 
  glowingSpanVariants, 
  buttonWrapperVariants 
} from '../animations/animation-variants';

export function HeroContent() {
  const titleText = "AURA AESTHETICS";

  return (
    <motion.div
      className="relative z-10 mb-16 flex min-h-[70vh] flex-col items-center justify-center px-4 text-left text-text-primary sm:items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title */}
      <motion.div
        className="-mt-4 max-w-full sm:-mt-6 md:-mt-8"
        variants={titleWrapperVariants}
        aria-label={titleText}
      >
        <AnimatedText
          text={titleText}
          gradientColors="linear-gradient(90deg, #FDB110, #F57A08, #E8400C)"
          gradientAnimationDuration={3}
          hoverEffect={true}
          className="cinzel-decorative-black py-0"
          textClassName="text-5xl font-bold cinzel-decorative-black text-center leading-tight tracking-wide sm:leading-tight md:text-7xl md:leading-tight lg:text-9xl lg:leading-normal text-text-primary"
          style={{
            textShadow: '1px 1px 3px rgba(58, 58, 58, 0.4), 0 0 10px rgba(245, 122, 8, 0.2)',
            filter: 'drop-shadow(0 1px 3px rgba(58, 58, 58, 0.5)) drop-shadow(0 0 15px rgba(245, 122, 8, 0.3))'
            // Strong contrast with deep charcoal shadow to make the gradient pop against background
          }}
        />
      </motion.div>

      {/* Tagline */}
      <motion.div
        className="pt-6 text-center text-3xl font-bold uppercase tracking-wider sm:pt-8 md:pt-10 md:text-4xl lg:text-5xl"
        variants={paragraphVariants}
      >
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span
            className="relative z-10 inline-block font-bold"
            style={{
              color: '#F57A08', // Orange from the specified gradient
              textShadow: '1px 1px 2px rgba(58, 58, 58, 0.5)' // Deep Charcoal text shadow
            }}
          >
            YOUR GLOW
          </span>
        </motion.span>{' '}
        <span className="inline-block font-bold" style={{ color: '#3A3A3A' }}>
          ELEVATED WITH <span className="inline-block" style={{ color: '#E8400C' }}>PASSION</span>
        </span>
        {/* <br />
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="relative z-10 font-semibold text-glow-primary"
            style={{
              color: '#fc4e03',
              fontWeight: '600',
            }}
          >
           Elevate with Passion
          </span>
        </motion.span>{' '} */}
        
      </motion.div>

      {/* Second Paragraph - Commented out in original */}
      {/* <motion.p
        className="lg:text-2xl pl-7 sm:text-xl md:text-xl max-w-3xl italic"
        variants={paragraphVariants}
      >
        EMBRACE {' '}
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="text-green-500 relative z-10"
            style={{
              textShadow: '0 0 15px rgba(0, 123, 200, 0.92), 0 0 25px rgba(0, 117, 200, 0.62)',
              filter: 'drop-shadow(0 0 5px rgba(0, 180, 200, 0.91))'
            }}
          >
          A PATH TO CONFIDENCE 
          </span>
        </motion.span>{' '}
        GUIDED BY OUR EXPERTISE
      </motion.p> */}

      {/* CTA Button Wrapper */}
      <motion.div
        className="mt-10 md:mt-12"
        style={{ pointerEvents: 'auto' }}
        variants={buttonWrapperVariants}
      >
        <Link href="/register" passHref legacyBehavior>
          <MotionGradientButton
            variant="ignitedRadiance"
            className="cormorant-garamond min-w-[200px] px-6 py-3 text-lg font-semibold text-text-primary sm:min-w-[220px] sm:px-8 sm:py-4 sm:text-xl md:min-w-[240px] md:px-10 md:py-5 md:text-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 20px rgba(253, 177, 16, 0.45)" 
            }}
            whileTap={{ scale: 0.95, boxShadow: "0px 2px 10px rgba(245, 122, 8, 0.35)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            SCHEDULE CONSULTATION
          </MotionGradientButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}
