"use client";

import {
  UserPlusIcon,
  MagnifyingGlassCircleIcon,
  CalendarDaysIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";

interface StepProps {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const StepCard: React.FC<StepProps> = ({ number, icon: Icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl dark:bg-slate-800"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative mb-5">
        <Icon className="size-16 text-blue-600 dark:text-blue-400" />
        <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-2 ring-white dark:bg-blue-400 dark:ring-slate-800">
          {number}
        </span>
      </div>
      <h4 className="mb-3 text-xl font-semibold text-slate-800 dark:text-white">{title}</h4>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: "01",
      icon: UserPlusIcon,
      title: "Create Your Secure Account",
      description:
        "Sign up in under a minute with your basic information. Your privacy and data security are our top priority.",
    },
    {
      number: "02",
      icon: MagnifyingGlassCircleIcon,
      title: "Discover a Wide Network of Providers",
      description:
        "Easily browse, search, and filter for doctors, specialists, and healthcare services tailored to your needs and location.",
    },
    {
      number: "03",
      icon: CalendarDaysIcon,
      title: "Book with Confidence & Ease",
      description:
        "View real-time availability and select the appointment slot that works best for your schedule. Instant confirmations, no more phone calls.",
    },
    {
      number: "04",
      icon: Cog8ToothIcon,
      title: "Seamless Consultations & Management",
      description:
        "Attend your appointments (in-person or telehealth) and effortlessly manage your entire family's healthcare journey from your personalized dashboard.",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <motion.section
      className="bg-white px-4 py-16 dark:bg-black sm:px-6 lg:px-8 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="mb-4 text-center text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5}} }}
      >
        Getting Started is Easy
      </motion.h2>
      <motion.p
        className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400 md:mb-16"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}} }}
      >
        Follow these simple steps to take control of your medical scheduling experience.
      </motion.p>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
