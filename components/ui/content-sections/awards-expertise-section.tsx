"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { 
  Gem, 
  Award, 
  HeartPulse, 
  ShieldCheck, 
  UserCircle2 
} from 'lucide-react';

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
      icon: <Award className="size-10 text-amber-600" />
    },
    {
      title: "Board-Certified Experts",
      description: "Our team comprises highly skilled, board-certified dermatologists and aesthetic specialists dedicated to your safety and satisfaction.",
      icon: <UserCircle2 className="size-10 text-amber-600" />
    },
    {
      title: "Premium Brand Partners",
      description: "We exclusively partner with leading global brands for medical-grade products and technologies, ensuring efficacy and quality.",
      icon: <Gem className="size-10 text-amber-600" />
    },
    {
      title: "Patient-Centric Care",
      description: "Your journey is our priority. We provide compassionate, personalized attention from consultation through to comprehensive aftercare.",
      icon: <HeartPulse className="size-10 text-amber-600" />
    },
    {
      title: "Commitment to Safety",
      description: "Adhering to the highest medical standards and protocols to ensure your well-being and provide treatments in a secure, sterile environment.",
      icon: <ShieldCheck className="size-10 text-amber-600" />
    },
  ];

  return (
    <motion.section
      className="bg-gradient-to-b from-site-bg to-content-bg py-20 md:py-28 relative overflow-hidden"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Luxe Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-0 top-1/4 size-96 rounded-full bg-gradient-radial from-accent-gold/30 to-transparent filter blur-[100px]" />
        <div className="absolute right-0 bottom-1/3 size-80 rounded-full bg-gradient-radial from-accent-gold/15 to-transparent filter blur-[80px]" />
      </div>
      
      {/* Geometric Accent Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/assets/luxe-pattern.svg')] bg-[length:350px] bg-repeat opacity-[3%]" />

      <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
        <AnimatedBlock 
          el="h2" 
          variants={simpleFadeInUp} 
          className="mb-16 md:mb-20"
        >
          <span className="merienda-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary">
            Our Pillars of <span className="text-amber-600">Excellence</span>
          </span>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-amber-600 to-transparent mx-auto" />
        </AnimatedBlock>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillarsOfTrust.map((pillar, i) => (
            <AnimatedBlock
              key={pillar.title}
              el="div"
              variants={simpleFadeInUp}
              delay={i * 0.15} 
              className="group flex flex-col items-center p-8 rounded-xl bg-white bg-opacity-95 shadow-xl border border-accent-gold/10 transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-b hover:from-white hover:to-site-bg/50"
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-amber-600/10 to-amber-600/5 rounded-full group-hover:from-amber-600/20 group-hover:to-amber-600/10 transition-all">
                {pillar.icon}
              </div>
              
              <h3 className="font-sans text-lg font-semibold tracking-wide text-text-primary mb-4">
                {pillar.title}
              </h3>
              
              <p className="font-sans text-base leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </motion.section>
  );
}