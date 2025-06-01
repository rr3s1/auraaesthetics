"use client";

import { motion } from 'framer-motion';
import React from 'react';

import { AnimatedBlock , MotionGradientButton } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp,
  imageDramaticRevealVariants 
} from '../animations/animation-variants';

export function AuraDifferenceSection() {
  return (
    
    <motion.section
      className="flex min-h-screen w-full flex-col items-center justify-center gap-x-8 gap-y-16 px-4 py-16 md:flex-row md:items-stretch md:justify-around md:gap-x-6 md:px-6 lg:gap-x-12 lg:px-10 xl:px-16" // Increased y-gap and y-padding for more space
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="relative order-1 flex w-full flex-col justify-center text-center md:w-2/5 md:text-left lg:w-1/3"> {/* Adjusted width for text, added relative positioning */}
        
        {/* Enhanced Background Glow for Text Area */}
        <div className="absolute inset-0 z-[-1] scale-125 opacity-50 md:scale-150"> {/* Scaled up for broader effect */}
          <div 
            className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-accent-yellow/20 via-accent-orange/10 to-transparent" 
            style={{ filter: 'blur(80px)' }} // More pronounced blur
          />
        </div>
        
        <AnimatedBlock el="div" variants={simpleFadeInUp} className="relative">
          
          <h2 className="mx-auto space-y-1 text-center font-serif text-4xl font-light leading-tight text-text-primary md:text-5xl lg:text-7xl xl:text-8xl"> {/* Centered and adjusted spacing and sizes */}
            <div className="cormorant-garamond pb-2 sm:pb-3">Confident</div>
            <div 
              className="cinzel-decorative-bold bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-[3rem] font-extrabold tracking-tight text-transparent sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.5rem]"
              style={{ textShadow: '0 0 12px rgba(245, 122, 8, 0.35)' }} // Subtle Orange Glow for AURA
            >
              AURA
            </div>
            <div className="py-1 text-2xl font-medium tracking-wide text-accent-yellow sm:text-3xl lg:text-4xl xl:text-4xl">&</div> {/* Slightly smaller '&' */}
            <div 
              className="cinzel-decorative-bold bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-red-deep bg-clip-text text-[2.5rem] font-black tracking-tight text-transparent sm:text-[3.25rem] lg:text-[4rem] xl:text-[5rem]" 
              style={{ textShadow: '0 0 12px rgba(232, 64, 12, 0.3)' }} // Subtle Red/Orange Glow
            >
              Perfected Radiance
            </div>
          </h2>
        </AnimatedBlock>

        <AnimatedBlock variants={simpleFadeInUp} className="flex justify-center pt-8 sm:pt-10" delay={0.3}> {/* Centered button container and increased top padding */}
          <MotionGradientButton
            variant="ignitedRadiance"
            className="cormorant-garamond min-w-[220px] px-8 py-4 text-lg font-semibold sm:min-w-[240px] sm:px-10 sm:py-5 sm:text-xl" // Slightly larger button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 6px 20px rgba(245, 122, 8, 0.35)" // Enhanced shadow for Ignited Radiance
            }}
            whileTap={{ scale: 0.95, boxShadow: "0px 3px 10px rgba(232, 64, 12, 0.25)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => {
              window.location.href = '/our-philosophy';
            }}
          >
            Discover Our Vision →
          </MotionGradientButton>
        </AnimatedBlock>
      </div>
      <AnimatedBlock variants={imageDramaticRevealVariants} className="relative order-2 flex w-full items-center justify-center md:w-3/5 lg:w-2/3"> {/* Adjusted width */}
        <div className="pointer-events-auto relative aspect-[16/9] w-full max-w-lg overflow-hidden rounded-xl shadow-2xl md:aspect-auto md:h-[80vh] md:max-w-full lg:rounded-2xl"> {/* Increased max-width, rounded-xl, specific height */}
          {/* 
            TODO: Replace with actual, high-quality video/imagery relevant to a luxury aesthetics clinic.
            Consider slow-motion, elegant visuals, transformations, or abstract representations of radiance/beauty.
          */}
          <video
            src="/Cinematic_Drone_Video_Ready.mp4" // REPLACE THIS PLACEHOLDER
            autoPlay
            loop
            muted
            playsInline /* Important for mobile */
            className="absolute left-0 top-0 size-full object-cover"
            aria-label="Showcasing the Aura Aesthetics experience and results"
          >
            Your browser does not support the video tag.
          </video>
          {/* Optional overlay for text contrast if video is too bright in some areas */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </AnimatedBlock>
    </motion.section>
  );
}