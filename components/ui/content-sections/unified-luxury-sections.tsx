"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { AnimatedBlock, AnimatedText } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  simpleFadeInLeft,
  simpleFadeInRight,
  paragraphLineVariants, 
  imageDramaticRevealVariants 
} from '../animations/animation-variants';

interface LuxurySectionProps {
  id?: string; // For internal linking
  overline?: string; // Optional overline text
  title: string;
  titleHighlight: string;
  description: React.ReactNode; // Allow for richer description (e.g., with bullet points)
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  accentGradient: 'yellowToOrange' | 'orangeToRed' | 'yellowToRed'; // For titleHighlight gradient
  reverse?: boolean;
  additionalPoints?: { icon?: React.ReactNode; text: string }[]; // For bullet points
}

function LuxurySection({ 
  id,
  overline,
  title, 
  titleHighlight, 
  description, 
  ctaText, 
  ctaLink, 
  imageSrc, 
  imageAlt, 
  accentGradient, 
  reverse = false,
  additionalPoints
}: LuxurySectionProps) {
  const gradientClasses = {
    yellowToOrange: 'from-accent-yellow-dark via-accent-orange to-accent-orange',
    orangeToRed: 'from-accent-orange via-accent-red to-accent-red',
    yellowToRed: 'from-accent-yellow-dark via-accent-orange to-accent-red-deep',
  };

  const textAnimation = reverse ? simpleFadeInLeft : simpleFadeInRight;
  const imageAnimation = reverse ? simpleFadeInRight : simpleFadeInLeft;

  return (
    <motion.section
      id={id}
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionContainerVariants} 
    >
      {/* Subtle Background Glow for each section - more localized */}
      <div className={`absolute inset-0 z-[-1] pointer-events-none opacity-20 md:opacity-25
                       ${reverse ? 'lg:left-1/2' : 'lg:right-1/2'}`}>
        <div className={`absolute inset-0 rounded-full bg-gradient-radial ${gradientClasses[accentGradient]}/30 via-transparent to-transparent filter blur-[150px]`} />
      </div>

      {/* Text Content */}
      <motion.div
        variants={textAnimation} 
        className={`relative z-10 ${reverse ? 'lg:order-2' : ''} text-center lg:text-left`}
      >
        {overline && (
          <AnimatedBlock el="p" variants={simpleFadeInUp} className="cormorant-garamond mb-3 text-lg font-semibold uppercase tracking-widest text-accent-orange">
            {overline}
          </AnimatedBlock>
        )}
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="cormorant-garamond mb-6 text-4xl font-medium leading-tight text-text-primary md:text-5xl lg:text-6xl">
          {title} <br />
          <span className={`cinzel-decorative-bold mt-1 inline-block bg-gradient-to-r ${gradientClasses[accentGradient]} bg-clip-text font-bold not-italic tracking-normal text-transparent md:mt-2`}>
            {titleHighlight}
          </span>
        </AnimatedBlock>

        {typeof description === 'string' ? (
          <AnimatedText
            text={description as string}
            el="p"
            className="cormorant-garamond mb-8 text-xl leading-relaxed text-text-primary/85 md:text-2xl"
            variants={paragraphLineVariants}
            splitter="line"
            staggerAmount={0.02}
          />
        ) : (
          <AnimatedBlock variants={simpleFadeInUp} className="cormorant-garamond mb-8 text-xl leading-relaxed text-text-primary/85 md:text-2xl">
            {description}
          </AnimatedBlock>
        )}

        {additionalPoints && additionalPoints.length > 0 && (
          <motion.ul variants={simpleFadeInUp} className="mb-8 space-y-3 text-left">
            {additionalPoints.map((point, i) => (
              <motion.li key={i} variants={simpleFadeInUp} className="cormorant-garamond flex items-start text-lg text-text-primary/80">
                {point.icon ? (
                  <span className="mr-3 mt-1 text-accent-yellow-dark">{point.icon}</span>
                ) : (
                  <span className="mr-3 mt-1.5 inline-block size-2 rounded-full bg-gradient-to-br from-accent-yellow-dark to-accent-orange" />
                )}
                {point.text}
              </motion.li>
            ))}
          </motion.ul>
        )}

        <AnimatedBlock variants={simpleFadeInUp} delay={0.3}>
          <Link href={ctaLink} legacyBehavior>
            <a className={`group/link inline-flex items-center bg-gradient-to-r ${gradientClasses[accentGradient]} bg-clip-text text-lg font-semibold uppercase tracking-wider text-transparent transition-all duration-300 hover:brightness-125 focus:brightness-125 md:text-xl`}>
              {ctaText}
              <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1 group-focus/link:translate-x-1">→</span>
            </a>
          </Link>
        </AnimatedBlock>
      </motion.div>

      {/* Image Content */}
      <motion.div
        variants={imageAnimation} 
        className={`relative z-10 ${reverse ? 'lg:order-1' : ''}`}
      >
        <AnimatedBlock variants={imageDramaticRevealVariants} className="text-center">
          {/* Enhanced Image Presentation */}
          <div className="relative inline-block p-2 group">
            {/* Hover Glow for Image */}
            <div className={`absolute inset-0 z-[-1] rounded-3xl bg-gradient-to-br ${gradientClasses[accentGradient]}/50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-75`} />
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="mx-auto w-full max-w-lg rounded-2xl object-cover shadow-2xl ring-1 ring-accent-yellow-dark/10 transition-transform duration-300 group-hover:scale-[1.02]"
              transition={{ duration: 0.3 }}
            />
          </div>
        </AnimatedBlock>
      </motion.div>
    </motion.section>
  );
}

export function UnifiedLuxurySections() {
  const sections: LuxurySectionProps[] = [
    {
      id: "refined-naturalism",
      overline: "The Aura Philosophy",
      title: "The Aura Look:",
      titleHighlight: "Refined Naturalism",
      description: (
        <>
          <p className="mb-4">
            At Aura Aesthetics, we believe the most profound beauty enhancements are those that honor your unique individuality. Our 'Refined Naturalism' philosophy is not about altering who you are, but artfully revealing the most confident and radiant version of yourself.
          </p>
          <p>
            This approach focuses on subtle yet significant improvements. We utilize advanced, minimally invasive techniques to gently restore youthfulness, smooth imperfections, and highlight your distinct features. The goal is harmony and balance, ensuring results that are imperceptibly beautiful, never overdone.
          </p>
        </>
      ),
      additionalPoints: [
        { text: "Enhancing natural features, not altering them." },
        { text: "Focus on long-term skin health and graceful aging." },
        { text: "Bespoke treatment plans tailored to individual anatomy and desires." },
        { text: "Achieving results that look refreshed, revitalized, and authentically you." },
      ],
      ctaText: "Explore Our Philosophy",
      ctaLink: "/philosophy",
      imageSrc: "/client_SCase.png",
      imageAlt: "Client with subtle, natural-looking aesthetic enhancements, smiling confidently.",
      accentGradient: 'yellowToOrange',
      reverse: false
    },
    {
      id: "aesthetic-innovation",
      overline: "Cutting-Edge Technology",
      title: "Masters of",
      titleHighlight: "Aesthetic Innovation",
      description: (
        <>
          <p className="mb-4">
            Our commitment to excellence is underpinned by a dedication to utilizing the latest, clinically-proven technologies and premium, medical-grade products. We continually invest in state-of-the-art equipment, ensuring that Aura Aesthetics remains at the forefront of aesthetic medicine.
          </p>
          <p>
            This commitment extends to our team's expertise. Continuous training and education in emerging techniques mean we deliver not only the safest and most effective treatments but also innovative solutions tailored to evolving aesthetic needs.
          </p>
        </>
      ),
      additionalPoints: [
        { text: "Portfolio of FDA-approved, evidence-based technologies." },
        { text: "Exclusive access to pioneering treatments and devices." },
        { text: "Ongoing research and adoption of global best practices." },
        { text: "Superior outcomes with minimized downtime and enhanced comfort." },
      ],
      ctaText: "Discover Our Technologies",
      ctaLink: "/technologies",
      imageSrc: "/Intruments.png",
      imageAlt: "Sleek, state-of-the-art aesthetic laser and energy devices in a modern clinic room.",
      accentGradient: 'orangeToRed',
      reverse: true // Alternating layout
    },
    {
      id: "treatment-journeys",
      overline: "Your Bespoke Experience",
      title: "Personalised",
      titleHighlight: "Treatment Journeys",
      description: (
        <>
          <p className="mb-4">
            True transformation goes beyond individual treatments. At Aura Aesthetics, we curate holistic, personalized journeys designed around your unique aspirations and dermatological profile. It begins with an in-depth consultation where our experts listen intently to your concerns and goals.
          </p>
          <p>
            This collaborative approach leads to a bespoke treatment plan, often combining multiple modalities for synergistic effects. We guide you through every step, from preparation to aftercare, ensuring comprehensive support and results that not only look exceptional but also promote enduring skin health and profound well-being.
          </p>
        </>
      ),
      additionalPoints: [
        { text: "In-depth consultations with advanced diagnostic tools." },
        { text: "Combination therapies for optimized and comprehensive results." },
        { text: "Dedicated patient coordinators for seamless experience." },
        { text: "Emphasis on education and empowering you in your aesthetic choices." },
      ],
      ctaText: "Begin Your Aura Journey",
      ctaLink: "/consultation",
      imageSrc: "/doctor_consult.png",
      imageAlt: "Aesthetician warmly consulting with a client, discussing a personalized treatment plan.",
      accentGradient: 'yellowToRed',
      reverse: false
    }
  ];

  return (
    <div className="relative bg-site-bg py-10 md:py-16"> 
      {sections.map((section, index) => (
        <React.Fragment key={section.id || index}>
          <LuxurySection {...section} />
          {index < sections.length - 1 && (
            <div className="relative max-w-lg mx-auto h-20 md:h-28 flex items-center justify-center" aria-hidden="true">
              <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-accent-yellow-dark/30 to-transparent" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
} 