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
  cardVariants,
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
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mb-16 text-center"> {/* Increased margin */}
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="mb-6 text-3xl sm:text-4xl  lg:text-5xl">
          OUR SIGNATURE TREATMENTS
        </AnimatedBlock>
        <AnimatedText
          text="Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique, meticulously planned from initial consultation through to aftercare, ensuring exceptional results."
          el="p"
          className="cormorant-garamond mx-auto max-w-3xl text-2xl opacity-80 lg:text-3xl"
          variants={paragraphLineVariants}
          staggerAmount={0.03}
          splitter="line"
        />
        <AnimatedBlock variants={imageDramaticRevealVariants} delay={0.2} className="mx-auto mt-10 w-full max-w-lg">
          <img src="/collage.png" alt="Collage showcasing various aesthetic treatments and results" className="rounded-lg shadow-2xl" />
        </AnimatedBlock>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3" // Increased gap
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }} // Stagger cards
      >
        {cardData.map((card, index) => (
          <AnimatedBlock
            key={card.title + index} // Ensure key is unique if titles can repeat
            el="div"
            variants={cardVariants}
            className="flex flex-col rounded-xl border border-gray-700/50 bg-gray-800/60 p-6 shadow-xl transition-colors duration-300 hover:border-purple-500/70" // Added hover border
            whileHover={cardHoverEffect}
          >
            <img src={card.image} alt={card.alt} className="mb-5 h-52 w-full rounded-md object-cover"/>
            <h3 className="cinzel-decorative-bold mb-3 text-xl lg:text-2xl">{card.title}</h3>
            <Link href="#" legacyBehavior>
              <a className="text-md group mt-auto self-start font-semibold text-purple-400 hover:text-purple-200">
                {card.linkText} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </Link>
          </AnimatedBlock>
        ))}
      </motion.div>
    </motion.section>
  );
}
