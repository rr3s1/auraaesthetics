"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { GradientText } from "@/components/ui/gradient-text";

import { MotionGradientButton } from '../animations/animated-components';
import { 
  containerVariants, 
  titleWrapperVariants, 
  titleCharVariants, 
  paragraphVariants, 
  glowingSpanVariants, 
  buttonWrapperVariants 
} from '../animations/animation-variants';

export function HeroContent() {
  const titleText = "AURA AESTHETICS";
  const titleCharacters = Array.from(titleText);

  return (
    <motion.div
      className="mb-16 flex min-h-[70vh] flex-col justify-center px-4 text-left text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title */}
      <motion.h1
        className="max-w-full text-3xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-9xl sm:leading-tight md:leading-tight lg:leading-normal tracking-wide opacity-100"
        variants={titleWrapperVariants}
        aria-label={titleText}
      >
        <GradientText className="cinzel-decorative-black  md:pl-8 lg:pl-10 text-white">
          {titleCharacters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={titleCharVariants}
              whileHover="hover"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </GradientText>
      </motion.h1>

      {/* First Paragraph */}
      <motion.p
        className="pt-6 sm:pl-6 sm:pt-8 md:pl-8 md:pt-10 font-bold uppercase italic text-base sm:text-xl md:text-2xl lg:text-3xl"
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
            className="relative z-10 text-purple-400"
            style={{
              textShadow: '0 0 15px rgba(168, 85, 247, 0.7), 0 0 25px rgba(168, 85, 247, 0.5)',
              filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.8))'
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
