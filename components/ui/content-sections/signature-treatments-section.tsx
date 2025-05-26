"use client";

import Link from 'next/link';
import React, { useRef, useLayoutEffect, createRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TreatmentCardProps {
  title: string;
  image: string;
  alt: string;
  linkText: string;
}

export function SignatureTreatmentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const collageImageContainerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const cardData: TreatmentCardProps[] = [
    { title: "Advanced Dermal Fillers", image: "/advanced_dermal.png", alt: "Client receiving dermal filler treatment", linkText: "DISCOVER SMOOTHING" },
    { title: "Laser Skin Rejuvenation", image: "/laser.png", alt: "Advanced laser skin treatment", linkText: "EXPLORE RADIANCE" },
    { title: "Non-Invasive Body Sculpting", image: "/body_sculpt.png", alt: "Client undergoing body sculpting treatment", linkText: "VIEW CONTOURING" },
    { title: "Luxury Bespoke Facials", image: "/frontEnd.png", alt: "Relaxing luxury facial treatment", linkText: "EXPERIENCE PAMPERING" },
    { title: "Medical-Grade Skincare", image: "/products.png", alt: "Display of premium medical-grade skincare products", linkText: "LEARN MORE" },
    { title: "Hair Restoration Therapies", image: "/hairR.png", alt: "Advanced hair restoration procedure", linkText: "BROWSE SOLUTIONS" },
  ];

  // Create an array of refs for the cards
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  cardRefs.current = cardData.map((_, i) => cardRefs.current[i] ?? createRef<HTMLDivElement>());

  useLayoutEffect(() => {
    if (!sectionRef.current || !titleRef.current || !descriptionRef.current || !collageImageContainerRef.current || !cardsGridRef.current) return;

    const ctx = gsap.context(() => {
      // Main section intro animations (title, description, collage)
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        }
      });

      introTl
        .from(titleRef.current, { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" })
        .from(descriptionRef.current, { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" }, "-=0.3")
        // TODO: For true line-by-line animation on description, consider GSAP's SplitText.
        .from(collageImageContainerRef.current, { opacity: 0, scale: 0.9, duration: 0.7, ease: "elastic.out(1, 0.75)" }, "-=0.3");

      // Cards grid animation
      const cardElements = cardRefs.current.map(ref => ref.current).filter(el => el !== null) as HTMLDivElement[];
      if (cardElements.length > 0) {
        gsap.from(cardElements, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          }
        });

        // Card hover effects (scale and shadow are mostly CSS, GSAP can enhance if needed)
        cardElements.forEach(cardEl => {
          const imageEl = cardEl.querySelector('img');
          // The complex hover (scale, shadow, glow) is primarily handled by Tailwind's group-hover and transition utilities.
          // GSAP can be added here for more intricate hover animations if the CSS transitions are not sufficient.
          // For example, to explicitly control the cardHoverEffect variant's properties:
          // cardEl.addEventListener('mouseenter', () => gsap.to(cardEl, { scale: 1.03, boxShadow: '0 25px 50px rgba(212,175,55,0.25)', duration: 0.3 }));
          // cardEl.addEventListener('mouseleave', () => gsap.to(cardEl, { scale: 1, boxShadow: '0 10px 15px rgba(0,0,0,0.1)', duration: 0.3 }));
          // The image scale is already handled by 'group-hover:scale-110' in Tailwind.
        });
      }

    }, sectionRef); // Scope context to sectionRef

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-gradient-radial from-[#4b1e10]/20 via-[#2f0d0a]/85 to-[#1a0a06] px-4 py-20">
      <section className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 ref={titleRef} className="mb-8 text-center font-serif text-4xl font-bold leading-tight tracking-wide text-[#fff6ec] md:text-5xl">
            OUR SIGNATURE TREATMENTS
          </h2>
          
          <hr className="mx-auto mb-8 w-24 border-t border-[#fff0dd]/20" />
          
          <p ref={descriptionRef} className="mx-auto max-w-4xl text-center text-xl font-light leading-relaxed text-[#ddd4cc] md:text-2xl">
            Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique — meticulously planned from initial consultation through to aftercare, ensuring exceptional results.
          </p>
          
          <div ref={collageImageContainerRef} className="mx-auto mt-12 w-full max-w-2xl">
            <img 
              src="/collage.png" 
              alt="Collage showcasing various aesthetic treatments and results" 
              className="rounded-2xl shadow-2xl ring-1 ring-[#fff0dd]/10" 
            />
          </div>
        </div>

        <div ref={cardsGridRef} className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={card.title + index}
              ref={cardRefs.current[index]}
              className="group relative overflow-hidden rounded-2xl bg-[#1c0f0a]/95 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(212,175,55,0.2)]"
              // GSAP can manage hover if cardHoverEffect variant was complex, otherwise CSS handles it.
            >
              <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-rose-400/10 via-amber-400/15 to-yellow-200/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-2xl border border-[#fff0dd]/10 transition-all duration-500 group-hover:border-[#d4af37]/40 group-hover:shadow-[inset_0_1px_0_rgba(212,175,55,0.2)]" />
              
              <div className="relative z-10">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={card.image} 
                    alt={card.alt} 
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="mb-4 font-serif text-xl font-semibold leading-snug tracking-wide text-[#fff6ec] transition-colors duration-300 group-hover:text-[#fff8f0] lg:text-2xl">
                  {card.title}
                </h3>
                
                <Link href="#" legacyBehavior>
                  <a className="group/link mt-auto self-start bg-gradient-to-r from-rose-400 via-amber-300 to-yellow-200 bg-clip-text text-sm font-semibold uppercase tracking-[0.15em] text-transparent transition-all duration-300 hover:from-[#fff6ec] hover:via-[#fff6ec] hover:to-[#fff6ec] hover:underline">
                    {card.linkText} 
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover/link:translate-x-2">
                      →
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
