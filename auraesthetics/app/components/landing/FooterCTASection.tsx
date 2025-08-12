"use client"; // Will use framer-motion

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react"; // Using lucide-react for social icons
import React from "react";

// Removed: import styles from "./FooterCTASection.module.css";

const FooterCTASection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-tr from-neutral-dark-gray via-slate-900 to-neutral-dark-gray px-4 py-16 text-center text-neutral-light-gray/90 dark:from-black dark:via-slate-900 dark:to-black dark:text-neutral-light-gray/80 sm:px-6 lg:px-8 lg:py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="mx-auto max-w-4xl" variants={itemVariants}>
        <motion.h2
          className="mb-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
          variants={itemVariants}
        >
          Ready to Simplify Your Health Journey?
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-light-gray/80 dark:text-neutral-light-gray/70"
          variants={itemVariants}
        >
          Join thousands of satisfied users who have transformed their healthcare experience with CarePulse. Get started for free today—no credit card required. Your wellness is just a click away.
        </motion.p>
        <motion.div
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <motion.button
            className="w-full rounded-lg bg-gradient-to-r from-primary-green to-accent-teal px-8 py-3 text-lg font-semibold text-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:ring-offset-2 sm:w-auto"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started for Free
          </motion.button>
          <motion.button
            className="w-full rounded-lg border-2 border-primary-blue bg-transparent px-8 py-3 text-lg font-semibold text-primary-blue shadow-md transition-colors duration-300 ease-in-out hover:scale-105 hover:bg-primary-blue/10 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 focus:ring-offset-2 dark:border-primary-blue dark:text-primary-blue dark:hover:bg-primary-blue/20 sm:w-auto"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div className="mb-8" variants={itemVariants}>
          <p className="mb-3 text-neutral-light-gray/70 dark:text-neutral-light-gray/60">Follow us on</p>
          <div className="flex items-center justify-center space-x-6">
            <motion.a href="#" aria-label="Facebook" className="text-neutral-light-gray/60 transition-colors hover:text-neutral-light-gray dark:text-neutral-light-gray/50 dark:hover:text-neutral-light-gray/80" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <Facebook size={24} />
            </motion.a>
            <motion.a href="#" aria-label="Twitter" className="text-neutral-light-gray/60 transition-colors hover:text-neutral-light-gray dark:text-neutral-light-gray/50 dark:hover:text-neutral-light-gray/80" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <Twitter size={24} />
            </motion.a>
            <motion.a href="#" aria-label="LinkedIn" className="text-neutral-light-gray/60 transition-colors hover:text-neutral-light-gray dark:text-neutral-light-gray/50 dark:hover:text-neutral-light-gray/80" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="text-sm text-neutral-light-gray/60 dark:text-neutral-light-gray/50" variants={itemVariants}>
          <a href="#/privacy" className="transition-colors hover:text-neutral-light-gray dark:hover:text-neutral-light-gray/80">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#/terms" className="transition-colors hover:text-neutral-light-gray dark:hover:text-neutral-light-gray/80">Terms of Service</a>
        </motion.div>
        <motion.p className="mt-8 text-xs text-neutral-light-gray/50 dark:text-neutral-light-gray/40" variants={itemVariants}>
          &copy; {currentYear} CarePulse. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default FooterCTASection;
