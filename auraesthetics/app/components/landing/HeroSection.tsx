"use client";

import { motion } from "framer-motion";
import React from "react";

// Removed: import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="relative flex  flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-blue-start via-primary-green to-gradient-teal-end px-4 py-16 dark:from-slate-800 dark:via-neutral-dark-gray dark:to-black sm:px-6 lg:px-8"
      // The min-h is an example, adjust if you have a fixed header of certain height (e.g. 80px)
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Use containerVariants for the section itself to control overall sequence
    >
      {/* Optional: Decorative background elements */}
      <motion.div
        className="animate-blob absolute left-0 top-0 size-72 rounded-full bg-accent-purple/70 opacity-70 mix-blend-multiply blur-xl dark:opacity-50"
        initial={{ scale: 0, x: -100, y: -50 }}
        animate={{ scale: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.5} }}
      ></motion.div>
      <motion.div
        className="animate-blob animation-delay-2000 absolute right-0 top-0 size-72 rounded-full bg-primary-blue/70 opacity-70 mix-blend-multiply blur-xl dark:opacity-50"
        initial={{ scale: 0, x: 100, y: -50 }}
        animate={{ scale: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.7} }}
      ></motion.div>
      <motion.div
        className="animate-blob animation-delay-4000 absolute bottom-20 left-20 size-72 rounded-full bg-primary-green/70 opacity-70 mix-blend-multiply blur-xl dark:opacity-50"
        initial={{ scale: 0, x: -100, y: 50 }}
        animate={{ scale: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.9} }}
      ></motion.div>

      <motion.div
        className="relative z-10 max-w-3xl rounded-xl bg-neutral-light-gray/80 p-8 text-center shadow-2xl backdrop-blur-md dark:bg-neutral-dark-gray/80"
        variants={itemVariants} // This div will be part of the stagger sequence
      >
        <motion.h1
          className="mb-6 text-4xl font-extrabold text-neutral-dark-gray dark:text-neutral-light-gray sm:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          Reclaim Your Time. Embrace Wellness. Effortless Medical Scheduling is Here.
        </motion.h1>
        <motion.p
          className="mb-8 text-lg leading-relaxed text-neutral-medium-gray dark:text-neutral-light-gray/90 sm:text-xl"
          variants={itemVariants}
        >
          Stop juggling calls and calendars. With CarePulse, discover top doctors, 
          book appointments instantly, and manage your family&apos;s health records—all 
          in one secure, intuitive platform. Your journey to better health starts now, simplified.
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants} // This div containing buttons will also be part of stagger
        >
          <motion.button
            className="w-full rounded-lg bg-primary-green px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-300 ease-in-out hover:scale-105 hover:bg-primary-green/90 focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:ring-offset-2 sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Sign Up for Free
          </motion.button>
          <motion.button
            className="w-full rounded-lg border-2 border-primary-blue bg-transparent px-8 py-3 text-lg font-semibold text-primary-blue shadow-md transition-colors duration-300 ease-in-out hover:scale-105 hover:bg-primary-blue/10 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 focus:ring-offset-2 dark:border-primary-blue dark:text-primary-blue dark:hover:bg-primary-blue/20 sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Find a Doctor & Book
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection; 