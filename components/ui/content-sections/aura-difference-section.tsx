"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { Suspense, lazy } from 'react';

import { AnimatedBlock } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp,
  imageDramaticRevealVariants 
} from '../animations/animation-variants';
import { GradientButton } from '../gradient-button';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function AuraDifferenceSection() {
  return (
    
    <motion.section
      className="flex min-h-screen w-full flex-col items-center justify-center gap-x-8 gap-y-10 px-4 py-12 md:flex-row md:items-stretch md:justify-around md:gap-x-6 md:px-6 lg:gap-x-12 lg:px-10 xl:px-16" // Responsive layout, padding, gap
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="order-1 flex w-full flex-col justify-center text-center md:w-1/3 md:text-left">
        <AnimatedBlock el="div" variants={simpleFadeInUp} className="relative">
          {/* Background glow accent */}
          <div className="absolute left-1/2 top-1/2 z-[-1] size-4/5 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-pink-100/10 via-[#fff0f5]/5 to-transparent blur-3xl" />
          
          <h2 className="space-y-2 font-serif text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            <div className="cormorant-garamond pb-2 sm:pb-3">Confident</div>
            <div className="cinzel-decorative-bold bg-gradient-to-r from-[#fdf0f4] via-[#ffe0fb] to-[#f6a0ff] bg-clip-text text-[3.25rem] font-extrabold tracking-tight text-transparent sm:text-[4rem] lg:text-[5rem]">
              AURA
            </div>
            <div className="py-1 text-3xl font-medium tracking-wide text-[#3de5ff] sm:text-4xl lg:text-5xl">&</div>
            <div className="cinzel-decorative-bold bg-gradient-to-r from-pink-400 via-purple-500 to-red-500 bg-clip-text text-[2.75rem] font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Perfected Radiance
            </div>
          </h2>
        </AnimatedBlock>

        <AnimatedBlock variants={simpleFadeInUp} className="pt-6 sm:pt-8" delay={0.3}>
          <Link href="#" legacyBehavior>
            <GradientButton className="rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
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
        <div className="pointer-events-auto relative aspect-[4/3]  w-full max-w-md overflow-hidden rounded-lg shadow-2xl md:aspect-auto md:h-full md:max-w-full"> 
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