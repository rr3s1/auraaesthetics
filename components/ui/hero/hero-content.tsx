"use client";

import Link from 'next/link';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export function HeroContent() {
  const titleText = "AURA AESTHETICS";
  const titleWords = titleText.split(' ');

  const containerRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  // titleRef will now refer to the h1, and we'll select its child spans for animation
  const titleH1Ref = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonWrapperRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);
  const glowSpan1Ref = useRef<HTMLSpanElement>(null);
  const glowSpan2Ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const refs = [
      containerRef.current, titleWrapperRef.current, titleH1Ref.current, 
      paragraphRef.current, ctaButtonWrapperRef.current, ctaButtonRef.current, 
      glowSpan1Ref.current, glowSpan2Ref.current
    ];
    if (refs.some(ref => !ref)) {
      return;
    }

    const titleWordSpans = titleH1Ref.current!.querySelectorAll('span');
    if (titleWordSpans.length === 0) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set([
      titleWrapperRef.current, paragraphRef.current, ctaButtonWrapperRef.current, 
      glowSpan1Ref.current, glowSpan2Ref.current, ...Array.from(titleWordSpans)
    ], { opacity: 0 });
    gsap.set(titleWrapperRef.current, { y: -30 });
    gsap.set(Array.from(titleWordSpans), { y: -20 });
    gsap.set(paragraphRef.current, { y: 20 });
    gsap.set(ctaButtonWrapperRef.current, { y: 20 });

    tl.to(containerRef.current, { opacity: 1, duration: 0.1 })
      .to(titleWrapperRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 }, "-=0.05")
      .to(titleWordSpans, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }, "<0.1")
      .to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.6 }, "<0.2")
      .to([glowSpan1Ref.current!, glowSpan2Ref.current!], { opacity: 1, stagger: 0.2, duration: 0.5 }, "<0.1")
      .to(ctaButtonWrapperRef.current, { opacity: 1, y: 0, duration: 0.6 }, "<0.2");

    const spanElements = [glowSpan1Ref.current!, glowSpan2Ref.current!];
    const spanHoverListeners: Array<{el: HTMLElement, type: string, listener: EventListener}> = [];

    spanElements.forEach(span => {
      const mouseEnterListener = () => gsap.to(span, { scale: 1.05, duration: 0.3 });
      const mouseLeaveListener = () => gsap.to(span, { scale: 1, duration: 0.3 });
      span.addEventListener('mouseenter', mouseEnterListener);
      span.addEventListener('mouseleave', mouseLeaveListener);
      spanHoverListeners.push({el: span, type: 'mouseenter', listener: mouseEnterListener});
      spanHoverListeners.push({el: span, type: 'mouseleave', listener: mouseLeaveListener});
    });
    
    const btn = ctaButtonRef.current!;
    gsap.set(btn, { scale: 1, boxShadow: "none" });
    const btnListeners: Array<{el: HTMLElement | Document, type: string, listener: EventListener}> = [];

    const btnMouseEnter = () => gsap.to(btn, { scale: 1.05, boxShadow: "0px 8px 20px rgba(128, 0, 128, 0.35)", duration: 0.25, ease: "power2.out" });
    const btnMouseLeave = () => gsap.to(btn, { scale: 1, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", duration: 0.25, ease: "power2.inOut" }); // Keep a subtle shadow
    const btnMouseDown = () => gsap.to(btn, { scale: 0.95, boxShadow: "0px 2px 8px rgba(128, 0, 128, 0.25)", duration: 0.15 });
    const btnMouseUp = () => gsap.to(btn, { scale: btn.matches(':hover') ? 1.05 : 1, boxShadow: btn.matches(':hover') ? "0px 8px 20px rgba(128, 0, 128, 0.35)" : "0px 4px 10px rgba(0,0,0,0.2)", duration: 0.15 });
    
    btn.addEventListener('mouseenter', btnMouseEnter);
    btn.addEventListener('mouseleave', btnMouseLeave);
    btn.addEventListener('mousedown', btnMouseDown);
    // mouseup on document to catch cases where mouse is released outside button
    document.addEventListener('mouseup', btnMouseUp); 

    btnListeners.push({el: btn, type: 'mouseenter', listener: btnMouseEnter});
    btnListeners.push({el: btn, type: 'mouseleave', listener: btnMouseLeave});
    btnListeners.push({el: btn, type: 'mousedown', listener: btnMouseDown});
    btnListeners.push({el: document, type: 'mouseup', listener: btnMouseUp});

    return () => {
      tl.kill();
      spanHoverListeners.forEach(item => item.el.removeEventListener(item.type, item.listener));
      btnListeners.forEach(item => item.el.removeEventListener(item.type, item.listener));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mb-16 flex min-h-[70vh] flex-col items-center justify-center px-4 text-left text-white sm:items-start opacity-0"
    >
      <div
        ref={titleWrapperRef}
        className="-mt-4 max-w-full sm:-mt-6 md:-mt-8"
        aria-label={titleText}
      >
        <h1
          ref={titleH1Ref}
          className="cinzel-decorative-black py-0 text-5xl font-bold text-center leading-tight tracking-wide sm:text-5xl sm:leading-tight md:text-8xl md:leading-tight lg:text-8xl lg:leading-normal text-white"
          style={{
            textShadow: '1px 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.4)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
          }}
        >
          {titleWords.map((word, index) => (
            <span key={index} className="inline-block" style={{marginRight: titleWords.length -1 === index ? '0' : '0.25em' }}>{word}</span>
          ))}
        </h1>
      </div>

      <p
        ref={paragraphRef}
        className="pt-6 text-center text-base font-bold uppercase italic sm:pt-8 sm:text-xl md:pt-10 md:text-2xl lg:text-3xl"
      >
        <span
          ref={glowSpan1Ref}
          className="relative inline-block text-orange-400"
          style={{
            textShadow: '0 0 15px rgba(255, 120, 0, 0.7), 0 0 25px rgba(255, 120, 0, 0.5)',
            filter: 'drop-shadow(0 0 5px rgba(255, 120, 0, 0.8))'
          }}
        >
          Your Glow  
        </span>,
        Our Promise - {' '}
        <span
          ref={glowSpan2Ref}
          className="relative inline-block font-semibold"
          style={{
            color: '#FFDDBB',
            fontWeight: '600',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3), 0 0 8px rgba(255, 221, 187, 0.4)',
            filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4))'
          }}
        >
           Delivered with Care
        </span>{' '}
      </p>

      <div
        ref={ctaButtonWrapperRef}
        className="m:mt-10 mt-8 md:mt-12"
        style={{ pointerEvents: 'auto' }}
      >
        <Link href="/register" passHref legacyBehavior>
          <a
            ref={ctaButtonRef}
            className="cormorant-garamond min-w-[200px] px-6 py-3 text-lg sm:min-w-[220px] sm:px-8 sm:py-4 sm:text-xl md:min-w-[240px] md:px-10 md:py-5 md:text-2xl text-white font-semibold rounded-lg shadow-md transition-colors duration-150 cursor-pointer inline-block text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600"
            style={{ boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }} // Initial shadow for button
          >
            SCHEDULE CONSULTATION
          </a>
        </Link>
      </div>
    </div>
  );
}
