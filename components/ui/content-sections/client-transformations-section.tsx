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
      <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl cinzel-decorative-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-200">
        CLIENT TRANSFORMATIONS & <span className="text-pink-300">TESTIMONIALS</span>
      </AnimatedBlock>
      <AnimatedText
        text="Hear from our valued clients and witness the beautiful transformations achieved at Aura Aesthetics."
        el="p" 
        className="text-2xl lg:text-3xl text-indigo-100 mb-10 cormorant-garamond" // Increased margin
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
