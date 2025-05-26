"use client";

import Link from 'next/link';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AestheticInnovationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null); 
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const elements = [
      sectionRef.current,
      leftContentRef.current,
      titleRef.current,
      paragraphRef.current,
      linkRef.current,
      rightContentRef.current,
      imageWrapperRef.current, 
      imageRef.current 
    ];

    if (elements.some(el => !el)) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none none", 
          once: true, 
        }
      });

      tl.from(leftContentRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: "power2.out"
      }, 0); 

      tl.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4"); 

      tl.from(paragraphRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3");

      tl.from(linkRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.2"); 

      tl.from(rightContentRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.6,
        ease: "power2.out"
      }, 0.2); 

      tl.from(imageWrapperRef.current, { 
        opacity: 0, 
        scale: 0.9, 
        duration: 0.7, 
        ease: "elastic.out(1, 0.75)" 
      }, "-=0.4"); 

      if (imageRef.current) {
        imageRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, { scale: 1.02, duration: 0.3, ease: "power1.out" });
        });
        imageRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, { scale: 1, duration: 0.3, ease: "power1.inOut" });
        });
      }
    }, sectionRef); 

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2"
    >
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-teal-900/10 via-transparent to-transparent opacity-30" />
      
      <div ref={leftContentRef} className="relative z-10">
        <h2 ref={titleRef} className="mb-8 font-serif text-4xl font-semibold leading-tight tracking-wide text-white md:text-5xl">
          Masters of <br />
          <span className="font-medium italic text-teal-300">Aesthetic Innovation</span>
        </h2>
        <p ref={paragraphRef} className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-200 opacity-90">
          We are dedicated to utilizing the latest, clinically-proven technologies and premium medical-grade products. Our investment in state-of-the-art equipment and continuous training ensures we deliver the safest, most effective treatments with superior outcomes and client satisfaction.
        </p>
        <div> 
          <Link href="#" legacyBehavior>
            <a ref={linkRef} className="inline-block text-sm font-medium tracking-wide text-teal-400 underline underline-offset-4 transition-all duration-300 hover:tracking-wider hover:text-white">
              Discover Our Technologies →
            </a>
          </Link>
        </div>
      </div>
      
      <div ref={rightContentRef} className="relative z-10">
        <div ref={imageWrapperRef} className="text-center">
          <img 
            ref={imageRef}
            src="/Intruments.png" 
            alt="State-of-the-art aesthetic technology in a clinic setting" 
            className="mx-auto w-full max-w-md rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
