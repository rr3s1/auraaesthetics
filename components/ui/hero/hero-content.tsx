"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { GradientText } from "@/components/ui/gradient-text";

import { MotionGradientButton } from '../animations/animated-components';
import { 
  containerVariants, 
  titleWrapperVariants, 
  paragraphVariants, 
  buttonWrapperVariants 
} from '../animations/animation-variants';

export function HeroContent() {
  const titleText = "AURA";

  return (
    <motion.div
      className="hero-gradient-mask relative z-10 mb-16 flex min-h-[60vh] flex-col items-start justify-center overflow-hidden px-3 text-left text-text-primary sm:px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title */}
      <motion.div
        className="max-w-full "
        variants={titleWrapperVariants}
        aria-label={titleText}
      >
        {/* MODIFIED: Changed to left alignment and removed centering */}
        <div className="flex w-full flex-col items-start justify-start md:flex-row ">
          <div className="relative">
            <motion.div
              className="absolute inset-0 z-0"
              animate={{
                textShadow: [
                  "0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 90px rgba(255, 255, 255, 0.2)",
                  "0 0 50px rgba(255, 255, 255, 0.8), 0 0 100px rgba(255, 255, 255, 0.6), 0 0 150px rgba(255, 255, 255, 0.3)",
                  "0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 90px rgba(255, 255, 255, 0.2)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="cinzel-decorative-black min-h-[1.2em] pr-10 text-left text-4xl font-bold leading-tight tracking-[0.12em] text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                AURA
              </span>
            </motion.div>
            <GradientText
              // MODIFIED: Changed text alignment to left
              className="cinzel-decorative-black relative z-10 min-h-[1.2em] pr-10 text-left text-4xl font-bold leading-tight tracking-[0.12em] drop-shadow-[0_4px_24px_rgba(253,177,16,0.18)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
              gradient="bg-gradient-to-r from-orange-400 via-orange-600 to-red-600"
            >
              AURA
            </GradientText>
          </div>
          <div className="relative">
            <motion.div
              className="absolute inset-0 z-0"
              animate={{
                textShadow: [
                  "0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.4), 0 0 75px rgba(255, 255, 255, 0.2)",
                  "0 0 45px rgba(255, 255, 255, 0.8), 0 0 90px rgba(255, 255, 255, 0.6), 0 0 135px rgba(255, 255, 255, 0.3)",
                  "0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.4), 0 0 75px rgba(255, 255, 255, 0.2)"
                ]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
            >
              <span className="cinzel-decorative-black min-h-[1.2em] text-left text-4xl font-bold leading-tight tracking-[0.12em] text-transparent sm:pl-0 sm:text-6xl md:pl-0 md:text-6xl lg:pl-10 lg:text-7xl xl:text-8xl 2xl:text-9xl">
                Aesthetics
              </span>
            </motion.div>
            <GradientText
              // MODIFIED: Changed text alignment to left
              className="cinzel-decorative-black min-h-[1.2em]text-left relative z-10 text-4xl font-bold leading-tight tracking-[0.12em] drop-shadow-[0_4px_24px_rgba(253,177,16,0.18)] sm:pl-0 sm:text-6xl md:pl-0  md:text-6xl lg:pl-10 lg:text-7xl xl:text-8xl 2xl:text-9xl"
            >
              Aesthetics
            </GradientText>
          </div>
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.div
        className="pt-4 text-left text-lg font-bold uppercase tracking-wider sm:pt-8 sm:text-xl md:pt-10 md:text-3xl lg:text-4xl xl:text-5xl"
        variants={paragraphVariants}
      >
        <span
          className="inline-block"
          style={{
            color: '#3A3A3A', // Deep Charcoal - no glow
            padding: '0 0.15em',
          }}
        >
          Where 
        </span>
        <span
          className="inline-block"
          style={{
            color: '#FCFBF8', // Pale Alabaster
            textShadow: '0 0 12px #F57A08, 0 0 24px #F57A08', // Glow effect
            padding: '0 0.15em',
          }}
        >
          Glow 
        </span>
        <span
          className="inline-block"
          style={{
            color: '#3A3A3A', // Deep Charcoal - no glow
            padding: '0 0.15em',
          }}
        >
          Becomes 
        </span>
        <span
          className="inline-block"
          style={{
            color: '#FCFBF8', // Pale Alabaster
            textShadow: '0 0 12px #F57A08, 0 0 24px #F57A08', // Glow effect
            padding: '0 0.15em',
          }}
        >
          You
        </span>
      </motion.div>

      {/* CTA Button Wrapper */}
      <motion.div
        className="mt-10 md:mt-12"
        style={{ pointerEvents: 'auto' }}
        variants={buttonWrapperVariants}
      >
        <Link href="/register" passHref legacyBehavior>
          <MotionGradientButton
            variant="variant"
            className="cormorant-garamond min-w-[160px] px-4 py-2 text-base sm:min-w-[180px] sm:px-8 sm:py-4 sm:text-lg md:min-w-[240px] md:px-10 md:py-5 md:text-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)" 
            }}
            whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            SCHEDULE CONSULTATION
          </MotionGradientButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}