"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants, 
  ctaButtonVariants 
} from '../animations/animation-variants';
import { AnimatedBlock, AnimatedText } from '../animations/animated-components';

export function ClientTransformationsSection() {
  return (
    <motion.section
      className="text-center"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
        CLIENT TRANSFORMATIONS & TESTIMONIALS
      </AnimatedBlock>
      <AnimatedText
        text="Hear from our valued clients and witness the beautiful transformations achieved at Aura Aesthetics."
        el="p" 
        className="text-lg lg:text-xl opacity-80 mb-10" // Increased margin
        variants={paragraphLineVariants} 
        splitter="line" 
        staggerAmount={0.03}
      />
      <motion.div variants={ctaButtonVariants} whileHover="hover" whileTap="tap">
        <Link href="#" legacyBehavior>
          <a className="bg-purple-600 hover:bg-purple-500 text-white text-lg font-medium py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-purple-500/50">
            View Gallery & Testimonials
          </a>
        </Link>
      </motion.div>
    </motion.section>
  );
}
