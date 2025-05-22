"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { AnimatedBlock, AnimatedText } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants, 
  ctaButtonVariants 
} from '../animations/animation-variants';
import { GradientButton } from '../gradient-button';

export function ClientTransformationsSection() {
  return (
    <motion.section
      className="text-center"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AnimatedBlock el="h2" variants={simpleFadeInUp} className="cormorant-garamond mb-8 bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
        CLIENT TRANSFORMATIONS & <span className="text-pink-300">TESTIMONIALS</span>
      </AnimatedBlock>
      <AnimatedText
        text="Hear from our valued clients and witness the beautiful transformations achieved at Aura Aesthetics."
        el="p" 
        className="cormorant-garamond mb-10 text-2xl text-indigo-100 lg:text-3xl" // Increased margin
        variants={paragraphLineVariants} 
        splitter="line" 
        staggerAmount={0.03}
      />
      <motion.div variants={ctaButtonVariants} whileHover="hover" whileTap="tap">
       

        <Link href="#">
              <GradientButton className="scale-100 text-xl font-medium md:text-2xl">
              View Gallery & Testimonials
              </GradientButton>
            </Link>
      </motion.div>
    </motion.section>
  );
}
