"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  sectionContainerVariants, 
  simpleFadeInUp
} from '../animations/animation-variants';
import { AnimatedBlock } from '../animations/animated-components';

export function AwardsExpertiseSection() {
  return (
    <motion.section
      className="text-center pt-16 border-t border-gray-700" // Increased padding
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10 md:space-x-16"> {/* Increased spacing */}
        {["AWARD-WINNING TREATMENTS", "BOARD-CERTIFIED EXPERTS", "PREMIUM BRAND PARTNERS"].map((text, i) => (
          <AnimatedBlock key={text} el="h3" variants={simpleFadeInUp} delay={i * 0.15} className="text-lg sm:text-xl lg:text-2xl cinzel-decorative-bold tracking-wider opacity-80">
            {text}
          </AnimatedBlock>
        ))}
      </div>
    </motion.section>
  );
}
