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

export function AestheticInnovationSection() {
  return (
    <motion.section
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center md:order-2">
        <img src="/placeholder/advanced-clinic-tech.jpg" alt="State-of-the-art aesthetic technology in a clinic setting" className="rounded-lg shadow-2xl mx-auto w-full max-w-md"/>
      </AnimatedBlock>
      <div className="md:order-1">
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          MASTERS OF <span className="text-teal-400 italic">AESTHETIC INNOVATION</span>
        </AnimatedBlock>
        <AnimatedText
          text="We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction."
          el="p"
          className="text-lg lg:text-xl opacity-80 mb-8"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="text-teal-400 hover:text-teal-300 font-semibold text-lg inline-block transform hover:translate-x-1 transition-transform duration-200">
              Discover Our Technologies →
            </a>
          </Link>
        </AnimatedBlock>
      </div>
    </motion.section>
  );
}
