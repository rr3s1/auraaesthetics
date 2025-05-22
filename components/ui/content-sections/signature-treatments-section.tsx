"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  sectionContainerVariants, 
  simpleFadeInUp, 
  paragraphLineVariants, 
  imageDramaticRevealVariants,
  cardVariants,
  cardHoverEffect
} from '../animations/animation-variants';
import { AnimatedBlock, AnimatedText } from '../animations/animated-components';

interface TreatmentCard {
  title: string;
  image: string;
  alt: string;
  linkText: string;
}

export function SignatureTreatmentsSection() {
  const cardData: TreatmentCard[] = [
    { title: "Advanced Dermal Fillers", image: "/placeholder/dermal-fillers.jpg", alt: "Client receiving dermal filler treatment", linkText: "DISCOVER SMOOTHING" },
    { title: "Laser Skin Rejuvenation", image: "/placeholder/laser-rejuvenation.jpg", alt: "Advanced laser skin treatment", linkText: "EXPLORE RADIANCE" },
    { title: "Non-Invasive Body Sculpting", image: "/placeholder/body-sculpting.jpg", alt: "Client undergoing body sculpting treatment", linkText: "VIEW CONTOURING" },
    { title: "Luxury Bespoke Facials", image: "/placeholder/luxury-facial.jpg", alt: "Relaxing luxury facial treatment", linkText: "EXPERIENCE PAMPERING" },
    { title: "Medical-Grade Skincare", image: "/placeholder/medical-skincare.jpg", alt: "Display of premium medical-grade skincare products", linkText: "LEARN MORE" },
    { title: "Hair Restoration Therapies", image: "/placeholder/hair-restoration.jpg", alt: "Advanced hair restoration procedure", linkText: "BROWSE SOLUTIONS" },
  ];

  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="text-center mb-16"> {/* Increased margin */}
        <AnimatedBlock el="h2" variants={simpleFadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          OUR SIGNATURE TREATMENTS
        </AnimatedBlock>
        <AnimatedText
          text="Our comprehensive suite of treatments caters to a wide range of aesthetic goals. We pride ourselves on offering bespoke solutions that combine innovation, safety, and artistry. Each client's journey is unique, meticulously planned from initial consultation through to aftercare, ensuring exceptional results."
          el="p"
          className="text-lg lg:text-xl opacity-80 max-w-3xl mx-auto"
          variants={paragraphLineVariants}
          staggerAmount={0.03}
          splitter="line"
        />
        <AnimatedBlock variants={imageDramaticRevealVariants} delay={0.2} className="mx-auto mt-10 w-full max-w-lg">
          <img src="/placeholder/treatment-collage.jpg" alt="Collage showcasing various aesthetic treatments and results" className="rounded-lg shadow-2xl" />
        </AnimatedBlock>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" // Increased gap
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }} // Stagger cards
      >
        {cardData.map((card, index) => (
          <AnimatedBlock
            key={card.title + index} // Ensure key is unique if titles can repeat
            el="div"
            variants={cardVariants}
            className="bg-gray-800/60 p-6 rounded-xl shadow-xl border border-gray-700/50 flex flex-col hover:border-purple-500/70 transition-colors duration-300" // Added hover border
            whileHover={cardHoverEffect}
          >
            <img src={card.image} alt={card.alt} className="w-full h-52 object-cover rounded-md mb-5"/>
            <h3 className="text-xl lg:text-2xl font-semibold mb-3">{card.title}</h3>
            <Link href="#" legacyBehavior>
              <a className="mt-auto text-purple-400 hover:text-purple-200 font-semibold self-start text-md group">
                {card.linkText} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </Link>
          </AnimatedBlock>
        ))}
      </motion.div>
    </motion.section>
  );
}
