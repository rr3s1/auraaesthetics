"use client";

import { motion } from 'framer-motion';
import { 
  Gem, 
  Award, 
  HeartPulse, 
  ShieldCheck, 
  UserCircle2 
} from 'lucide-react';
import React from 'react';

import { AnimatedBlock } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp
} from '../animations/animation-variants';

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function AwardsExpertiseSection() {
  const pillarsOfTrust: Pillar[] = [
    {
      title: "Award-Winning Treatments",
      description: "Recognized for excellence and innovation in aesthetic care, delivering consistently outstanding, natural-looking results.",
      icon: <Award className="size-10 text-purple-600" />
    },
    {
      title: "Board-Certified Experts",
      description: "Our team comprises highly skilled, board-certified dermatologists and aesthetic specialists dedicated to your safety and satisfaction.",
      icon: <UserCircle2 className="size-10 text-purple-600" />
    },
    {
      title: "Premium Brand Partners",
      description: "We exclusively partner with leading global brands for medical-grade products and technologies, ensuring efficacy and quality.",
      icon: <Gem className="size-10 text-purple-600" />
    },
    {
      title: "Patient-Centric Care",
      description: "Your journey is our priority. We provide compassionate, personalized attention from consultation through to comprehensive aftercare.",
      icon: <HeartPulse className="size-10 text-purple-600" />
    },
    {
      title: "Commitment to Safety",
      description: "Adhering to the highest medical standards and protocols to ensure your well-being and provide treatments in a secure, sterile environment.",
      icon: <ShieldCheck className="size-10 text-purple-600" />
    },
  ];

  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-site-bg to-content-bg py-20 md:py-28"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Luxe Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-0 top-1/4 size-96 rounded-full bg-gradient-radial from-accent-gold/30 to-transparent blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 size-80 rounded-full bg-gradient-radial from-accent-gold/15 to-transparent blur-[80px]" />
      </div>
      
      {/* Geometric Accent Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/assets/luxe-pattern.svg')] bg-[length:350px] bg-repeat opacity-[3%]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <AnimatedBlock 
          el="h2" 
          variants={simpleFadeInUp} 
          className="mb-16 md:mb-20"
        >
          <span className="cinzel-decorative-bold bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            Our Pillars of <span className="text-violet-500">Excellence</span>
          </span>
          <div className="w-26 mx-auto mt-4 h-1 bg-gradient-to-r from-amber-600 to-transparent" />
        </AnimatedBlock>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillarsOfTrust.map((pillar, i) => (
            <AnimatedBlock
              key={pillar.title}
              el="div"
              variants={simpleFadeInUp}
              delay={i * 0.15} 
              className="group flex flex-col items-center rounded-xl border border-accent-gold/10 bg-white bg-opacity-95 p-8 shadow-xl transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-site-bg/50 hover:shadow-2xl"
            >
              <div className="mb-6 rounded-full bg-gradient-to-br from-purple-600/10 to-purple-600/5 p-4 transition-all group-hover:from-purple-600/20 group-hover:to-purple-600/10">
                {pillar.icon}
              </div>
              
              <h3 className="mb-4 font-serif text-xl font-semibold tracking-wide text-text-primary">
                {pillar.title}
              </h3>
              
              <p className="cormorant-garamond text-lg leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </motion.section>
  );
}