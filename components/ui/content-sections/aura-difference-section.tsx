"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { Suspense, lazy } from 'react';

import { GradientText } from "@/components/ui/gradient-text";

import { AnimatedBlock } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp,
  imageDramaticRevealVariants 
} from '../animations/animation-variants';
import { TestimonialBlockquote } from '../galaxy-interactive-hero-section';
import { GradientButton } from '../gradient-button';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function AuraDifferenceSection() {
  return (
    
    <motion.section
      className="flex min-h-screen w-full flex-col items-center justify-center gap-y-10 gap-x-8 px-4 py-12 md:flex-row md:justify-around md:items-stretch md:gap-x-6 lg:gap-x-12 md:px-6 lg:px-10 xl:px-16" // Responsive layout, padding, gap
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="flex w-full order-1 flex-col justify-center text-center md:w-1/3 md:text-left">
        <AnimatedBlock el="div" variants={simpleFadeInUp} className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        <p className="cormorant-garamond pb-2 text-white sm:pb-3">CONFIDENT</p>
          <h1 className="cinzel-decorative-bold py-2 text-white sm:py-3">AURA</h1>
          
          <GradientText className="cinzel-decorative-bold pt-2 leading-snug text-white sm:pt-3 sm:leading-normal">& <br/> Perfected Radiance</GradientText>
        </AnimatedBlock>

      
        <AnimatedBlock variants={simpleFadeInUp} className="pt-6 sm:pt-8" delay={0.3}>
          <Link href="#" legacyBehavior>
          <GradientButton className="px-4 py-2 text-xs font-medium sm:px-5 sm:py-2.5 sm:text-sm md:text-base">
                Discover Our Philosophy →
              </GradientButton>
          </Link>
        </AnimatedBlock>
      </div>
      <AnimatedBlock variants={imageDramaticRevealVariants} className="relative  order-2 flex w-full items-center justify-center md:w-2/3">
        {/* 
          This div is the direct parent of the Spline component.
          It needs to take full height of its parent (the AnimatedBlock).
        */}
        <div className="pointer-events-auto relative w-full  max-w-md md:max-w-full aspect-[4/3] md:aspect-auto md:h-full rounded-lg shadow-2xl overflow-hidden"> 
          <Suspense fallback={<div className="flex size-full items-center justify-center rounded-lg bg-gray-100">Loading 3D Scene...</div>}> 
            <Spline
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute', 
                top: 0,
                left: 0,
                pointerEvents: 'auto', 
              }}
              scene="https://prod.spline.design/3-accyixYYHDqKCS/scene.splinecode"
            />
          </Suspense>
        </div>
      </AnimatedBlock>
    </motion.section>
  );
}