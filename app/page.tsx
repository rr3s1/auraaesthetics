"use client";

import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen bg-[#030303]">
      <HeroGeometric
        badge="Medical Scheduler"
        title1="Streamlined Appointments"
        title2="Efficient Healthcare Access"
      />
      <motion.div
        custom={3} // Animation order after HeroGeometric's internal elements
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col sm:flex-row items-center gap-4 p-4"
      >
        <Button asChild size="lg" variant="default" className="px-8 py-3 text-lg w-full sm:w-auto">
          <Link href="/register">Get Started Now</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg border-white/50 text-white/80 hover:bg-white/10 hover:text-white w-full sm:w-auto">
          <Link href="/admin">Admin Dashboard</Link>
        </Button>
      </motion.div>
    </div>
  );
}
