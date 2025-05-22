"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

// SearchParamProps is expected to be globally available from types/index.d.ts

const RegisterPage = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  // Framer Motion variants similar to HeroSection
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  // itemVariants might be used by child components later
  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };

  return (
    <motion.section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-blue-start via-primary-green to-gradient-teal-end px-4 py-16 dark:from-slate-800 dark:via-neutral-dark-gray dark:to-black sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative background elements from HeroSection */}
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

      {/* Existing content, ensure it's layered above blobs, might need relative z-10 on children if issues */}
      {isAdmin && <PasskeyModal />}

      {/* The main content area - including form and side image - needs to be a direct child for centering */}
      {/* We wrap the original two main children in a new div to manage their layout relative to each other */}
      {/* This wrapper will be centered by the motion.section's flex properties */}
      <div className="relative z-10 flex w-full max-w-screen-lg items-center justify-center"> 
        <section className="remove-scrollbar container my-auto flex-shrink-0 bg-white/10 dark:bg-slate-900/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:max-w-lg lg:max-w-xl"> 
          <div className="sub-container max-w-[496px]"> {/* This max-w might be redundant if section controls width, but good for internal content width limit*/}
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />

            <PatientForm />

            <div className="text-xs mt-10 flex justify-between">
              <p className="justify-items-end text-neutral-light-gray/50 xl:text-left">
                &copy; 2024 CarePluse
              </p>
              <Link href="/?admin=true" className="text-neutral-light-gray/70 hover:text-neutral-light-gray transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </section>

        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img hidden md:block md:max-w-[40%] lg:max-w-[50%]" /* Kept hidden on small, adjusted for larger screens */
        />
      </div>
    </motion.section>
  );
};

export default RegisterPage;
