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

export function PersonalisedJourneySection() {
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
          PERSONALISED <span className="italic text-orange-400">TREATMENT JOURNEYS</span>
        </AnimatedBlock>
        <AnimatedText
          text="Beyond individual treatments, we focus on holistic, personalized journeys. Our expert consultations lead to bespoke plans addressing your unique concerns and goals, ensuring comprehensive care and results that not only look exceptional but also promote long-term skin health and well-being."
          el="p"
          className="cormorant-garamond mb-8 text-2xl opacity-80 lg:text-3xl"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="inline-block text-2xl font-semibold text-orange-400 transition-transform duration-200 hover:translate-x-1 hover:text-orange-300">
              Explore Our Approach →
            </a>
          </Link>
        </AnimatedBlock>
      </div>
      <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
        <img src="/doctor_consult.png" alt="Doctor consulting with a client in a luxury clinic" className="mx-auto w-full max-w-md rounded-lg shadow-2xl"/>
      </AnimatedBlock>
    </motion.section>
  );
}
