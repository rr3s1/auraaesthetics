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

export function PersonalisedJourneySection() {
  return (
    <motion.section
      className="grid md:grid-cols-2 gap-10 md:gap-16 my-20 items-center"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl cinzel-decorative-bold mb-8">
          PERSONALISED <span className="text-orange-400 italic">TREATMENT JOURNEYS</span>
        </AnimatedBlock>
        <AnimatedText
          text="Beyond individual treatments, we focus on holistic, personalized journeys. Our expert consultations lead to bespoke plans addressing your unique concerns and goals, ensuring comprehensive care and results that not only look exceptional but also promote long-term skin health and well-being."
          el="p"
          className="text-2xl lg:text-3xl opacity-80 mb-8 cormorant-garamond"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="text-orange-400 hover:text-orange-300 font-semibold text-2xl inline-block transform hover:translate-x-1 transition-transform duration-200">
              Explore Our Approach →
            </a>
          </Link>
        </AnimatedBlock>
      </div>
      <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
        <img src="/doctor_consult.png" alt="Doctor consulting with a client in a luxury clinic" className="rounded-lg shadow-2xl mx-auto w-full max-w-md"/>
      </AnimatedBlock>
    </motion.section>
  );
}
