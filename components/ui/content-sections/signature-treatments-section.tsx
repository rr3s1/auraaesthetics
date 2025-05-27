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
  // cardHoverEffect // We'll define hover effects primarily with Tailwind group-hover
} from '../animations/animation-variants';

interface TreatmentCard {
  title: string;
  image: string;
  alt: string;
  linkText: string;
  linkHref: string;
}

export function SignatureTreatmentsSection() {
  const cardData: TreatmentCard[] = [
    { title: "Advanced Dermal Fillers", image: "/advanced_dermal.png", alt: "Client receiving dermal filler treatment", linkText: "Discover Smoothing", linkHref: "/treatments/dermal-fillers" },
    { title: "Laser Skin Rejuvenation", image: "/laser.png", alt: "Advanced laser skin treatment", linkText: "Explore Radiance", linkHref: "/treatments/laser-rejuvenation" },
    { title: "Non-Invasive Body Sculpting", image: "/body_sculpt.png", alt: "Client undergoing body sculpting treatment", linkText: "View Contouring", linkHref: "/treatments/body-sculpting" },
    { title: "LED Blue Light Therapy", image: "/frontEnd.png", alt: "Relaxing LED Blue Light Therapy", linkText: "LED Blue Light Therapy", linkHref: "/treatments/led-blue-light-therapy" },
    { title: "Medical-Grade Skincare", image: "/products.png", alt: "Display of premium medical-grade skincare products", linkText: "Unlock Your Glow", linkHref: "/skincare" },
    { title: "Hair Restoration Therapies", image: "/hairR.png", alt: "Advanced hair restoration procedure", linkText: "Revitalize & Renew", linkHref: "/treatments/hair-restoration" },
  ];

  return (
    <div className="relative bg-site-bg px-4 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-[-2] opacity-40 md:opacity-50">
        <div className="absolute -left-1/4 -top-1/4 size-[150%] rounded-full bg-gradient-radial from-accent-yellow-dark/30 via-accent-orange/15 to-transparent filter blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 size-[150%] rounded-full bg-gradient-radial from-accent-red/25 via-accent-red-deep/10 to-transparent filter blur-[120px]" />
      </div>

      <motion.section
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl relative z-0"
      >
        <div className="mb-20 text-center">
          <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-6 text-center">
            <span className="cinzel-decorative-bold bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-4xl font-bold tracking-wider text-transparent md:text-5xl lg:text-6xl">
              OUR SIGNATURE TREATMENTS
            </span>
          </AnimatedBlock>
          <div className="mx-auto mb-12 h-1 w-32 rounded-full bg-gradient-to-r from-accent-yellow-dark/70 via-accent-orange to-accent-red/70 md:w-40" />
          <AnimatedText
            text="Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique — meticulously planned from initial consultation through to aftercare, ensuring exceptional results."
            el="p"
            className="cormorant-garamond mx-auto max-w-3xl text-center text-xl font-normal leading-loose text-text-primary/85 md:text-2xl"
            variants={paragraphLineVariants}
            staggerAmount={0.02}
            splitter="line"
          />
          <AnimatedBlock variants={imageDramaticRevealVariants} delay={0.3} className="mx-auto mt-16 w-full max-w-3xl">
            <img
              src="/collage.png"
              alt="Collage showcasing various aesthetic treatments and results"
              className="rounded-2xl shadow-2xl ring-2 ring-accent-orange/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(245,122,8,0.25)]"
            />
          </AnimatedBlock>
        </div>

        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-16"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.title + index}
              variants={simpleFadeInUp}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              viewport={{ once: true, amount: 0.2 }}
              className="signature-treatment-card-group group relative flex flex-col overflow-hidden rounded-xl bg-site-bg p-1 shadow-xl transition-all duration-300 ease-out hover:scale-[1.03]"
            >
              {/* 1. Intense "Ignited Radiance" Background Glow on Hover (Outer layer, softer) */}
              <div className="absolute inset-[-10px] z-[-2] rounded-[20px] bg-gradient-to-br from-accent-yellow-dark/40 via-accent-orange/50 to-accent-red/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

              {/* 2. "Ignited Radiance" Border Glow on Hover (More defined, sharper) */}
              <div className="card-border-glow absolute inset-0 z-[-1] rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100
                            [box-shadow:0_0_0_2px_var(--color-border-start),_0_0_30px_5px_var(--color-glow-start),_inset_0_0_10px_var(--color-inner-glow-start)]
                            dark:[box-shadow:0_0_0_2px_var(--color-border-start),_0_0_60px_5px_var(--color-glow-start),_inset_0_0_20px_var(--color-inner-glow-start)]"
                 style={{
                   "--color-border-start": "transparent",
                   "--color-glow-start": "transparent",
                   "--color-inner-glow-start": "transparent"
                 } as any}
              />
              
              {/* Inner content wrapper - applies the actual visible background and static border */}
              <div className="relative z-0 flex h-full flex-grow flex-col rounded-[11px] bg-content-bg p-5 transition-shadow duration-300 group-hover:shadow-[0_15px_45px_-10px_rgba(245,122,8,0.4)] border border-accent-yellow-dark/20 group-hover:border-transparent">
                <div className="mb-5 overflow-hidden rounded-lg shadow-md">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="aspect-video w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                <h3 className="cormorant-garamond mb-3 text-2xl font-semibold leading-tight text-text-primary transition-colors duration-300 group-hover:text-accent-orange lg:text-[1.6rem]">
                  {card.title}
                </h3>

                <div className="flex-grow" />

                <Link href={card.linkHref} legacyBehavior>
                  <a className="group/link mt-4 self-start bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-base font-bold uppercase tracking-wider text-transparent transition-all duration-300 hover:brightness-125 focus:brightness-125">
                    {card.linkText}
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover/link:translate-x-1.5 group-focus/link:translate-x-1.5">
                      →
                    </span>
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
