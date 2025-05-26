"use client";

import Link from 'next/link';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function RefinedNaturalismSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !leftColumnRef.current || !rightColumnRef.current || !titleRef.current || !paragraphRef.current || !linkRef.current || !imageContainerRef.current || !imageRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Section container animation (replicating sectionContainerVariants)
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, y: 0, duration: 0.8, 
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true, onEnter: () => gsap.set(sectionRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(sectionRef.current, {visibility: 'hidden'});

      // Left column animation
      gsap.fromTo(leftColumnRef.current, 
        { opacity: 0, x: -30 }, 
        {
          opacity: 1, x: 0, duration: 0.6, 
          scrollTrigger: { trigger: leftColumnRef.current, start: "top 85%", once: true, onEnter: () => gsap.set(leftColumnRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(leftColumnRef.current, {visibility: 'hidden'});

      // Title animation (replicating simpleFadeInUp)
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, y: 0, duration: 0.5, delay: 0.2, 
          scrollTrigger: { trigger: titleRef.current, start: "top 90%", once: true, onEnter: () => gsap.set(titleRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(titleRef.current, {visibility: 'hidden'});

      // Paragraph animation (replicating paragraphLineVariants as a block)
      gsap.fromTo(paragraphRef.current, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, y: 0, duration: 0.5, delay: 0.4, 
          scrollTrigger: { trigger: paragraphRef.current, start: "top 90%", once: true, onEnter: () => gsap.set(paragraphRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(paragraphRef.current, {visibility: 'hidden'});

      // Link animation (replicating simpleFadeInUp)
      gsap.fromTo(linkRef.current, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, y: 0, duration: 0.5, delay: 0.6, // Original delay was 0.3 relative to parent, now absolute
          scrollTrigger: { trigger: linkRef.current, start: "top 95%", once: true, onEnter: () => gsap.set(linkRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(linkRef.current, {visibility: 'hidden'});

      // Right column animation
      gsap.fromTo(rightColumnRef.current, 
        { opacity: 0, x: 30 }, 
        {
          opacity: 1, x: 0, duration: 0.6, 
          scrollTrigger: { trigger: rightColumnRef.current, start: "top 85%", once: true, onEnter: () => gsap.set(rightColumnRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(rightColumnRef.current, {visibility: 'hidden'});

      // Image container animation (replicating imageDramaticRevealVariants)
      gsap.fromTo(imageContainerRef.current, 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1, scale: 1, duration: 0.7, delay: 0.2,
          scrollTrigger: { trigger: imageContainerRef.current, start: "top 90%", once: true, onEnter: () => gsap.set(imageContainerRef.current, {visibility: 'visible'}) }
        }
      );
      gsap.set(imageContainerRef.current, {visibility: 'hidden'});

      // Image hover animation
      if (imageRef.current) {
        const imgElement = imageRef.current;
        imgElement.addEventListener('mouseenter', () => {
          gsap.to(imgElement, { scale: 1.02, duration: 0.3, ease: 'power1.out' });
        });
        imgElement.addEventListener('mouseleave', () => {
          gsap.to(imgElement, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
      }

    }, sectionRef); // Scope GSAP context to the section

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2"
    >
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-pink-900/10 via-transparent to-transparent opacity-30" />
      
      <div ref={leftColumnRef} className="relative z-10">
        <h2 ref={titleRef} className="mb-8 font-serif text-4xl font-semibold leading-tight tracking-wide text-white md:text-5xl">
          The Aura Look: <br />
          <span className="font-medium italic text-pink-400">Refined Naturalism</span>
        </h2>
        <p 
          ref={paragraphRef} 
          className="mb-8 max-w-2xl text-xl leading-relaxed text-neutral-200 opacity-90"
        >
          We found that the most profound beauty enhancements are those that honor individuality. Our 'Refined Naturalism' approach focuses on subtle yet significant improvements, using advanced techniques to restore youthfulness and highlight your unique features, ensuring you look like the best version of yourself.
        </p>
        <div ref={linkRef}>
          <Link href="#" legacyBehavior>
            <a className="inline-block text-sm font-medium tracking-wide text-pink-400 underline underline-offset-4 transition-all duration-300 hover:tracking-wider hover:text-white">
              Explore Our Aesthetic Philosophy →
            </a>
          </Link>
        </div>
      </div>
      
      <div ref={rightColumnRef} className="relative z-10">
        <div ref={imageContainerRef} className="text-center">
          <img 
            ref={imageRef}
            src="/client_SCase.png" 
            alt="Client showcasing natural-looking aesthetic results" 
            className="mx-auto w-full max-w-md rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105" // Note: GSAP hover will override CSS hover for scale
          />
        </div>
      </div>
    </section>
  );
}
