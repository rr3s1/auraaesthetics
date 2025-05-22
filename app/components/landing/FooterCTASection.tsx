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
      className="bg-slate-900 px-4 py-16 text-center text-slate-200 dark:bg-black dark:text-slate-300 sm:px-6 lg:px-8 lg:py-20"
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
          Take the Next Step Towards Effortless Healthcare Management
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 dark:text-slate-400"
          variants={itemVariants}
        >
          Sign up today to simplify your medical appointments, or explore our
          services to see how we can help you and your family.
        </motion.p>
        <motion.div
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <motion.button
            className="w-full rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Create Your Free Account
          </motion.button>
          <motion.button
            className="w-full rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-lg font-semibold text-blue-700 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-500 dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-slate-700 sm:w-auto"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.button>
        </motion.div>

        <motion.div className="mb-8" variants={itemVariants}>
          <p className="mb-3 text-slate-400 dark:text-slate-500">Follow us on</p>
          <div className="flex items-center justify-center space-x-6">
            <motion.a href="#" aria-label="Facebook" className="text-slate-400 transition-colors hover:text-white dark:hover:text-slate-200" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <Facebook size={24} />
            </motion.a>
            <motion.a href="#" aria-label="Twitter" className="text-slate-400 transition-colors hover:text-white dark:hover:text-slate-200" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <Twitter size={24} />
            </motion.a>
            <motion.a href="#" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-white dark:hover:text-slate-200" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="text-sm text-slate-400 dark:text-slate-500" variants={itemVariants}>
          <a href="#/privacy" className="transition-colors hover:text-white dark:hover:text-slate-300">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#/terms" className="transition-colors hover:text-white dark:hover:text-slate-300">Terms of Service</a>
        </motion.div>
        <motion.p className="mt-8 text-xs text-slate-500 dark:text-slate-600" variants={itemVariants}>
          &copy; {currentYear} YourMedicalScheduler. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default FooterCTASection;
