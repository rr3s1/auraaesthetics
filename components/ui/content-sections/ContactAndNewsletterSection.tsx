"use client";

import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdChevronRight } from 'react-icons/md';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Added LinkedIn
import { motion } from 'framer-motion';

import { AnimatedBlock, AnimatedText } from '../animations/animated-components'; // Ensure path is correct
import {
  sectionContainerVariants,
  simpleFadeInUp,
  simpleFadeInLeft,
  simpleFadeInRight,
  paragraphLineVariants // Assuming you have this
} from '../animations/animation-variants'; // Ensure path is correct
import { MotionGradientButton } from '../animations/animated-components'; // Assuming your MotionGradientButton
import { PremiumTestimonialCard } from './PremiumTestimonialCard';

const ContactAndNewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate API call
    console.log('Subscription email:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
        setSubscribed(false);
        setError('');
    }, 5000);
  };

  const contactItems = [
    {
      icon: <MdEmail size={28} className="text-accent-yellow-dark group-hover:text-accent-orange transition-colors duration-300" />,
      title: 'Email Our Concierge',
      value: 'concierge@aura-aesthetics.com',
      detail: 'Expect a reply within one business day.',
      href: 'mailto:concierge@aura-aesthetics.com',
      ariaLabel: 'Email the Aura Aesthetics Concierge team'
    },
    {
      icon: <MdPhone size={28} className="text-accent-orange group-hover:text-accent-red transition-colors duration-300" />,
      title: 'Speak With An Expert',
      value: '+1 (555) AURA-GLOW',
      detail: 'Mon-Fri: 9 AM - 7 PM, Sat: 10 AM - 5 PM (EST)',
      href: 'tel:+15552872456',
      ariaLabel: 'Call Aura Aesthetics experts'
    },
    {
      icon: <MdLocationOn size={28} className="text-accent-red group-hover:text-accent-yellow-dark transition-colors duration-300" />,
      title: 'Visit Our Flagship Sanctuary',
      value: `123 Radiance Boulevard, Penthouse Suite\nElysian City, CA 90210`,
      detail: 'Valet parking available. By appointment.',
      href: 'https://maps.google.com/?q=123+Radiance+Boulevard,Elysian+City,CA+90210',
      ariaLabel: 'Get directions to the Aura Aesthetics flagship location'
    },
  ];

  const newsletterBenefits = [
    { text: "Personalized skincare & treatment insights based on your profile.", iconColor: "bg-accent-yellow-dark" },
    { text: "Priority access to new service launches & limited-time offers.", iconColor: "bg-accent-orange" },
    { text: "Exclusive invitations to Aura Wellness events & workshops.", iconColor: "bg-accent-red" },
    { text: "Curated wellness tips from our leading aesthetic experts.", iconColor: "bg-accent-yellow" },
  ];

  const socialLinks = [
    { href: "https://instagram.com/auraaesthetics", icon: <FaInstagram size={22} />, label: "Instagram" },
    { href: "https://facebook.com/auraaesthetics", icon: <FaFacebookF size={22} />, label: "Facebook" },
    { href: "https://twitter.com/auraaesthetics", icon: <FaTwitter size={22} />, label: "Twitter" },
    { href: "https://linkedin.com/company/auraaesthetics", icon: <FaLinkedinIn size={22} />, label: "LinkedIn" },
  ];


  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-site-bg via-content-bg/70 to-site-bg py-24 md:py-32"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }} // Trigger animation sooner
    >
     
      {/* Ignited Radiance Background Glows */}
      <div className="absolute inset-0 z-0 opacity-30 md:opacity-40">
        <div className="absolute -left-1/3 -top-1/4 h-3/4 w-3/4 rounded-full bg-gradient-radial from-accent-yellow-dark/25 via-accent-orange/10 to-transparent filter blur-[120px]" />
        <div className="absolute -right-1/3 -bottom-1/4 h-3/4 w-3/4 rounded-full bg-gradient-radial from-accent-red/20 via-accent-red-deep/10 to-transparent filter blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 no-scrollbar">
        <AnimatedBlock el="div" variants={simpleFadeInUp} className="mb-16 md:mb-20 text-center">
          <h2 className="cinzel-decorative-bold mb-4 text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-transparent">
              Connect With Aura
            </span>
          </h2>
          <p className="cormorant-garamond mx-auto max-w-2xl text-xl text-text-primary/90 md:text-2xl leading-relaxed">
            We're dedicated to guiding you on your transformative journey to radiant beauty and enduring confidence. Reach out today.
          </p>
        </AnimatedBlock>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          {/* Contact Information Column */}
          <AnimatedBlock el="div" variants={simpleFadeInLeft} delay={0.1} className="space-y-10">
            <h3 className="cormorant-garamond text-3xl font-semibold text-text-primary md:text-4xl">
              Reach Out To Us
            </h3>
            <div className="space-y-6">
              {contactItems.map(({ icon, title, value, detail, href, ariaLabel }, idx) => (
                <motion.div
                  key={idx}
                  variants={simpleFadeInUp} // Individual fade-in for cards
                  custom={idx} // For potential stagger if simpleFadeInUp uses it
                  className="group flex items-start space-x-4 rounded-xl border border-accent-yellow-dark/20 bg-site-bg/70 p-5 shadow-lg transition-all duration-300 hover:border-accent-orange/40 hover:bg-content-bg/50 hover:shadow-xl hover:scale-[1.02] backdrop-blur-sm"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-yellow-dark/10 via-accent-orange/10 to-accent-red/10 ring-1 ring-accent-yellow-dark/30 transition-all duration-300 group-hover:ring-accent-orange/50 group-hover:scale-110">
                    {icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="cormorant-garamond mb-1 text-xl font-semibold text-text-primary">{title}</h4>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? "_blank" : undefined}
                        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                        aria-label={ariaLabel}
                        className="cormorant-garamond block text-lg text-text-primary/90 transition-colors hover:text-accent-orange break-words"
                      >
                        {value.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < value.split('\n').length -1 && <br/>}</React.Fragment>)}
                      </a>
                    ) : (
                      <p className="cormorant-garamond text-lg text-text-primary/90 break-words">
                         {value.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < value.split('\n').length -1 && <br/>}</React.Fragment>)}
                      </p>
                    )}
                    <p className="cormorant-garamond mt-1 text-sm text-text-primary/70">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hours of Operation */}
            <AnimatedBlock variants={simpleFadeInUp} className="mt-10 rounded-xl border border-accent-yellow-dark/20 bg-site-bg/70 p-6 shadow-lg backdrop-blur-sm">
              <h4 className="cormorant-garamond mb-4 text-2xl font-semibold text-text-primary">Clinic Hours</h4>
              <div className="grid grid-cols-1 gap-3 text-lg cormorant-garamond sm:grid-cols-2">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Closed for Rejuvenation" },
                  { day: "Public Holidays", hours: "Special Hours / By Appointment" }
                ].map(item => (
                  <div key={item.day}>
                    <p className="font-medium text-text-primary">{item.day}</p>
                    <p className="text-md text-text-primary/80">{item.hours}</p>
                  </div>
                ))}
              </div>
            </AnimatedBlock>
          </AnimatedBlock>

          {/* Newsletter & Socials Column */}
          <AnimatedBlock el="div" variants={simpleFadeInRight} delay={0.2} className="rounded-2xl border border-accent-yellow-dark/30 bg-gradient-to-br from-content-bg/70 via-site-bg/80 to-content-bg/70 p-8 shadow-xl backdrop-blur-md lg:p-10 flex flex-col">
            <div> {/* Content Group for Newsletter */}
              <h3 className="cormorant-garamond mb-3 text-3xl font-semibold text-text-primary md:text-4xl">
                Join Our Wellness Journey
              </h3>
              <AnimatedText
                el="p"
                text="Subscribe to the Aura Insider for exclusive beauty insights, early access to new treatments, special member offers, and transformative wellness tips tailored to your unique radiance journey."
                className="cormorant-garamond mb-6 text-lg leading-relaxed text-text-primary/90 md:text-xl"
                variants={paragraphLineVariants} splitter="line" staggerAmount={0.01}
              />
              <ul className="mb-8 space-y-3">
                {newsletterBenefits.map((benefit, idx) => (
                  <motion.li key={idx} variants={simpleFadeInUp} custom={idx} className="flex items-center space-x-3">
                    <span className={`flex size-5 shrink-0 items-center justify-center rounded-full ${benefit.iconColor}`}>
                      <MdChevronRight size={18} className="text-site-bg"/>
                    </span>
                    <span className="cormorant-garamond text-md text-text-primary/85">{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
              <form onSubmit={handleSubscribe} className="mt-8 space-y-4">
                <div className="relative">
                  <label htmlFor="newsletter-email-contact" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email-contact"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="cormorant-garamond w-full rounded-lg border border-accent-yellow-dark/40 bg-site-bg/90 px-5 py-3.5 pr-14 text-lg text-text-primary placeholder-text-primary/60 transition-all focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/50"
                    required
                    aria-describedby={error ? "email-error" : undefined}
                  />
                  <button
                    type="submit"
                    className="group/btn absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-md bg-gradient-to-r from-accent-orange to-accent-red p-2.5 text-site-bg shadow-md transition-all hover:from-accent-red hover:to-accent-red-deep hover:shadow-lg"
                    aria-label="Subscribe to newsletter"
                  >
                    <MdSend size={22} className="transition-transform duration-300 group-hover/btn:scale-110" />
                  </button>
                </div>
                {error && <p id="email-error" className="text-sm text-red-600" role="alert">{error}</p>}
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-md font-medium text-accent-yellow-dark"
                  >
                    Thank you for subscribing! Welcome to the Aura community.
                  </motion.p>
                )}
              </form>
              <div className="mt-6 rounded-lg border border-accent-yellow-dark/20 bg-site-bg/50 p-4">
                <p className="cormorant-garamond flex flex-wrap items-center justify-between text-sm text-text-primary/70">
                  <span>Already an Aura Insider?</span>
                  <a href="/newsletter/preferences" className="group/pref inline-flex items-center font-medium text-accent-orange transition-colors hover:text-accent-red">
                    Manage Preferences
                    <MdChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover/pref:translate-x-0.5" />
                  </a>
                </p>
              </div>
            </div>
            
            {/* Social Links - Pushed to bottom if newsletter section grows */}
            <div className="mt-auto pt-10"> {/* Pushes social to bottom */}
              <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
                <h4 className="cormorant-garamond mb-4 text-2xl font-semibold text-text-primary md:text-3xl text-center lg:text-left">
                  Follow Our Journey
                </h4>
                <p className="cormorant-garamond mb-6 text-lg text-text-primary/80 text-center lg:text-left">
                  Connect for daily inspiration, behind-the-scenes glimpses, and community engagement.
                </p>
                <div className="flex justify-center space-x-6 lg:justify-start">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Aura Aesthetics on ${social.label}`}
                      className="text-text-primary/70 transition-colors duration-300 hover:text-accent-orange"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </AnimatedBlock>
            </div>
          </AnimatedBlock>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactAndNewsletterSection;