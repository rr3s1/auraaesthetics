"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants, 
  imageDramaticRevealVariants 
} from '../animations/animation-variants';
import { AnimatedBlock, AnimatedText } from '../animations/animated-components';

export function RefinedNaturalismSection() {
  return (
    <motion.section
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          THE AURA LOOK: <span className="text-pink-400 italic">REFINED NATURALISM</span>
        </AnimatedBlock>
        <AnimatedText
          text="We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself."
          el="p"
          className="text-lg lg:text-xl opacity-80 mb-8"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="text-pink-400 hover:text-pink-300 font-semibold text-lg inline-block transform hover:translate-x-1 transition-transform duration-200">
              Explore Our Aesthetic Philosophy →
            </a>
          </Link>
        </AnimatedBlock>
      </div>
      <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
        <img src="/placeholder/natural-enhancement-result.jpg" alt="Client showcasing natural-looking aesthetic results" className="rounded-lg shadow-2xl mx-auto w-full max-w-md"/>
      </AnimatedBlock>
    </motion.section>
  );
}
