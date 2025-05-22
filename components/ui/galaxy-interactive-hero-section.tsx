"use client";

import Link from 'next/link';
import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { GradientText } from "@/components/ui/gradient-text";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion, Variants } from 'framer-motion';
const Spline = lazy(() => import('@splinetool/react-spline'));

// Animation variants for the entire page
const sectionContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased stagger for drama between major elements in a section
      delayChildren: 0.1,
    },
  },
};

const dramaticTitleWordVariants: Variants = {
  hidden: { y: "100%", opacity: 0, skewY: 7 }, // Increased skew and y offset
  visible: {
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 80, // Softer spring for a more grand reveal
      damping: 20,
      duration: 1.2, // Longer duration
    },
  },
};

const paragraphLineVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(3px)" }, // Added blur
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1.0], // More dramatic ease
    },
  },
};

const imageDramaticRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75, filter: "brightness(0.5) saturate(0.5)" }, // Start smaller, desaturated, darker
  visible: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1) saturate(1)",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 1.5, // Longer duration for a majestic feel
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 17,
    },
  },
};

const cardHoverEffect = {
  scale: 1.04,
  boxShadow: "0px 15px 35px -10px rgba(168, 85, 247, 0.4)", // More pronounced shadow
  transition: { type: 'spring', stiffness: 250, damping: 10 }
};

const blockquoteVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, rotateX: -30 }, // Added 3D rotation
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      duration: 1.0,
    },
  },
};

const simpleFadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ctaButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.2 },
  },
  hover: {
    scale: 1.08, // More dramatic hover scale
    boxShadow: "0px 8px 25px rgba(168, 85, 247, 0.3)", // Purple shadow
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
  tap: { scale: 0.92 }
};

// Helper Component for Animating Text (Headings/Paragraphs)
interface AnimatedTextProps {
  text: string; // Simple string text
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  variants: Variants;
  staggerAmount?: number;
  baseDelay?: number;
  splitter?: 'word' | 'line';
  highlightSpans?: React.ReactNode[]; // For pre-split text with styled spans
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Element = 'p',
  className,
  variants,
  staggerAmount = 0.05,
  baseDelay = 0,
  splitter = 'word',
  highlightSpans // If provided, text prop is ignored and this is used
}) => {
  const elementsToAnimate = highlightSpans 
    ? highlightSpans.map((span, i) => ({ id: i, content: span }))
    : (splitter === 'line' ? text.split('\n') : text.split(' ')).map((item, i) => ({ id: i, content: item }));

  const containerVariants: Variants = {
    hidden: { opacity: 1 }, // Parent doesn't fade, children do
    visible: {
      opacity: 1,
      transition: {
        delayChildren: baseDelay,
        staggerChildren: staggerAmount,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
      style={{ display: Element === 'span' ? 'inline-block' : 'block' }}
    >
      {elementsToAnimate.map((el, index) => (
        <span key={el.id} style={{ display: 'inline-block', overflow: 'hidden' }}> {/* For y: "100%" reveals */}
          <motion.span
            style={{ display: 'inline-block' }}
            variants={variants}
          >
            {el.content}
            {splitter === 'word' && !highlightSpans && index < elementsToAnimate.length - 1 ? '\u00A0' : ''}
          </motion.span>
          {splitter === 'line' && !highlightSpans && index < elementsToAnimate.length - 1 ? <br /> : ''}
        </span>
      ))}
    </motion.div>
  );
};

// Component for animating blocks of rich text (with existing spans)
interface AnimatedBlockProps {
  children: React.ReactNode;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  variants: Variants;
  delay?: number;
  whileHover?: any;
  whileTap?: any;
}

const AnimatedBlock: React.FC<AnimatedBlockProps> = ({
  children,
  el = 'div',
  className,
  variants,
  delay = 0,
  whileHover,
  whileTap
}) => {
  const Component = motion[el as keyof typeof motion] || motion.div;
  
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }} // Simplified transition with delay
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </Component>
  );
};

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
            opacity: 1, // Ensure full opacity
          }}
          scene="https://prod.spline.design/tl2Wh7lQInd1PrUW/scene.splinecode" 
        
          // Original - Keep as placeholder, recommend changing
        />
      </Suspense>
      {/* Overlay div removed to make Spline fully visible */}
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
  { variant?: "default" | "variant" | null; className?: string; children: React.ReactNode; [key: string]: any }
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
      {/* <motion.p
        className="lg:text-2xl pl-7 sm:text-xl md:text-xl max-w-3xl italic"
        variants={paragraphVariants}
      >
        EMBRACE {' '}
        <motion.span
          className="relative inline-block"
          variants={glowingSpanVariants}
          whileHover="hover"
        >
          <span 
            className="text-green-500 relative z-10"
            style={{
              textShadow: '0 0 15px rgba(0, 123, 200, 0.92), 0 0 25px rgba(0, 117, 200, 0.62)',
              filter: 'drop-shadow(0 0 5px rgba(0, 180, 200, 0.91))'
            }}
          >
          A PATH TO CONFIDENCE 
          </span>
        </motion.span>{' '}
        GUIDED BY OUR EXPERTISE
      </motion.p> */}

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
            SCHEDULE A CONSULTATION
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
  const [scrollY, setScrollY] = useState(0);
  const heroContentWrapperRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (heroContentWrapperRef.current) {
      requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;
        const maxScroll = 400; // Fade out over 400px
        const opacity = Math.max(0, 1 - scrollPosition / maxScroll); // Ensure opacity doesn't go below 0
        const scale = Math.max(0.9, 1 - (scrollPosition / maxScroll) * 0.1); // Subtle scale down
        
        heroContentWrapperRef.current.style.opacity = opacity.toString();
        heroContentWrapperRef.current.style.transform = `scale(${scale})`;
        // Prevent interaction when faded
        heroContentWrapperRef.current.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
      });
    }
  }

  useEffect(() => {
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
    <div className="relative bg-black"> {/* Ensure base background for areas not covered */}
      <Navbar />
      {/* Hero Area */}
      <div className="relative min-h-screen overflow-hidden"> {/* Overflow hidden for dramatic effects */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentWrapperRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10,
          // pointerEvents handled by JS now
        }}>
          <div className="container mx-auto">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white text-xl">Loading Aura Experience...</div>}>
              <HeroContent />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="bg-black relative z-10 text-white py-16 md:py-24" style={{ marginTop: '-10vh' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28"> {/* Increased spacing */}
          {/* --- THE AURA DIFFERENCE --- */}
          <motion.section
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center" // Increased gap
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                THE <span className="text-purple-400">AURA</span> DIFFERENCE
              </AnimatedBlock>

              <AnimatedText
                text="At Aura Aesthetics, we blend artistry with medical science to deliver transformative results. For over 15 years, we've been at the forefront of luxury aesthetic care, offering personalized treatments that enhance your natural beauty and boost your confidence. We believe in 'Your Radiance, Our Passion' – empowering you through meticulous care and state-of-the-art techniques."
                el="p"
                className="text-lg lg:text-xl opacity-80 mb-8" // Slightly larger text
                variants={paragraphLineVariants}
                staggerAmount={0.04} // Faster stagger for paragraph lines
                splitter="line"
              />
              <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
                <Link href="#" legacyBehavior>
                  <a className="text-purple-400 hover:text-purple-300 font-semibold text-lg inline-block transform hover:translate-x-1 transition-transform duration-200">
                    Discover Our Philosophy →
                  </a>
                </Link>
              </AnimatedBlock>
            </div>
            <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
              <img src="/placeholder/clinic-reception-luxury.jpg" alt="Luxurious reception area of Aura Aesthetics clinic" className="rounded-lg shadow-2xl mx-auto w-full max-w-md" />
            </AnimatedBlock>
          </motion.section>
          <AnimatedBlock el="blockquote" variants={blockquoteVariants} className="md:col-span-2 text-center text-xl sm:text-2xl lg:text-3xl italic opacity-90 py-10 border-t border-b border-gray-700">
            <p>"Where science meets artistry,</p>
            <p>and confidence is beautifully sculpted."</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– The Aura Aesthetics Philosophy</cite>
          </AnimatedBlock>

          {/* --- OUR SIGNATURE TREATMENTS --- */}
          <motion.section
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="text-center mb-16"> {/* Increased margin */}
              <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                OUR SIGNATURE TREATMENTS
              </AnimatedBlock>
              <AnimatedText
                text="Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique, meticulously planned from initial consultation through to aftercare, ensuring exceptional results."
                el="p"
                className="text-lg lg:text-xl opacity-80 max-w-3xl mx-auto"
                variants={paragraphLineVariants}
                staggerAmount={0.03}
                splitter="line"
              />
              <AnimatedBlock variants={imageDramaticRevealVariants} delay={0.2} className="mx-auto mt-10 w-full max-w-lg">
                <img src="/placeholder/treatment-collage.jpg" alt="Collage showcasing various aesthetic treatments and results" className="rounded-lg shadow-2xl" />
              </AnimatedBlock>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" // Increased gap
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }} // Stagger cards
            >
              {cardData.map((card, index) => (
                <AnimatedBlock
                  key={card.title + index} // Ensure key is unique if titles can repeat
                  el="div"
                  variants={cardVariants}
                  className="bg-gray-800/60 p-6 rounded-xl shadow-xl border border-gray-700/50 flex flex-col hover:border-purple-500/70 transition-colors duration-300" // Added hover border
                  whileHover={cardHoverEffect}
                >
                  <img src={card.image} alt={card.alt} className="w-full h-52 object-cover rounded-md mb-5"/>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3">{card.title}</h3>
                  <Link href="#" legacyBehavior>
                    <a className="mt-auto text-purple-400 hover:text-purple-200 font-semibold self-start text-md group">
                      {card.linkText} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                  </Link>
                </AnimatedBlock>
              ))}
            </motion.div>
          </motion.section>
          <AnimatedBlock el="blockquote" variants={blockquoteVariants} className="text-center text-2xl sm:text-3xl lg:text-4xl italic opacity-90 py-12 border-t border-b border-gray-700">
            <p>"Revealing your <span className="text-pink-400 font-semibold">Inner Radiance</span>, Sculpting <span className="text-teal-400 font-semibold">Timeless Elegance</span>."</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– The Aura Aesthetics Team</cite>
          </AnimatedBlock>

          {/* --- REFINED NATURALISM --- */}
          <motion.section
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                THE AURA LOOK: <span className="text-pink-400 italic">REFINED NATURALISM</span>
              </AnimatedBlock>
              <AnimatedText
                text="We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself."
                el="p"
                className="text-lg lg:text-xl opacity-80 mb-8"
                variants={paragraphLineVariants} 
                splitter="line" 
                staggerAmount={0.03}
              />
              <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
                <Link href="#" legacyBehavior>
                  <a className="text-pink-400 hover:text-pink-300 font-semibold text-lg inline-block transform hover:translate-x-1 transition-transform duration-200">
                    Explore Our Aesthetic Philosophy →
                  </a>
                </Link>
              </AnimatedBlock>
            </div>
            <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
              <img src="/placeholder/natural-enhancement-result.jpg" alt="Client showcasing natural-looking aesthetic results" className="rounded-lg shadow-2xl mx-auto w-full max-w-md"/>
            </AnimatedBlock>
          </motion.section>

          {/* --- AESTHETIC INNOVATION --- */}
          <motion.section
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center md:order-2">
              <img src="/placeholder/advanced-clinic-tech.jpg" alt="State-of-the-art aesthetic technology in a clinic setting" className="rounded-lg shadow-2xl mx-auto w-full max-w-md"/>
            </AnimatedBlock>
            <div className="md:order-1">
              <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                MASTERS OF <span className="text-teal-400 italic">AESTHETIC INNOVATION</span>
              </AnimatedBlock>
              <AnimatedText
                text="We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction."
                el="p"
                className="text-lg lg:text-xl opacity-80 mb-8"
                variants={paragraphLineVariants} 
                splitter="line" 
                staggerAmount={0.03}
              />
              <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
                <Link href="#" legacyBehavior>
                  <a className="text-teal-400 hover:text-teal-300 font-semibold text-lg inline-block transform hover:translate-x-1 transition-transform duration-200">
                    Discover Our Technologies →
                  </a>
                </Link>
              </AnimatedBlock>
            </div>
          </motion.section>

          {/* --- PERSONALISED JOURNEYS --- */}
          <motion.section
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                PERSONALISED <span className="text-orange-400 italic">TREATMENT JOURNEYS</span>
              </AnimatedBlock>
              <AnimatedText
                text="Beyond individual treatments, we focus on holistic, personalized journeys. Our expert consultations lead to bespoke plans addressing your unique concerns and goals, ensuring comprehensive care and results that not only look exceptional but also promote long-term skin health and well-being."
                el="p"
                className="text-lg lg:text-xl opacity-80 mb-8"
                variants={paragraphLineVariants} 
                splitter="line" 
                staggerAmount={0.03}
              />
              <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
                <Link href="#" legacyBehavior>
                  <a className="text-orange-400 hover:text-orange-300 font-semibold text-lg inline-block transform hover:translate-x-1 transition-transform duration-200">
                    Explore Our Approach →
                  </a>
                </Link>
              </AnimatedBlock>
            </div>
            <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
              <img src="/placeholder/client-consultation.jpg" alt="Doctor consulting with a client in a luxury clinic" className="rounded-lg shadow-2xl mx-auto w-full max-w-md"/>
            </AnimatedBlock>
          </motion.section>
          
          {/* --- TESTIMONIAL BLOCKQUOTE --- */}
          <AnimatedBlock el="blockquote" variants={blockquoteVariants} className="text-center text-xl sm:text-2xl lg:text-3xl italic opacity-90 py-10 border-t border-b border-gray-700 max-w-3xl mx-auto">
            <p>"The team at Aura Aesthetics made me feel so comfortable and understood my vision perfectly. I feel more confident and radiant than ever before!"</p>
            <cite className="block mt-4 not-italic text-base opacity-70">– A Delighted Aura Client</cite>
          </AnimatedBlock>

          {/* --- CLIENT TRANSFORMATIONS CTA --- */}
          <motion.section
            className="text-center"
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              CLIENT TRANSFORMATIONS & TESTIMONIALS
            </AnimatedBlock>
            <AnimatedText
              text="Hear from our valued clients and witness the beautiful transformations achieved at Aura Aesthetics."
              el="p" 
              className="text-lg lg:text-xl opacity-80 mb-10" // Increased margin
              variants={paragraphLineVariants} 
              splitter="line" 
              staggerAmount={0.03}
            />
            <motion.div variants={ctaButtonVariants} whileHover="hover" whileTap="tap">
              <Link href="#" legacyBehavior>
                <a className="bg-purple-600 hover:bg-purple-500 text-white text-lg font-medium py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-purple-500/50">
                  View Gallery & Testimonials
                </a>
              </Link>
            </motion.div>
          </motion.section>

          {/* --- AWARDS/EXPERTISE --- */}
          <motion.section
            className="text-center pt-16 border-t border-gray-700" // Increased padding
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10 md:space-x-16"> {/* Increased spacing */}
              {["AWARD-WINNING TREATMENTS", "BOARD-CERTIFIED EXPERTS", "PREMIUM BRAND PARTNERS"].map((text, i) => (
                <AnimatedBlock key={text} el="h3" variants={simpleFadeInUp} delay={i * 0.15} className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wider opacity-80">
                  {text}
                </AnimatedBlock>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};