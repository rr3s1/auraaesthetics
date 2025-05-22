"use client";

import {
  CalendarDaysIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  BellAlertIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="group flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl dark:bg-slate-800 sm:items-start sm:text-left"
      variants={cardVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="mb-5 rounded-lg bg-primary-blue/10 p-3 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-accent-teal group-hover:to-primary-blue">
        <Icon className="size-10 shrink-0 text-primary-blue transition-colors duration-300 group-hover:text-white dark:text-gradient-blue-start" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-neutral-dark-gray dark:text-neutral-light-gray">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-medium-gray dark:text-neutral-light-gray/80">
        {description}
      </p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: CalendarDaysIcon,
      title: "Effortless Scheduling",
      description:
        "Book, reschedule, or cancel appointments in seconds with our seamless, intuitive interface. Effortlessly manage your entire family's health bookings all in one secure hub.",
    },
    {
      icon: ClockIcon,
      title: "Minimize Waiting, Maximize Care",
      description:
        "Our intelligent scheduling optimizes appointment flow, getting you seen by your doctor faster. Spend more quality time on your care, and less time in the waiting room.",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Your Health Portal, Anytime Access",
      description:
        "Securely access your appointment history, upcoming visit details, and important health documents whenever you need them, from any device.",
    },
    {
      icon: BellAlertIcon,
      title: "Stay Informed with Smart Reminders",
      description:
        "Never miss an appointment. Receive timely email and SMS reminders for your consultations, follow-ups, and important health updates.",
    },
    {
      icon: UserGroupIcon,
      title: "Find Specialists Easily",
      description:
        "Quickly search and filter for doctors by specialty, location, and availability to find the right care for you.",
    },
    {
      icon: VideoCameraIcon,
      title: "Telehealth Options Available",
      description:
        "Connect with healthcare providers virtually through secure video consultations for convenience and accessibility from home.",
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
        Everything You Need for Smarter Healthcare Management
      </motion.h2>
      <motion.p
        className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-medium-gray dark:text-neutral-light-gray/80 md:mb-16"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}} }}
      >
        CarePulse is packed with powerful features designed to simplify your medical appointments, save you time, and put you in control of your health journey.
      </motion.p>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection; 