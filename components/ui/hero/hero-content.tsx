"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { GradientText } from "@/components/ui/gradient-text";

import { MotionGradientButton } from '../animations/animated-components';
import { 
  containerVariants, 
  titleWrapperVariants, 
  paragraphVariants, 
  buttonWrapperVariants 
} from '../animations/animation-variants';

export function HeroContent() {
  const titleText = "AURA";

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
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <GradientText
            className="cinzel-decorative-black min-h-[1.2em] py-4 text-center text-5xl font-bold leading-tight tracking-[0.12em] drop-shadow-[0_4px_24px_rgba(253,177,16,0.18)] sm:text-6xl md:text-6xl lg:text-9xl"
            gradient="bg-gradient-to-r from-orange-400 via-orange-600 to-red-600"
          >
            AURA
          </GradientText>
          <GradientText
            className="cinzel-decorative-black min-h-[1.2em] py-4 text-center  text-5xl font-bold leading-tight tracking-[0.12em] drop-shadow-[0_4px_24px_rgba(253,177,16,0.18)] sm:text-6xl md:text-6xl lg:text-9xl"
          >
            Aesthetics
          </GradientText>
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.div
        className="pt-6 text-center text-xl font-bold uppercase tracking-wider sm:pt-8 md:pt-10 md:text-4xl lg:text-5xl"
        variants={paragraphVariants}
      >
        <span
          className="inline-block"
          style={{
            color: '#FCFBF8', // Pale Alabaster
            textShadow: '0 0 12px #F57A08, 0 0 24px #F57A08', // Subtle orange glow
            padding: '0 0.15em',
          }}
        >
          YOUR GLOW , 
        </span>
        <span
          className="inline-block"
          style={{
            color: '#3A3A3A', // Deep Charcoal
            padding: '0 0.15em',
          }}
        >
           OUR PASSION
        </span>
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
            variant="variant"
            className="cormorant-garamond min-w-[200px] px-6 py-3 text-lg sm:min-w-[180px] sm:px-8 sm:py-4 sm:text-lg md:min-w-[240px] md:px-10 md:py-5 md:text-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)" 
            }}
            whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            SCHEDULE CONSULTATION
          </MotionGradientButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}
