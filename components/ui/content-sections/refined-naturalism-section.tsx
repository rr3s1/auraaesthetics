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

export function RefinedNaturalismSection() {
  return (
    <motion.section
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-pink-900/10 via-transparent to-transparent opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-8 font-serif text-4xl font-semibold leading-tight tracking-wide text-white md:text-5xl">
          The Aura Look: <br />
          <span className="font-medium italic text-pink-400">Refined Naturalism</span>
        </AnimatedBlock>
        <AnimatedText
          text="We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself."
          el="p"
          className="mb-8 max-w-2xl text-xl leading-relaxed text-neutral-200 opacity-90"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="inline-block text-sm font-medium tracking-wide text-pink-400 underline underline-offset-4 transition-all duration-300 hover:tracking-wider hover:text-white">
              Explore Our Aesthetic Philosophy →
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
            src="/client_SCase.png" 
            alt="Client showcasing natural-looking aesthetic results" 
            className="mx-auto w-full max-w-md rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedBlock>
      </motion.div>
    </motion.section>
  );
}
