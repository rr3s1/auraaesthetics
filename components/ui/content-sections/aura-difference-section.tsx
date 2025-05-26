"use client";

import Link from 'next/link';
import React, { Suspense, lazy, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Spline = lazy(() => import('@splinetool/react-spline'));

export function AuraDifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);
  const splineWrapperRef = useRef<HTMLDivElement>(null);

  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useLayoutEffect(() => {
    if (!sectionRef.current || !leftContentRef.current || !titleBlockRef.current || !ctaButtonRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        }
      });

      // Animate left content (title block and button)
      tl.from(titleBlockRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
      })
      .from(ctaButtonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4"); // Overlap slightly

      // CTA Button hover and tap effects
      if (ctaButtonRef.current) {
        const button = ctaButtonRef.current;
        const originalBoxShadow = gsap.getProperty(button, "boxShadow");

        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)",
            duration: 0.3,
            ease: "power1.out"
          });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            boxShadow: originalBoxShadow.toString(), // Revert to original or a default no-shadow
            duration: 0.3,
            ease: "power1.inOut"
          });
        });
        button.addEventListener('mousedown', () => {
          gsap.to(button, {
            scale: 0.95,
            boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)",
            duration: 0.2,
            ease: "power1.out"
          });
        });
        button.addEventListener('mouseup', () => {
          gsap.to(button, {
            scale: 1.05, // Or back to 1 if not hovering
            boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)", // Or original if not hovering
            duration: 0.2,
            ease: "power1.inOut"
          });
        });
         button.addEventListener('focus', () => {
          gsap.to(button, { 
            scale: 1.05, 
            boxShadow: "0px 0px 0px 4px rgba(200, 100, 255, 0.2)", // Focus ring
            duration: 0.2 
          });
        });
        button.addEventListener('blur', () => {
          gsap.to(button, { 
            scale: 1, 
            boxShadow: originalBoxShadow.toString(),
            duration: 0.2 
          });
        });
      }
    }, sectionRef); // Scope to sectionRef

    return () => ctx.revert();
  }, []);

  // Effect for Spline wrapper animation, dependent on spline loading
  useLayoutEffect(() => {
    if (isSplineLoaded && splineWrapperRef.current) {
      const ctxSpline = gsap.context(() => {
        gsap.from(splineWrapperRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "elastic.out(1, 0.75)",
          delay: 0.2 // Slight delay after load for smoothness
        });
      }, splineWrapperRef); // Scope to splineWrapperRef
      return () => ctxSpline.revert();
    }
  }, [isSplineLoaded]);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen w-full flex-col items-center justify-center gap-x-8 gap-y-10 px-4 py-12 md:flex-row md:items-stretch md:justify-around md:gap-x-6 md:px-6 lg:gap-x-12 lg:px-10 xl:px-16"
    >
      <div ref={leftContentRef} className="order-1 flex w-full flex-col justify-center text-center md:w-1/3 md:text-left">
        <div ref={titleBlockRef} className="relative">
          <div className="absolute left-1/2 top-1/2 z-[-1] size-4/5 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-pink-100/10 via-[#fff0f5]/5 to-transparent blur-3xl" />
          <h2 className="space-y-2 font-serif text-4xl font-light leading-tight text-white md:text-6xl lg:text-9xl">
            <div className="cormorant-garamond pb-2 sm:pb-3">Confident</div>
            <div className="cinzel-decorative-bold bg-gradient-to-r from-[#fdf0f4] via-[#ffe0fb] to-[#f6a0ff] bg-clip-text text-[3.25rem] font-extrabold tracking-tight text-transparent sm:text-[4rem] lg:text-[5rem]">
              AURA
            </div>
            <div className="py-1 text-3xl font-medium tracking-wide text-[#3de5ff] sm:text-4xl lg:text-5xl">&</div>
            <div className="cinzel-decorative-bold bg-gradient-to-r from-pink-400 via-purple-500 to-red-500 bg-clip-text text-[2.75rem] font-black tracking-tight text-transparent sm:text-4xl lg:text-7xl">
              Perfected Radiance
            </div>
          </h2>
        </div>

        <div className="pt-6 sm:pt-8">
          <Link href="/register" passHref legacyBehavior>
            <a 
              ref={ctaButtonRef} 
              className="cormorant-garamond inline-block min-w-[200px] rounded-md bg-gradient-to-r from-pink-500 via-purple-600 to-red-500 px-6 py-3 text-lg text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 sm:min-w-[220px] sm:px-8 sm:py-4 sm:text-xl md:min-w-[240px] md:px-10 md:py-5 md:text-2xl"
              // GSAP will handle transform (scale) and boxShadow animations
            >
              AURA's VISION →
            </a>
          </Link>
        </div>
      </div>
      
      <div ref={splineWrapperRef} className="relative order-2 flex w-full items-center justify-center md:w-2/3">
        <div className="pointer-events-auto relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg shadow-2xl md:aspect-auto md:h-full md:max-w-full">
          <Suspense fallback={<div className="flex size-full items-center justify-center rounded-lg bg-gray-800 text-white">Loading 3D Scene...</div>}>
            <Spline
              // The style prop was causing a TypeScript error.
              // The parent div is already styled to control dimensions and position.
              scene="https://prod.spline.design/3-accyixYYHDqKCS/scene.splinecode"
              onLoad={handleSplineLoad} // Trigger animation when Spline is loaded
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}