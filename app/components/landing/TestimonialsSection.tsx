"use client";

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"; // Using solid for a more prominent quote icon
import { motion } from "framer-motion";
import Image from "next/image"; // Import next/image
import React from "react";

// Removed: import styles from "./TestimonialsSection.module.css";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarPlaceholder?: string; // e.g., initials or path to a placeholder image
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  avatarPlaceholder,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Check if avatarPlaceholder is likely an image path or initials
  const isImagePath = avatarPlaceholder && (avatarPlaceholder.includes("/") || avatarPlaceholder.includes("."));

  return (
    <motion.div
      className="flex h-full flex-col rounded-xl bg-white p-6 shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl dark:bg-slate-800 md:p-8"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-6 shrink-0 text-center">
        {isImagePath && avatarPlaceholder ? (
          <Image
            src={avatarPlaceholder}
            alt={`${name} - ${title}`}
            width={80}
            height={80}
            className="mx-auto size-20 rounded-full object-cover shadow-md"
          />
        ) : (
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-semibold text-white shadow-md ring-4 ring-white dark:bg-blue-500 dark:ring-slate-800">
            {avatarPlaceholder || name.substring(0, 1)}
          </div>
        )}
      </div>

      <div className="relative grow">
        <ChatBubbleOvalLeftEllipsisIcon className="absolute left-0 top-0 size-10 -translate-x-4 -translate-y-4 text-slate-200 dark:text-slate-700" />
        <blockquote className="relative z-10 mb-6 text-base italic leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      <cite className="mt-auto border-t border-slate-200 pt-5 text-center dark:border-slate-700">
        <span className="block text-lg font-bold text-slate-800 dark:text-white">{name}</span>
        <span className="block text-sm text-slate-500 dark:text-slate-400">{title}</span>
      </cite>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "This platform has revolutionized how I manage my appointments. So easy and efficient!",
      name: "Sarah J.",
      title: "Satisfied Patient",
      avatarPlaceholder: "SJ", // Ideally, path to an image: e.g., "/avatars/sarah.jpg"
    },
    {
      quote:
        "Finally, a scheduling system that understands the needs of both patients and doctors. Highly recommended.",
      name: "Dr. Mark Adams",
      title: "General Practitioner",
      avatarPlaceholder: "MA",
    },
    {
      quote:
        "Booking appointments used to be a chore, but now it is straightforward and quick. Love the reminders!",
      name: "David K.",
      title: "Busy Professional",
      avatarPlaceholder: "DK",
    },
    {
      quote:
        "As a clinic manager, implementing this scheduling software has drastically reduced our administrative burden and improved patient flow. Our staff and patients are happier!",
      name: "Maria L.",
      title: "Clinic Manager",
      avatarPlaceholder: "ML",
    },
    {
      quote:
        "I love being able to book appointments for my entire family from one simple app. The telehealth feature is a lifesaver for quick consultations. Fantastic platform!",
      name: "John B.",
      title: "Parent & User",
      avatarPlaceholder: "JB",
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
      className="bg-slate-100 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="mb-4 text-center text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5}} }}
      >
        What Our Users Say
      </motion.h2>
      <motion.p
        className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400 md:mb-16"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}} }}
      >
        Real stories from people who&rsquo;ve transformed their healthcare experience.
      </motion.p>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
