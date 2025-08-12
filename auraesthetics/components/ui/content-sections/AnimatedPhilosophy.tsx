// src/components/AnimatedPhilosophy.tsx
"use client";

import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const AnimatedPhilosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const sculptedHighlightRef = useRef<HTMLSpanElement>(null);
  const sculptedTextRef = useRef<HTMLSpanElement>(null);
  const separatorLeftRef = useRef<HTMLDivElement>(null);
  const separatorRightRef = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);
  const attributionRef = useRef<HTMLParagraphElement>(null);
  const dashLeftRef = useRef<HTMLDivElement>(null);
  const dashRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let hasAnimated = false;
    let ctx: gsap.Context | null = null;
    let observer: IntersectionObserver | null = null;

    // IntersectionObserver callback
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        ctx = gsap.context(() => {
          // Set initial states
          gsap.set([bgRef1.current, bgRef2.current], { opacity: 0, scale: 0.8 });
          gsap.set(quoteRef.current, { opacity: 0, y: 30 });
          gsap.set(sculptedHighlightRef.current, { opacity: 0, scale: 0.8, rotation: -5 });
          gsap.set(sculptedTextRef.current, { opacity: 0, y: 15 });
          gsap.set([separatorLeftRef.current, separatorRightRef.current], { opacity: 0, width: 0 });
          gsap.set(diamondRef.current, { opacity: 0, scale: 0 });
          gsap.set(attributionRef.current, { opacity: 0, y: 20 });
          gsap.set([dashLeftRef.current, dashRightRef.current], { opacity: 0, width: 0 });

          // Create timeline
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          // Animation sequence
          tl.to(bgRef1.current, { opacity: 0.3, scale: 1, duration: 1.5 }, 0)
            .to(bgRef2.current, { opacity: 0.2, scale: 1, rotation: 45, duration: 1.8 }, 0.2)
            .to(quoteRef.current, { opacity: 1, y: 0, duration: 1 }, 0.5)
            .to(sculptedHighlightRef.current, { 
              opacity: 1, 
              scale: 1, 
              rotation: 0, 
              duration: 0.8 
            }, 0.8)
            .to(sculptedTextRef.current, { 
              opacity: 1, 
              y: 0, 
              duration: 0.7,
              onStart: () => {
                gsap.to(sculptedTextRef.current, {
                  keyframes: [
                    { textShadow: "0 0 10px rgba(253, 177, 16, 0.7)", duration: 0.4 },
                    { textShadow: "0 0 20px rgba(253, 177, 16, 0.9)", duration: 0.3 },
                    { textShadow: "0 0 8px rgba(253, 177, 16, 0.5)", duration: 0.3 }
                  ],
                  repeat: 1,
                  yoyo: true
                });
              }
            }, 1)
            .to([separatorLeftRef.current, separatorRightRef.current], { 
              width: "6rem", 
              opacity: 1, 
              duration: 1.4 // doubled duration
            }, 1.2)
            .to(diamondRef.current, { 
              opacity: 1, 
              scale: 1, 
              duration: 0.5,
              onStart: () => {
                gsap.to(diamondRef.current, {
                  keyframes: [
                    { scale: 1.2, duration: 0.3 },
                    { scale: 0.9, duration: 0.2 },
                    { scale: 1, duration: 0.2 }
                  ]
                });
              }
            }, 1.2)
            .to(attributionRef.current, { 
              opacity: 1, 
              y: 0, 
              duration: 0.8 
            }, 1.4)
            .to([dashLeftRef.current, dashRightRef.current], { 
              width: "2rem", 
              opacity: 1, 
              duration: 1.2 
            }, 1.6);
        }, containerRef);
        // Disconnect observer after animation triggers
        if (observer) observer.disconnect();
      }
    };

    observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.3
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (ctx) ctx.revert();
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ margin: '0 auto', padding: '0 1rem', maxWidth: '1280px', width: '100%', borderRadius: '2rem' }}
      className="bg-opacity-30 bg-[url('/assets/paint.svg')] bg-cover bg-center"
    >
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center py-20">
        {/* Sculpted background elements */}
        <div className="absolute inset-0 -z-10 opacity-0" ref={bgRef1}>
          <div className="absolute left-1/4 top-1/4 size-1/3 rounded-full bg-gradient-to-br from-accent-yellow/15 to-transparent blur-3xl"></div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-0" ref={bgRef2}>
          <div className="absolute bottom-1/4 right-1/4 size-40 rotate-0 rounded-full bg-gradient-to-tl from-accent-orange/20 to-transparent blur-xl"></div>
        </div>

        {/* Enhanced Philosophy Statement */}
        <div className="relative mb-20 flex w-full flex-col items-center justify-center text-center">
          <h2 
            ref={quoteRef}
            className="cormorant-garamond mx-auto max-w-4xl px-4 text-4xl font-semibold italic leading-relaxed tracking-wide text-text-primary md:text-5xl lg:text-6xl"
          >
            Where science meets artistry,
            <br />
            <span className="relative mt-8 inline-block">
              <span 
                ref={sculptedHighlightRef}
                className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-r from-accent-yellow-dark/20 to-accent-orange/20"
              ></span>
              <span 
                ref={sculptedTextRef}
                className="relative font-bold text-accent-red drop-shadow-md"
              >
                and confidence is beautifully sculpted.
              </span>
            </span>
          </h2>
          
          {/* Enhanced Separator */}
          <div className="mt-12 flex flex-nowrap items-center justify-center">
            <div 
              ref={separatorLeftRef}
              className="h-1 w-0 bg-gradient-to-r from-transparent via-accent-yellow to-transparent"
            ></div>
            <div 
              ref={diamondRef}
              className="mx-2 scale-0 text-xl text-accent-yellow sm:mx-4 sm:text-2xl"
            >
              ✦
            </div>
            <div 
              ref={separatorRightRef}
              className="h-1 w-0 bg-gradient-to-r from-transparent via-accent-yellow to-transparent"
            ></div>
          </div>
          
          {/* Prominent Attribution */}
          <div 
            ref={attributionRef}
            className="cormorant-garamond mt-10 flex items-center justify-center whitespace-nowrap rounded-lg border border-accent-yellow/30 bg-gradient-to-r from-transparent via-accent-yellow-dark/10 to-transparent px-4 py-3 text-lg font-medium text-text-primary sm:px-8 sm:py-4 sm:text-2xl"
          >
            <div 
              ref={dashLeftRef}
              className="h-0.5 w-1 bg-gradient-to-r from-transparent via-accent-red to-transparent"
            >
            </div>
            <span className="mx-4">The Aura Aesthetics Philosophy</span>
            <div 
              ref={dashRightRef}
              className="h-0.5 w-1 bg-gradient-to-r from-transparent via-accent-red to-transparent"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPhilosophy;