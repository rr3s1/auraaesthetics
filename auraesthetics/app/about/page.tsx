"use client";

import { motion } from 'framer-motion';
import React from 'react';

import { Navbar } from '@/components/ui/navigation';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Martinez",
    role: "Medical Director & Cosmetic Surgeon",
    credentials: "MD, FACS, Board Certified",
    experience: "15+ years",
    specialties: ["Facial Aesthetics", "Advanced Injectables", "Surgical Procedures"],
    image: "/images/dr-martinez.jpg"
  },
  {
    id: 2,
    name: "Dr. James Chen",
    role: "Dermatologist & Aesthetic Specialist", 
    credentials: "MD, Dermatology Board Certified",
    experience: "12+ years",
    specialties: ["Laser Treatments", "Chemical Peels", "Skin Rejuvenation"],
    image: "/images/dr-chen.jpg"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    role: "Master Aesthetician & Injector",
    credentials: "RN, BSN, Certified Master Injector",
    experience: "10+ years", 
    specialties: ["Botox & Fillers", "Microneedling", "Skincare Treatments"],
    image: "/images/lisa-thompson.jpg"
  }
];

const achievements = [
  {
    number: "500+",
    label: "5-Star Reviews",
    description: "Exceptional patient satisfaction"
  },
  {
    number: "15K+",
    label: "Treatments Performed",
    description: "Proven expertise and experience"
  },
  {
    number: "98%",
    label: "Patient Retention",
    description: "Long-term relationships built on trust"
  },
  {
    number: "8+",
    label: "Years of Excellence",
    description: "Established reputation in aesthetics"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="px-4 pb-16 pt-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="cinzel-decorative-bold mb-6 bg-gradient-to-r from-[#fcd7a0] via-[#fff4e0] to-[#e0b97c] bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
            About AURA AESTHETICS
          </h1>
          <p className="cormorant-garamond mx-auto max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">
            Where artistry meets science. We are dedicated to enhancing your natural beauty 
            through innovative treatments, personalized care, and unwavering commitment to excellence.
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        className="px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0]">
                  <svg className="size-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="cinzel-decorative-bold text-3xl font-bold text-[#e0b97c]">Our Mission</h2>
              </div>
              <p className="cormorant-garamond text-lg leading-relaxed text-white/80">
                To provide exceptional medical aesthetic treatments that enhance your natural beauty 
                while maintaining the highest standards of safety, professionalism, and patient care. 
                We believe every individual deserves to feel confident and radiant in their own skin.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0]">
                  <svg className="size-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="cinzel-decorative-bold text-3xl font-bold text-[#e0b97c]">Our Vision</h2>
              </div>
              <p className="cormorant-garamond text-lg leading-relaxed text-white/80">
                To be the premier destination for medical aesthetics, recognized for our innovative 
                techniques, artistic approach, and transformative results. We envision a future where 
                everyone has access to safe, effective treatments that celebrate their unique beauty.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h2 
            className="cinzel-decorative-bold mb-16 text-center text-3xl font-bold text-[#e0b97c] md:text-4xl"
            variants={itemVariants}
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/30 to-black/30 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#e0b97c]/40"
              >
                <div className="mb-2 text-4xl font-bold text-[#e0b97c] md:text-5xl">
                  {achievement.number}
                </div>
                <div className="cormorant-garamond mb-2 text-xl font-semibold text-white">
                  {achievement.label}
                </div>
                <div className="text-sm text-white/60">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h2 
            className="cinzel-decorative-bold mb-16 text-center text-3xl font-bold text-[#e0b97c] md:text-4xl"
            variants={itemVariants}
          >
            Meet Our Expert Team
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group overflow-hidden rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:border-[#e0b97c]/40"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(224, 185, 124, 0.1)"
                }}
              >
                {/* Member Photo Placeholder */}
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#e0b97c]/20 to-[#fcd7a0]/20">
                  <div className="flex size-32 items-center justify-center rounded-full bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0]">
                    <svg className="size-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="cinzel-decorative-bold mb-2 text-2xl font-bold text-[#e0b97c]">
                    {member.name}
                  </h3>
                  <p className="cormorant-garamond mb-2 text-lg text-white/80">
                    {member.role}
                  </p>
                  <p className="mb-4 text-sm text-white/60">
                    {member.credentials} • {member.experience}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-[#e0b97c]">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="rounded-full border border-[#e0b97c]/30 bg-[#e0b97c]/20 px-3 py-1 text-xs text-[#e0b97c]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/80 to-black/80 p-8 backdrop-blur-sm md:p-12">
            <h2 className="cinzel-decorative-bold mb-4 text-3xl font-bold text-[#e0b97c] md:text-4xl">
              Experience the AURA Difference
            </h2>
            <p className="cormorant-garamond mb-8 text-xl leading-relaxed text-white/80">
              Join thousands of satisfied clients who have trusted us with their aesthetic journey. 
              Schedule your consultation today and discover what makes AURA AESTHETICS special.
            </p>
            <motion.button
              className="cormorant-garamond inline-flex items-center rounded-lg bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0] px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:from-[#fcd7a0] hover:to-[#e0b97c]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Consultation
              <svg className="ml-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 