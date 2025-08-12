"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Navbar } from '@/components/ui/navigation';

const contactInfo = [
  {
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    details: ["(555) 123-AURA", "(555) 123-2872"],
    description: "Call us for appointments & consultations"
  },
  {
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    details: ["hello@aura-aesthetics.com", "appointments@aura-aesthetics.com"],
    description: "Email us anytime for questions"
  },
  {
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Address",
    details: ["123 Beauty Boulevard", "Suite 456, Luxury District", "Beverly Hills, CA 90210"],
    description: "Visit our luxurious clinic"
  },
  {
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM", "Sunday: Closed"],
    description: "We're here when you need us"
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

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
            Get In Touch
          </h1>
          <p className="cormorant-garamond mx-auto max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
            Ready to begin your aesthetic journey? We'd love to hear from you. 
            Contact us today to schedule your personalized consultation.
          </p>
        </div>
      </motion.section>

      {/* Contact Info Grid */}
      <motion.section 
        className="px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/50 to-black/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#e0b97c]/40"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0]">
                  <div className="text-black">
                    {info.icon}
                  </div>
                </div>
                <h3 className="cinzel-decorative-bold mb-3 text-xl font-bold text-[#e0b97c]">
                  {info.title}
                </h3>
                <div className="mb-3 space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="cormorant-garamond text-white/80">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-white/60">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Map Section */}
      <motion.section 
        className="px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 backdrop-blur-sm">
              <h2 className="cinzel-decorative-bold mb-6 text-3xl font-bold text-[#e0b97c]">
                Schedule Your Consultation
              </h2>
              <p className="cormorant-garamond mb-8 text-lg text-white/80">
                Fill out the form below and we'll get back to you within 24 hours to schedule your appointment.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-white/80">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition-colors duration-300 placeholder:text-white/50 focus:border-[#e0b97c] focus:ring-1 focus:ring-[#e0b97c]"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-white/80">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition-colors duration-300 placeholder:text-white/50 focus:border-[#e0b97c] focus:ring-1 focus:ring-[#e0b97c]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition-colors duration-300 placeholder:text-white/50 focus:border-[#e0b97c] focus:ring-1 focus:ring-[#e0b97c]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition-colors duration-300 placeholder:text-white/50 focus:border-[#e0b97c] focus:ring-1 focus:ring-[#e0b97c]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/80">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition-colors duration-300 focus:border-[#e0b97c] focus:ring-1 focus:ring-[#e0b97c]"
                  >
                    <option value="">Select a service</option>
                    <option value="botox">Botox & Dysport</option>
                    <option value="fillers">Dermal Fillers</option>
                    <option value="chemical-peels">Chemical Peels</option>
                    <option value="microneedling">Microneedling</option>
                    <option value="laser">Laser Treatments</option>
                    <option value="thread-lift">PDO Thread Lift</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition-colors duration-300 placeholder:text-white/50 focus:border-[#e0b97c] focus:ring-1 focus:ring-[#e0b97c]"
                    placeholder="Tell us about your aesthetic goals or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0] px-6 py-4 font-semibold text-black transition-all duration-300 hover:from-[#fcd7a0] hover:to-[#e0b97c] disabled:cursor-not-allowed disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="-ml-1 mr-3 size-5 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>

            {/* Map/Location */}
            <div className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 backdrop-blur-sm">
              <h2 className="cinzel-decorative-bold mb-6 text-3xl font-bold text-[#e0b97c]">
                Visit Our Clinic
              </h2>
              <p className="cormorant-garamond mb-8 text-lg text-white/80">
                Located in the heart of Beverly Hills, our state-of-the-art facility offers a luxurious 
                and comfortable environment for all your aesthetic needs.
              </p>
              
              {/* Map Placeholder */}
              <div className="mb-6 flex h-64 items-center justify-center rounded-lg border border-[#e0b97c]/30 bg-gradient-to-br from-[#e0b97c]/10 to-[#fcd7a0]/10">
                <div className="text-center">
                  <svg className="mx-auto mb-4 size-16 text-[#e0b97c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-white/80">Interactive Map Coming Soon</p>
                  <p className="text-sm text-white/60">123 Beauty Boulevard, Beverly Hills</p>
                </div>
              </div>

              {/* Directions & Parking */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="mt-1 size-5 shrink-0 text-[#e0b97c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">Directions</h4>
                    <p className="text-sm text-white/70">
                      Easily accessible from Sunset Boulevard and Rodeo Drive. 
                      Public transportation and ride-share friendly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="mt-1 size-5 shrink-0 text-[#e0b97c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">Parking</h4>
                    <p className="text-sm text-white/70">
                      Complimentary valet parking available. 
                      Self-parking options in adjacent structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-[#e0b97c]/20 bg-gradient-to-br from-gray-900/80 to-black/80 p-8 backdrop-blur-sm md:p-12">
            <h2 className="cinzel-decorative-bold mb-4 text-3xl font-bold text-[#e0b97c] md:text-4xl">
              Questions Before Your Visit?
            </h2>
            <p className="cormorant-garamond mb-8 text-xl leading-relaxed text-white/80">
              Our team is here to answer any questions you may have about our treatments, 
              procedures, or what to expect during your consultation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                className="cormorant-garamond inline-flex items-center rounded-lg bg-gradient-to-r from-[#e0b97c] to-[#fcd7a0] px-6 py-3 text-lg font-semibold text-black transition-all duration-300 hover:from-[#fcd7a0] hover:to-[#e0b97c]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now: (555) 123-AURA
              </motion.button>
              <motion.button
                className="cormorant-garamond inline-flex items-center rounded-lg border-2 border-[#e0b97c] px-6 py-3 text-lg font-semibold text-[#e0b97c] transition-all duration-300 hover:bg-[#e0b97c] hover:text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Us
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 