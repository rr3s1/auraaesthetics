"use client";

import Link from 'next/link';
import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { GradientText } from "@/components/ui/gradient-text";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion, Variants } from 'framer-motion';
const Spline = lazy(() => import('@splinetool/react-spline'));

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Suspense fallback={<div className="w-full h-full flex items-center opacity-10 pointer-event-none justify-center bg-black text-white">Loading 3D Scene...</div>}>
        {/* TODO: Replace this Spline scene with one more fitting for a luxury beauty clinic.
            Consider themes of elegance, abstract beauty, flowing forms, or subtle medical aesthetics.
            Example ideas: flowing silk, shimmering particles, abstract cellular structures, serene water ripples.
        */}
        <Spline
          style={{
            width: '100%',
            height: '100vh',
            pointerEvents: 'none',
          }}
          scene="https://prod.spline.design/u9NDfui5LD1sOMit/scene.splinecode" 
        
          // Original - Keep as placeholder, recommend changing
        />
      </Suspense>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent 25%, transparent 75%, rgba(0, 0, 0, 0.4)),
            linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.5))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

// Animation variants for the HeroContent component
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const titleWrapperVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const titleCharVariants: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
  hover: {
    y: -3,
    transition: { duration: 0.2 }
  }
};

const paragraphVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

const glowingSpanVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(4px) brightness(0.7)', scale: 0.85 },
  visible: {
    opacity: 1,
    filter: 'blur(0px) brightness(1)',
    scale: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 120,
      damping: 10,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    filter: 'blur(0px) brightness(1.15)',
    transition: { duration: 0.2, type: 'spring', stiffness: 300 },
  },
};

const buttonWrapperVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 12, duration: 0.6 },
  },
};

// Motion-compatible GradientButton
const MotionGradientButton = motion(React.forwardRef<
  HTMLButtonElement, 
  { variant?: string; className?: string; children: React.ReactNode; [key: string]: any }
>(({ variant, className, children, ...props }, ref) => (
  <GradientButton
    ref={ref as any}
    variant={variant}
    className={className}
    {...props}
  >
    {children}
  </GradientButton>
)));
MotionGradientButton.displayName = 'MotionGradientButton';

function HeroContent() {
  const titleText = "AURA AESTHETICS";
  const titleCharacters = Array.from(titleText);

  return (
    <motion.div
      className="text-left mb-16 text-white px-4 min-h-[70vh] flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title */}
      <motion.h1
        className="text-3xl opacity-100 sm:text-5xl md:text-6xl lg:text-9xl font-bold leading-tight tracking-wide"
        variants={titleWrapperVariants}
        aria-label={titleText}
      >
        <GradientText className="text-white pl-10 font-racing-sans-one">
          {titleCharacters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={titleCharVariants}
              whileHover="hover"
              style={{ display: 'inline-block' }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </GradientText>
      </motion.h1>

      {/* First Paragraph */}
      <motion.p
        className="lg:text-3xl pl-8 pt-10 sm:text-xl md:text-2xl font-bold uppercase italic"
        variants={paragraphVariants}
      >
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="text-orange-400 relative z-10"
            style={{
              textShadow: '0 0 15px rgba(255, 120, 0, 0.7), 0 0 25px rgba(255, 120, 0, 0.5)',
              filter: 'drop-shadow(0 0 5px rgba(255, 120, 0, 0.8))'
            }}
          >
            Pioneers
          </span>
        </motion.span> in{' '}
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="text-purple-400 relative z-10"
            style={{
              textShadow: '0 0 15px rgba(168, 85, 247, 0.7), 0 0 25px rgba(168, 85, 247, 0.5)',
              filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.8))'
            }}
          >
            advanced aesthetic
          </span>
        </motion.span>{' '}
        treatment
      </motion.p>

      {/* Second Paragraph */}
      <motion.p
        className="lg:text-3xl pl-7 sm:text-xl md:text-2xl max-w-3xl italic"
        variants={paragraphVariants}
      >
        The {' '}
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="text-green-500 relative z-10"
            style={{
              textShadow: '0 0 15px rgba(0, 200, 100, 0.7), 0 0 25px rgba(0, 200, 100, 0.5)',
              filter: 'drop-shadow(0 0 5px rgba(0, 200, 100, 0.8))'
            }}
          >
          path to confidence
          </span>
        </motion.span>{' '}
        guided by our expertise
      </motion.p>

      {/* CTA Button Wrapper */}
      <motion.div
        className="mt-12 pl-5"
        style={{ pointerEvents: 'auto' }}
        variants={buttonWrapperVariants}
      >
        <Link href="/register" passHref legacyBehavior>
          <MotionGradientButton
            variant="variant"
            className="text-xl md:text-2xl py-5 px-10 min-w-[240px] font-merienda"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)" 
            }}
            whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            REGISTER & BOOK
          </MotionGradientButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Services', 'Gallery', 'About'];

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (itemName: string, extraClasses = '') =>
    `text-base md:text-lg lg:text-xl font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
      hoveredNavItem === itemName
        ? 'bg-gray-700/50 text-white'
        : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
    } ${extraClasses}`;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/30 no-scrollbar backdrop-blur-md" style={{pointerEvents: 'auto'}}>
      <div className="container mx-auto px-4 sm:px-6 no-scrollbar lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <GradientText className="text-white pl-2 text-xl md:text-2xl lg:text-3xl font-black tracking-wide font-racing-sans-one">
                AURA
              </GradientText>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={navLinkClass(item)}
                onMouseEnter={() => handleMouseEnterNavItem(item)}
                onMouseLeave={handleMouseLeaveNavItem}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {/* <Link href="/register">
              <GradientButton className="text-xs md:text-lg font-medium scale-70 transform">
                Register
              </GradientButton>
            </Link> */}
            <Link href="/admin">
              <GradientButton className="text-xs md:text-lg font-medium scale-70 transform">
                Admin
              </GradientButton>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden fixed inset-x-0 top-16 bg-gray-900/95 backdrop-blur-lg p-4 space-y-2 transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-4rem)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`/${item.toLowerCase()}`} 
            className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" 
            onClick={toggleMobileMenu}
          >
            {item}
          </a>
        ))}
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Book Now</a>
        <a href="#" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Contact Us</a>
        <a href="/client-portal" className="block text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Client Portal</a>
         <button className="w-full mt-2 gradient-button text-white text-sm font-medium py-2.5 px-4 rounded-md" onClick={toggleMobileMenu}>
            Book Appointment
        </button>
      </div>
    </nav>
  );
}


export const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardData = [
    { title: "Advanced Dermal Fillers", image: "/placeholder/dermal-fillers.jpg", alt: "Client receiving dermal filler treatment", linkText: "DISCOVER SMOOTHING" },
    { title: "Laser Skin Rejuvenation", image: "/placeholder/laser-rejuvenation.jpg", alt: "Advanced laser skin treatment", linkText: "EXPLORE RADIANCE" },
    { title: "Non-Invasive Body Sculpting", image: "/placeholder/body-sculpting.jpg", alt: "Client undergoing body sculpting treatment", linkText: "VIEW CONTOURING" },
    { title: "Luxury Bespoke Facials", image: "/placeholder/luxury-facial.jpg", alt: "Relaxing luxury facial treatment", linkText: "EXPERIENCE PAMPERING" },
    { title: "Medical-Grade Skincare", image: "/placeholder/medical-skincare.jpg", alt: "Display of premium medical-grade skincare products", linkText: "LEARN MORE" },
    { title: "Hair Restoration Therapies", image: "/placeholder/hair-restoration.jpg", alt: "Advanced hair restoration procedure", linkText: "BROWSE SOLUTIONS" },
  ];

  return (
    <div className="relative">
      <Navbar />
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <div className="container mx-auto">
           <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading Content...</div>}>
            <HeroContent />
           </Suspense>
          </div>
        </div>
      </div>

      <div className="bg-black relative z-10 text-white py-16 md:py-24" style={{ marginTop: '-10vh' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">THE <span className="text-purple-400">AURA</span> DIFFERENCE</h2>
              <p className="text-lg opacity-80 mb-6">
                At Aura Aesthetics, we blend artistry with medical science to deliver transformative results. For over 15 years, we've been at the forefront of luxury aesthetic care, offering personalized treatments that enhance your natural beauty and boost your confidence. We believe in 'Your Radiance, Our Passion' – empowering you through meticulous care and state-of-the-art techniques.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">Discover Our Philosophy →</a>
            </div>
            <div className="text-center">
              <img src="/placeholder/clinic-reception-luxury.jpg" alt="Luxurious reception area of Aura Aesthetics clinic" className="rounded-lg shadow-xl mx-auto w-full max-w-md" />
            </div>
            <blockquote className="md:col-span-2 text-center text-xl sm:text-2xl italic opacity-90 py-8 border-t border-b border-gray-700">
              <p>"Where science meets artistry,</p>
              <p>and confidence is beautifully sculpted."</p>
              <cite className="block mt-4 not-italic text-base opacity-70">– The Aura Aesthetics Philosophy</cite>
            </blockquote>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">OUR SIGNATURE TREATMENTS</h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique, meticulously planned from initial consultation through to aftercare, ensuring exceptional results.
              </p>
              <img src="/placeholder/treatment-collage.jpg" alt="Collage showcasing various aesthetic treatments and results" className="rounded-lg shadow-xl mx-auto mt-8 w-full max-w-lg" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cardData.map((card, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700/50 flex flex-col">
                  <img src={card.image} alt={card.alt} className="w-full h-48 object-cover rounded-md mb-4"/>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <a href="#" className="mt-auto text-purple-400 hover:text-purple-300 font-semibold self-start">{card.linkText} →</a>
                </div>
              ))}
            </div>
          </section>

          <blockquote className="text-center text-2xl sm:text-3xl italic opacity-90 py-10 border-t border-b border-gray-700">
            <p>"Revealing your <span className="text-pink-400 font-semibold">Inner Radiance</span>, Sculpting <span className="text-teal-400 font-semibold">Timeless Elegance</span>."</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– The Aura Aesthetics Team</cite>
          </blockquote>

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-400">THE AURA LOOK: <span className="italic">REFINED NATURALISM</span></h2>
              <p className="text-lg opacity-80 mb-6">
                We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself.
              </p>
              <a href="#" className="text-pink-400 hover:text-pink-300 font-semibold">Explore Our Aesthetic Philosophy →</a>
            </div>
            <div className="text-center">
              <img src="/placeholder/natural-enhancement-result.jpg" alt="Client showcasing natural-looking aesthetic results" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="text-center md:order-2">
              <img src="/placeholder/advanced-clinic-tech.jpg" alt="State-of-the-art aesthetic technology in a clinic setting" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-teal-400">MASTERS OF <span className="italic">AESTHETIC INNOVATION</span></h2>
              <p className="text-lg opacity-80 mb-6">
                We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction.
              </p>
              <a href="#" className="text-teal-400 hover:text-teal-300 font-semibold">Discover Our Technologies →</a>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-400">PERSONALISED <span className="italic">TREATMENT JOURNEYS</span></h2>
              <p className="text-lg opacity-80 mb-6">
                Beyond individual treatments, we focus on holistic, personalized journeys. Our expert consultations lead to bespoke plans addressing your unique concerns and goals, ensuring comprehensive care and results that not only look exceptional but also promote long-term skin health and well-being.
              </p>
              <a href="#" className="text-orange-400 hover:text-orange-300 font-semibold">Explore Our Approach →</a>
            </div>
            <div className="text-center">
                 <img src="/placeholder/client-consultation.jpg" alt="Doctor consulting with a client in a luxury clinic" className="rounded-lg shadow-xl mx-auto w-full max-w-md"/>
            </div>
          </section>
          
          <blockquote className="text-center text-xl sm:text-2xl italic opacity-90 py-10 border-t border-b border-gray-700 max-w-3xl mx-auto">
            <p>"The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly. I feel more confident and radiant than ever before!"</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– A Delighted Aura Client</cite>
          </blockquote>

          <section className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">CLIENT TRANSFORMATIONS & TESTIMONIALS</h2>
            <p className="text-lg opacity-80 mb-4">Hear from our valued clients and witness the beautiful transformations achieved at Aura Aesthetics.</p>
            <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium py-3 px-8 rounded-md transition-colors duration-200">
              View Gallery & Testimonials
            </a>
          </section>

          <section className="text-center pt-12 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12">
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">AWARD-WINNING TREATMENTS</h3>
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">BOARD-CERTIFIED EXPERTS</h3>
              <h3 className="text-lg sm:text-xl font-semibold tracking-wider opacity-80">PREMIUM BRAND PARTNERS</h3>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};