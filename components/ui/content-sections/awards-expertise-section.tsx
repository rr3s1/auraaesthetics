"use client";

import { motion } from 'framer-motion';
import React from 'react';

import { AnimatedBlock } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp
} from '../animations/animation-variants';

export function AwardsExpertiseSection() {
  return (
    <motion.section
      className="border-t border-gray-700 pt-16 text-center" // Increased padding
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="cormorant-garamond flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-10 sm:space-y-0 md:space-x-16"> {/* Increased spacing */}
        {["AWARD-WINNING TREATMENTS", "BOARD-CERTIFIED EXPERTS", "PREMIUM BRAND PARTNERS"].map((text, i) => (
          <AnimatedBlock key={text} el="h3" variants={simpleFadeInUp} delay={i * 0.15} className="cormorant-garamond text-lg tracking-wider opacity-80 sm:text-xl lg:text-2xl">
            {text}
          </AnimatedBlock>
        ))}
      </div>
    </motion.section>
  );
}
