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
      className="mb-16 flex min-h-[70vh] flex-col items-start justify-center px-4 text-left text-white"
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
          gradientColors="linear-gradient(90deg, #ff6b35, #f7931e, #ffea00, #ffb347, #ffea00, #d2691e)"
          gradientAnimationDuration={3}
          hoverEffect={true}
          className="cinzel-decorative-black py-0"
          textClassName="text-3xl font-bold cinzel-decorative-black text-center leading-tight tracking-wide sm:text-4xl sm:leading-tight md:text-8xl md:leading-tight lg:text-8xl lg:leading-normal text-white"
          style={{
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.4)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
          }}
        />
      </motion.div>

      {/* First Paragraph */}
      <motion.p
        className="pt-6 text-center text-base font-bold uppercase italic sm:pt-8 sm:text-xl md:pt-10 md:text-2xl lg:text-3xl"
        variants={paragraphVariants}
      >
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="relative z-10 text-orange-400"
            style={{
              textShadow: '0 0 15px rgba(255, 120, 0, 0.7), 0 0 25px rgba(255, 120, 0, 0.5)',
              filter: 'drop-shadow(0 0 5px rgba(255, 120, 0, 0.8))'
            }}
          >
            Your Glow  
          </span>
        </motion.span>, Our Promise - {' '}
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="relative z-10 font-semibold"
            style={{
              color: '#FFDDBB',
              fontWeight: '600',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3), 0 0 8px rgba(255, 221, 187, 0.4)',
              filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4))'
            }}
          >
           Delivered with Care
          </span>
        </motion.span>{' '}
        
      </motion.p>

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
        className="mt-8 pl-4 sm:mt-10 sm:pl-5 md:mt-12"
        style={{ pointerEvents: 'auto' }}
        variants={buttonWrapperVariants}
      >
        <Link href="/register" passHref legacyBehavior>
          <MotionGradientButton
            variant="variant"
            className="cormorant-garamond min-w-[200px] px-6 py-3 text-lg sm:min-w-[220px] sm:px-8 sm:py-4 sm:text-xl md:min-w-[240px] md:px-10 md:py-5 md:text-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)" 
            }}
            whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            REGISTER & SCHEDULE
          </MotionGradientButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}
