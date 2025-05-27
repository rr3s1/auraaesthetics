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

export function AestheticInnovationSection() {
  return (
    <motion.section
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-accent-yellow-dark/10 via-transparent to-transparent opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-8 font-serif text-4xl font-semibold leading-tight tracking-wide text-text-primary md:text-5xl">
          Masters of <br />
          <span className="font-medium italic text-accent-orange">Aesthetic Innovation</span>
        </AnimatedBlock>
        <AnimatedText
          text="We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction."
          el="p"
          className="mb-8 max-w-2xl text-lg leading-relaxed text-text-secondary opacity-90"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="inline-block text-sm font-medium tracking-wide text-accent-yellow-dark underline underline-offset-4 transition-all duration-300 hover:tracking-wider hover:text-accent-red">
              Discover Our Technologies →
            </a>
          </Link>
        </AnimatedBlock>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
          <motion.img 
            src="/Intruments.png" 
            alt="State-of-the-art aesthetic technology in a clinic setting" 
            className="mx-auto w-full max-w-md rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedBlock>
      </motion.div>
    </motion.section>
  );
}
