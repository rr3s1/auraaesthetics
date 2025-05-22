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
      className="flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl dark:bg-slate-800 sm:items-start sm:text-left"
      variants={cardVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Icon className="mb-5 size-12 shrink-0 text-blue-600 dark:text-blue-400" />
      <h3 className="mb-3 text-xl font-semibold text-slate-800 dark:text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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
        "Book, reschedule, or cancel appointments in seconds with our intuitive interface. Manage your family's health bookings all in one place.",
    },
    {
      icon: ClockIcon,
      title: "Minimize Waiting, Maximize Care",
      description:
        "Our smart system optimizes schedules to get you seen by your doctor faster. More time for care, less time in the waiting room.",
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
      className="bg-slate-50 px-4 py-16 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="mb-4 text-center text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5}} }}
      >
        Key Features & Benefits
      </motion.h2>
      <motion.p
        className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400 md:mb-16"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}} }}
      >
        Discover how we make your healthcare journey smoother.
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