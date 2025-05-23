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

interface LuxurySectionProps {
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  accentColor: 'pink' | 'teal' | 'orange';
  reverse?: boolean;
}

function LuxurySection({ 
  title, 
  titleHighlight, 
  description, 
  ctaText, 
  ctaLink, 
  imageSrc, 
  imageAlt, 
  accentColor, 
  reverse = false
}: LuxurySectionProps) {
  const colorClasses = {
    pink: {
      gradient: 'from-pink-900/10',
      text: 'text-pink-400',
      hover: 'hover:text-white'
    },
    teal: {
      gradient: 'from-teal-900/10',
      text: 'text-teal-300',
      hover: 'hover:text-white'
    },
    orange: {
      gradient: 'from-orange-900/10',
      text: 'text-orange-400',
      hover: 'hover:text-white'
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <motion.section
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background subtle gradient */}
      <div className={`absolute inset-0 bg-gradient-radial ${colors.gradient} pointer-events-none via-transparent to-transparent opacity-30`} />
      
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 ${reverse ? 'lg:order-2' : ''}`}
      >
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-8 font-serif text-4xl font-semibold leading-tight tracking-wide text-white md:text-5xl">
          {title} <br />
          <span className={`${colors.text} font-medium italic`}>{titleHighlight}</span>
        </AnimatedBlock>
        <AnimatedText
          text={description}
          el="p"
          className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-200 opacity-90"
          variants={paragraphLineVariants} 
          splitter="line" 
          staggerAmount={0.03}
        />
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href={ctaLink} legacyBehavior>
            <a className={`inline-block text-sm font-medium ${colors.text} ${colors.hover} tracking-wide underline underline-offset-4 transition-all duration-300 hover:tracking-wider`}>
              {ctaText} →
            </a>
          </Link>
        </AnimatedBlock>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 ${reverse ? 'lg:order-1' : ''}`}
      >
        <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
          <motion.img 
            src={imageSrc} 
            alt={imageAlt} 
            className="mx-auto w-full max-w-md rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedBlock>
      </motion.div>
    </motion.section>
  );
}

export function UnifiedLuxurySections() {
  const sections = [
    {
      title: "The Aura Look:",
      titleHighlight: "Refined Naturalism",
      description: "We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself.",
      ctaText: "Explore Our Aesthetic Philosophy",
      ctaLink: "#",
      imageSrc: "/client_SCase.png",
      imageAlt: "Client showcasing natural-looking aesthetic results",
      accentColor: 'pink' as const,
      reverse: false
    },
    {
      title: "Masters of",
      titleHighlight: "Aesthetic Innovation",
      description: "We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction.",
      ctaText: "Discover Our Technologies",
      ctaLink: "#",
      imageSrc: "/Intruments.png",
      imageAlt: "State-of-the-art aesthetic technology in a clinic setting",
      accentColor: 'teal' as const,
      reverse: false
    },
    {
      title: "Personalised",
      titleHighlight: "Treatment Journeys",
      description: "Beyond individual treatments, we focus on holistic, personalized journeys. Our expert consultations lead to bespoke plans addressing your unique concerns and goals, ensuring comprehensive care and results that not only look exceptional but also promote long-term skin health and well-being.",
      ctaText: "Explore Our Approach",
      ctaLink: "#",
      imageSrc: "/doctor_consult.png",
      imageAlt: "Doctor consulting with a client in a luxury clinic",
      accentColor: 'orange' as const,
      reverse: false
    }
  ];

  return (
    <div className="relative">
      {/* Global section divider */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-800/20 to-transparent" />
      
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <LuxurySection {...section} />
          {index < sections.length - 1 && (
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="h-16" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
} 