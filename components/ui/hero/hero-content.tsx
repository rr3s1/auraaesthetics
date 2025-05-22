"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GradientText } from "@/components/ui/gradient-text";
import { 
  containerVariants, 
  titleWrapperVariants, 
  titleCharVariants, 
  paragraphVariants, 
  glowingSpanVariants, 
  buttonWrapperVariants 
} from '../animations/animation-variants';
import { MotionGradientButton } from '../animations/animated-components';

export function HeroContent() {
  const titleText = "AURA AESTHETICS";
  const titleCharacters = Array.from(titleText);

  return (
    <motion.div
      className="text-left mb-16 text-white px-4 min-h-[70vh] flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title */}
      <motion.h1
        className="text-3xl opacity-100 sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-normal max-w-full tracking-wide "
        variants={titleWrapperVariants}
        aria-label={titleText}
      >
        <GradientText className="text-white pl-10 cinzel-decorative-black">
          {titleCharacters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={titleCharVariants}
              whileHover="hover"
              style={{ display: 'inline-block', lineHeight: '160px'}}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </GradientText>
      </motion.h1>

      {/* First Paragraph */}
      <motion.p
        className="lg:text-3xl pl-8 pt-10 sm:text-xl md:text-2xl font-bold uppercase italic"
        variants={paragraphVariants}
      >
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="text-orange-400 relative z-10"
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
            className="text-purple-400 relative z-10"
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
        className="mt-12 pl-5"
        style={{ pointerEvents: 'auto' }}
        variants={buttonWrapperVariants}
      >
        <Link href="/register" passHref legacyBehavior>
          <MotionGradientButton
            variant="variant"
            className="text-xl md:text-2xl py-5 px-10 min-w-[240px] cormorant-garamond"
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
