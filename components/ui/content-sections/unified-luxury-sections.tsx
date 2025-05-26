"use client";

import Link from 'next/link';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LuxurySectionProps {
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  accentColor: 'pink' | 'teal' | 'orange';
  reverse?: boolean;
}

function LuxurySection({ 
  title, 
  titleHighlight, 
  description, 
  ctaText, 
  ctaLink, 
  imageSrc, 
  imageAlt, 
  accentColor, 
  reverse = false
}: LuxurySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const imageContentRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null); // For reveal effect
  const imageRef = useRef<HTMLImageElement>(null);

  const colorClasses = {
    pink: {
      gradient: 'from-pink-900/10',
      text: 'text-pink-400',
      hover: 'hover:text-white'
    },
    teal: {
      gradient: 'from-teal-900/10',
      text: 'text-teal-300',
      hover: 'hover:text-white'
    },
    orange: {
      gradient: 'from-orange-900/10',
      text: 'text-orange-400',
      hover: 'hover:text-white'
    }
  };
  const colors = colorClasses[accentColor];

  useLayoutEffect(() => {
    const elementsToAnimate = [
      textContentRef.current,
      titleRef.current,
      descriptionRef.current,
      ctaRef.current,
      imageContentRef.current,
      imageWrapperRef.current,
      imageRef.current
    ];

    if (!sectionRef.current || elementsToAnimate.some(el => !el)) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        }
      });

      // Text content container animation
      tl.from(textContentRef.current, {
        opacity: 0,
        x: reverse ? 50 : -50, // Use reverse prop for direction
        duration: 0.7,
        ease: "power3.out"
      }, 0);

      // Staggered animation for title, description, cta within the text content
      tl.from([titleRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15
      }, "-=0.4"); // Overlap with text container animation

      // Image content container animation
      tl.from(imageContentRef.current, {
        opacity: 0,
        x: reverse ? -50 : 50, // Use reverse prop for direction
        duration: 0.7,
        ease: "power3.out"
      }, 0.1); // Start slightly after text content for dynamic feel

      // Image wrapper reveal (scale and fade)
      tl.from(imageWrapperRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "elastic.out(1, 0.75)"
      }, "-=0.5"); // Overlap with image container animation

      // Image hover effect
      if (imageRef.current) {
        imageRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, { scale: 1.02, duration: 0.3, ease: "power1.out" });
        });
        imageRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, { scale: 1, duration: 0.3, ease: "power1.inOut" });
        });
      }
    }, sectionRef); // Scope context to sectionRef

    return () => ctx.revert();
  }, [reverse]); // Add reverse to dependency array as it affects animations

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2"
    >
      <div className={`absolute inset-0 bg-gradient-radial ${colors.gradient} pointer-events-none via-transparent to-transparent opacity-30`} />
      
      <div
        ref={textContentRef}
        className={`relative z-10 ${reverse ? 'lg:order-2' : ''}`}
      >
        <h2 ref={titleRef} className="mb-8 font-serif text-4xl font-semibold leading-tight tracking-wide text-white md:text-5xl">
          {title} <br />
          <span className={`${colors.text} font-medium italic`}>{titleHighlight}</span>
        </h2>
        {/* TODO: For true line-by-line animation as 'AnimatedText' might have implied,
            consider GSAP's SplitText plugin or manually splitting text into span elements per line. */}
        <p ref={descriptionRef} className="mb-8 max-w-2xl text-2xl leading-relaxed text-neutral-200 opacity-90 md:text-xl lg:text-2xl">
          {description}
        </p>
        <div> {/* Wrapper for link to apply animation if Link itself is problematic */}
          <Link href={ctaLink} legacyBehavior>
            <a ref={ctaRef} className={`inline-block text-xl font-medium ${colors.text} ${colors.hover} tracking-wide underline underline-offset-4 transition-all duration-300 hover:tracking-wider`}>
              {ctaText} →
            </a>
          </Link>
        </div>
      </div>
      
      <div
        ref={imageContentRef}
        className={`relative z-10 ${reverse ? 'lg:order-1' : ''}`}
      >
        <div ref={imageWrapperRef} className="text-center">
          <img 
            ref={imageRef}
            src={imageSrc} 
            alt={imageAlt} 
            className="mx-auto w-full max-w-md rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
            // GSAP handles hover scale, so remove Framer's whileHover and transition props if they were on img directly
          />
        </div>
      </div>
    </section>
  );
}

export function UnifiedLuxurySections() {
  const sections = [
    {
      title: "The Aura Look:",
      titleHighlight: "Refined Naturalism",
      description: "We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself.",
      ctaText: "Explore Our Aesthetic Philosophy",
      ctaLink: "#",
      imageSrc: "/client_SCase.png",
      imageAlt: "Client showcasing natural-looking aesthetic results",
      accentColor: 'pink' as const,
      reverse: false
    },
    {
      title: "Masters of",
      titleHighlight: "Aesthetic Innovation",
      description: "We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction.",
      ctaText: "Discover Our Technologies",
      ctaLink: "#",
      imageSrc: "/Intruments.png",
      imageAlt: "State-of-the-art aesthetic technology in a clinic setting",
      accentColor: 'teal' as const,
      reverse: true // Changed to true for variety in testing
    },
    {
      title: "Personalised",
      titleHighlight: "Treatment Journeys",
      description: "Beyond individual treatments, we focus on holistic, personalized journeys. Our expert consultations lead to bespoke plans addressing your unique concerns and goals, ensuring comprehensive care and results that not only look exceptional but also promote long-term skin health and well-being.",
      ctaText: "Explore Our Approach",
      ctaLink: "#",
      imageSrc: "/doctor_consult.png",
      imageAlt: "Doctor consulting with a client in a luxury clinic",
      accentColor: 'orange' as const,
      reverse: false
    }
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-800/20 to-transparent" />
      
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <LuxurySection {...section} />
          {index < sections.length - 1 && (
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="h-16" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}