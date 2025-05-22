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
import { GradientText } from '../gradient-text';
import ContactAndNewsletterSection from './ContactAndNewsletterSection';

export function RefinedNaturalismSection() {
  return (
    <motion.section
      className="my-20 grid items-center gap-10 md:grid-cols-2 md:gap-16"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="cinzel-decorative-bold mb-8 text-3xl sm:text-4xl lg:text-5xl">
          THE AURA LOOK: <span className="italic text-pink-400">REFINED NATURALISM</span>
        </AnimatedBlock>
        <AnimatedText
          text="We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself."
          el="p"
          className="mb-8 text-2xl opacity-80 lg:text-3xl"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="inline-block text-2xl font-semibold text-pink-400 transition-transform duration-200 hover:translate-x-1 hover:text-pink-300">
              Explore Our Aesthetic Philosophy →
            </a>
          </Link>
        </AnimatedBlock>
      </div>
      <div>
        <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
          <img src="/client_SCase.png" alt="Client showcasing natural-looking aesthetic results" className="mx-auto w-full max-w-md rounded-lg shadow-2xl"/>
        </AnimatedBlock>
        <ContactAndNewsletterSection />
      </div>
    </motion.section>
  );
}
