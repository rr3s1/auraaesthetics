"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { AnimatedBlock, AnimatedText } from '../animations/animated-components';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants, 
  imageDramaticRevealVariants,
  cardHoverEffect
} from '../animations/animation-variants';

interface TreatmentCard {
  title: string;
  image: string;
  alt: string;
  linkText: string;
}

export function SignatureTreatmentsSection() {
  const cardData: TreatmentCard[] = [
    { title: "Advanced Dermal Fillers", image: "/advanced_dermal.png", alt: "Client receiving dermal filler treatment", linkText: "DISCOVER SMOOTHING" },
    { title: "Laser Skin Rejuvenation", image: "/laser.png", alt: "Advanced laser skin treatment", linkText: "EXPLORE RADIANCE" },
    { title: "Non-Invasive Body Sculpting", image: "/body_sculpt.png", alt: "Client undergoing body sculpting treatment", linkText: "VIEW CONTOURING" },
    { title: "Luxury Bespoke Facials", image: "/frontEnd.png", alt: "Relaxing luxury facial treatment", linkText: "EXPERIENCE PAMPERING" },
    { title: "Medical-Grade Skincare", image: "/products.png", alt: "Display of premium medical-grade skincare products", linkText: "LEARN MORE" },
    { title: "Hair Restoration Therapies", image: "/hairR.png", alt: "Advanced hair restoration procedure", linkText: "BROWSE SOLUTIONS" },
  ];

  return (
    <div className="bg-gradient-radial from-accent-yellow-dark/10 via-site-bg to-content-bg px-4 py-20">
      <motion.section
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-20 text-center">
          <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-8 text-center font-serif text-4xl font-bold leading-tight tracking-wide text-text-primary md:text-5xl">
            OUR SIGNATURE TREATMENTS
          </AnimatedBlock>
          
          <hr className="mx-auto mb-8 w-24 border-t border-accent-yellow-dark/30" />
          
          <AnimatedText
            text="Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique — meticulously planned from initial consultation through to aftercare, ensuring exceptional results."
            el="p"
            className="mx-auto max-w-4xl text-center text-xl font-light leading-relaxed text-text-secondary md:text-2xl"
            variants={paragraphLineVariants}
            staggerAmount={0.03}
            splitter="line"
          />
          
          <AnimatedBlock variants={imageDramaticRevealVariants} delay={0.2} className="mx-auto mt-12 w-full max-w-2xl">
            <img 
              src="/collage.png" 
              alt="Collage showcasing various aesthetic treatments and results" 
              className="rounded-2xl shadow-2xl ring-1 ring-accent-yellow-dark/20" 
            />
          </AnimatedBlock>
        </div>

        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-content-bg p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(253,177,16,0.2)]"
              whileHover={cardHoverEffect}
            >
              {/* Gradient glow effect on hover */}
              <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-accent-yellow-dark/10 via-accent-orange/15 to-accent-red/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />
              
              {/* Enhanced border glow */}
              <div className="absolute inset-0 rounded-2xl border border-accent-yellow-dark/10 transition-all duration-500 group-hover:border-accent-orange/40 group-hover:shadow-[inset_0_1px_0_rgba(245,122,8,0.2)]" />
              
              <div className="relative z-10">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={card.image} 
                    alt={card.alt} 
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="mb-4 font-serif text-xl font-semibold leading-snug tracking-wide text-text-primary transition-colors duration-300 group-hover:text-accent-yellow-dark lg:text-2xl">
                  {card.title}
                </h3>
                
                <Link href="#" legacyBehavior>
                  <a className="group/link mt-auto self-start bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-sm font-semibold uppercase tracking-[0.15em] text-transparent transition-all duration-300 hover:from-accent-red hover:via-accent-red hover:to-accent-red hover:underline">
                    {card.linkText} 
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover/link:translate-x-2">
                      →
                    </span>
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
