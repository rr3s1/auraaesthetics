"use client";

import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GradientText } from "@/components/ui/gradient-text";
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants, 
  imageDramaticRevealVariants 
} from '../animations/animation-variants'; // Assuming this path is correct
import { AnimatedBlock, AnimatedText } from '../animations/animated-components'; // Assuming this path is correct

const Spline = lazy(() => import('@splinetool/react-spline'));

export function AuraDifferenceSection() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between h-screen w-full px-4 md:px-10 lg:px-16 gap-8 md:gap-12" // Added responsive layout
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col pl-20 justify-center h-full w-full md:w-1/3">
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8">
          <GradientText className="font-racing-sans-one">Empowering your shining radiance</GradientText>
        </AnimatedBlock>

        {/* <AnimatedText
          text="" // Empty as we're using highlightSpans
          el="p"
          className="text-lg lg:text-xl opacity-80 mb-8" // Slightly larger text
          variants={paragraphLineVariants}
          staggerAmount={0.04} // Faster stagger for paragraph lines
          splitter="word"
          highlightSpans={[
            <GradientText key="empowering" className="font-bold">Empowering</GradientText>,
            <span key="your"> your radiance to </span>,
            <GradientText key="shine" className="font-bold"> shine</GradientText>,
            <span key="always">, always in your favor</span>
          ]}
        /> */}
        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href="#" legacyBehavior>
            <a className="text-purple-400 hover:text-purple-300 font-semibold text-lg inline-block transform hover:translate-x-1 transition-transform duration-200">
              Discover Our Philosophy →
            </a>
          </Link>
        </AnimatedBlock>
      </div>
      <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center relative h-full flex items-center justify-center w-full md:w-2/3">
        {/* 
          This div is the direct parent of the Spline component.
          It needs to take full height of its parent (the AnimatedBlock).
        */}
        <div className="w-full h-full rounded-lg overflow-y-auto shadow-2xl relative pointer-events-auto"> {/* Modified: added overflow-y-auto and pointer-events-auto */}
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">Loading 3D Scene...</div>}>
            <Spline
              style={{
                width: '100%',
                height: '100%',
                // borderRadius: '0.5rem', // Already on parent, and parent has overflow-hidden
                position: 'absolute', // Ensures it fills the relative parent
                top: 0,
                left: 0,
                pointerEvents: 'auto', // Enable pointer events for scrolling
                // right: 0, // Not strictly needed with width: 100% and left: 0
                // bottom: 0, // Not strictly needed with height: 100% and top: 0
                // objectFit: 'cover' // Not applicable to Spline/iframe, remove
              }}
              scene="https://prod.spline.design/aWr8E2jhkdBMTWQt/scene.splinecode"
            />
          </Suspense>
        </div>
      </AnimatedBlock>
    </motion.section>
  );
}