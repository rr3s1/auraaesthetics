"use client";

import { motion } from 'framer-motion';
import React from 'react';

import { Navbar } from '@/components/ui/navigation';

const services = [
  {
    id: 1,
    name: "Botox & Dysport",
    description: "Advanced wrinkle reduction treatments to smooth fine lines and restore youthful confidence.",
    duration: "30-45 mins",
    price: "Starting at $350",
    image: "/images/botox-treatment.jpg"
  },
  {
    id: 2,
    name: "Dermal Fillers", 
    description: "Premium hyaluronic acid fillers to enhance facial volume and contour definition.",
    duration: "45-60 mins",
    price: "Starting at $650",
    image: "/images/dermal-fillers.jpg"
  },
  {
    id: 3,
    name: "Chemical Peels",
    description: "Professional-grade peels to reveal smoother, more radiant skin texture.",
    duration: "45-60 mins", 
    price: "Starting at $150",
    image: "/images/chemical-peel.jpg"
  },
  {
    id: 4,
    name: "Microneedling",
    description: "Collagen-stimulating treatment for improved skin texture and tone.",
    duration: "60-75 mins",
    price: "Starting at $300", 
    image: "/images/microneedling.jpg"
  },
  {
    id: 5,
    name: "Laser Treatments",
    description: "Advanced laser technology for skin resurfacing and hair removal.",
    duration: "30-90 mins",
    price: "Starting at $250",
    image: "/images/laser-treatment.jpg"
  },
  {
    id: 6,
    name: "PDO Thread Lift",
    description: "Non-surgical facial lifting using premium PDO threads for natural results.",
    duration: "90-120 mins",
    price: "Starting at $800",
    image: "/images/thread-lift.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function ServicesPage() {
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
        <div className="mx-auto max-w-4xl">
          <h1 className="cinzel-decorative-bold mb-6 bg-gradient-to-r from-[#fcd7a0] via-[#fff4e0] to-[#e0b97c] bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
            Our Premium Services
          </h1>
          <p className="cormorant-garamond mx-auto max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
            Experience the finest in medical aesthetics with our comprehensive range of 
            cutting-edge treatments designed to enhance your natural beauty.
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:border-[#e0b97c]/40"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(224, 185, 124, 0.1)"
                }}
              >
                {/* Service Card Content */}
                <div className="p-6">
                  {/* Service Header */}
                  <div className="mb-4">
                    <h3 className="cinzel-decorative-bold mb-2 text-2xl font-bold text-[#e0b97c] transition-colors duration-300 group-hover:text-[#fcd7a0]">
                      {service.name}
                    </h3>
                    <p className="cormorant-garamond text-lg leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="flex items-center text-white/60">
                      <svg className="mr-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                    <span className="font-semibold text-[#e0b97c]">
                      {service.price}
                    </span>
                  </div>

                  {/* Book Now Button */}
                  <motion.button
                    className="w-full rounded-lg bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0] px-6 py-3 font-semibold text-black transition-all duration-300 hover:from-[#fcd7a0] hover:to-[#e0b97c]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Consultation
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e0b97c]/5 to-[#fcd7a0]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/80 to-black/80 p-8 backdrop-blur-sm md:p-12">
            <h2 className="cinzel-decorative-bold mb-4 text-3xl font-bold text-[#e0b97c] md:text-4xl">
              Ready to Begin Your Transformation?
            </h2>
            <p className="cormorant-garamond mb-8 text-xl leading-relaxed text-white/80">
              Schedule a personalized consultation with our expert team to discuss 
              your aesthetic goals and create a custom treatment plan.
            </p>
            <motion.button
              className="cormorant-garamond inline-flex items-center rounded-lg bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0] px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:from-[#fcd7a0] hover:to-[#e0b97c]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
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