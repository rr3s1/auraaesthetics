"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { AnimatedBlock, AnimatedText } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants, 
  imageDramaticRevealVariants 
} from '../animations/animation-variants';
import { TestimonialBlockquote } from '../galaxy-interactive-hero-section';

export function AestheticInnovationSection() {
  return (
    <motion.section
      className="my-20 grid items-center gap-10 md:grid-cols-2 md:gap-16"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      
      
      <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center md:order-2">
        <img src="/Intruments.png" alt="State-of-the-art aesthetic technology in a clinic setting" className="mx-auto w-full max-w-md rounded-lg shadow-2xl"/>
      </AnimatedBlock>
      <div className="md:order-1">
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="cinzel-decorative-bold mb-8 text-3xl sm:text-4xl lg:text-5xl">
          MASTERS OF <span className="italic text-teal-400">AESTHETIC INNOVATION</span>
        </AnimatedBlock>
        <AnimatedText
          text="We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction."
          el="p"
          className="cormorant-garamond mb-8 text-2xl opacity-80 lg:text-3xl"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="inline-block text-2xl font-semibold text-teal-400 transition-transform duration-200 hover:translate-x-1 hover:text-teal-300">
              Discover Our Technologies →
            </a>
          </Link>
        </AnimatedBlock>
      </div>
    </motion.section>
  );
}
