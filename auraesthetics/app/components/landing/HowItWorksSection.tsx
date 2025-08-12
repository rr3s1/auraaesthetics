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
        <Icon className="size-16 text-primary-green dark:text-gradient-green-start" />
        <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-gradient-to-tr from-primary-green to-accent-teal text-xs font-bold text-white ring-2 ring-white dark:ring-slate-800">
          {number}
        </span>
      </div>
      <h4 className="mb-3 text-xl font-semibold text-neutral-dark-gray dark:text-neutral-light-gray">{title}</h4>
      <p className="text-sm leading-relaxed text-neutral-medium-gray dark:text-neutral-light-gray/80">
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
        "Sign up in under a minute for lifetime access. Your privacy and data security are our top priority.",
    },
    {
      number: "02",
      icon: MagnifyingGlassCircleIcon,
      title: "Discover Top Providers",
      description:
        "Easily browse, search, and filter for doctors, specialists, and healthcare services tailored to your needs and location. Find the perfect match for your health.",
    },
    {
      number: "03",
      icon: CalendarDaysIcon,
      title: "Book Instantly, 24/7",
      description:
        "View real-time availability and select the appointment slot that works best for your schedule. Get instant confirmations—no more waiting or phone calls.",
    },
    {
      number: "04",
      icon: Cog8ToothIcon,
      title: "Manage Your Health Journey",
      description:
        "Attend appointments (in-person or telehealth) and effortlessly track your visit history, manage family profiles, and stay organized with your personalized CarePulse dashboard.",
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
      className="bg-neutral-light-gray px-4 py-16 dark:bg-neutral-dark-gray sm:px-6 lg:px-8 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="mb-4 text-center text-3xl font-extrabold text-neutral-dark-gray dark:text-neutral-light-gray sm:text-4xl lg:text-5xl"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5}} }}
      >
        Your Simple Path to Stress-Free Healthcare
      </motion.h2>
      <motion.p
        className="mx-auto mb-12 max-w-3xl text-center text-lg text-neutral-medium-gray dark:text-neutral-light-gray/80 md:mb-16"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}} }}
      >
        Experience a new era of convenience. In just a few clicks, you&apos;re on your way to seamless medical appointment management with CarePulse.
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
