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
      className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 px-4 py-16 dark:from-slate-800 dark:via-slate-900 dark:to-black sm:px-6 lg:px-8"
      // The min-h is an example, adjust if you have a fixed header of certain height (e.g. 80px)
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Use containerVariants for the section itself to control overall sequence
    >
      {/* Optional: Decorative background elements */}
      <motion.div
        className="animate-blob absolute left-0 top-0 size-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl dark:opacity-50"
        initial={{ scale: 0, x: -100, y: -50 }}
        animate={{ scale: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.5} }}
      ></motion.div>
      <motion.div
        className="animate-blob animation-delay-2000 absolute right-0 top-0 size-72 rounded-full bg-sky-300 opacity-70 mix-blend-multiply blur-xl dark:opacity-50"
        initial={{ scale: 0, x: 100, y: -50 }}
        animate={{ scale: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.7} }}
      ></motion.div>
      <motion.div
        className="animate-blob animation-delay-4000 absolute bottom-20 left-20 size-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl dark:opacity-50"
        initial={{ scale: 0, x: -100, y: 50 }}
        animate={{ scale: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.9} }}
      ></motion.div>

      <motion.div
        className="relative z-10 max-w-3xl rounded-xl bg-white/70 p-8 text-center shadow-2xl backdrop-blur-md dark:bg-slate-900/70"
        variants={itemVariants} // This div will be part of the stagger sequence
      >
        <motion.h1
          className="mb-6 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          Your Health, Seamlessly Scheduled.
        </motion.h1>
        <motion.p
          className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl"
          variants={itemVariants}
        >
          Tired of phone tag and endless waiting? Our platform empowers you to
          instantly book, manage, and track all your medical appointments in one
          secure place. Experience healthcare access designed for your life.
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants} // This div containing buttons will also be part of stagger
        >
          <motion.button
            className="w-full rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Sign Up for Free
          </motion.button>
          <motion.button
            className="w-full rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-lg font-semibold text-blue-700 shadow-md transition-colors duration-300 ease-in-out hover:scale-105 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-500 dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-slate-700 sm:w-auto"
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