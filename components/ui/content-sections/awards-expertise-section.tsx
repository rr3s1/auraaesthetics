"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const awardsContent = [
  { id: "award-treatments", text: "AWARD-WINNING TREATMENTS" },
  { id: "board-experts", text: "BOARD-CERTIFIED EXPERTS" },
  { id: "premium-partners", text: "PREMIUM BRAND PARTNERS" }
];

export function AwardsExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null); // Ref for the container of h3s

  useLayoutEffect(() => {
    if (!sectionRef.current || !itemsContainerRef.current) {
      return;
    }

    const h3Elements = gsap.utils.toArray<HTMLHeadingElement>(
      itemsContainerRef.current.children
    );

    if (h3Elements.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      // Section animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 90%", // Corresponds to viewport amount: 0.1
            once: true, 
            onEnter: () => gsap.set(sectionRef.current, {visibility: 'visible'}) 
          }
        }
      );
      gsap.set(sectionRef.current, {visibility: 'hidden'});

      // Staggered animation for h3 elements
      gsap.fromTo(h3Elements,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6,
          stagger: 0.15, // Stagger amount for each item
          scrollTrigger: { 
            trigger: itemsContainerRef.current, 
            start: "top 90%", 
            once: true, 
            onEnter: () => gsap.set(h3Elements, {visibility: 'visible'}) 
          }
        }
      );
      gsap.set(h3Elements, {visibility: 'hidden'});

    }, sectionRef); // Scope GSAP context

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-t border-gray-700 pt-16 text-center" // Increased padding
    >
      <div 
        ref={itemsContainerRef} 
        className="cormorant-garamond flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-10 sm:space-y-0 md:space-x-16" // Increased spacing
      >
        {awardsContent.map((item) => (
          <h3 
            key={item.id} 
            className="cormorant-garamond text-lg tracking-wider opacity-80 sm:text-xl lg:text-2xl"
          >
            {item.text}
          </h3>
        ))}
      </div>
    </section>
  );
}
