"use client";

import React from 'react';
import { blockquoteVariants } from '../animations/animation-variants';
import { AnimatedBlock } from '../animations/animated-components';

interface TestimonialBlockquoteProps {
  quote: string;
  citation: string;
  className?: string;
}

export function TestimonialBlockquote({ 
  quote, 
  citation, 
  className = "text-center text-xl sm:text-2xl lg:text-3xl italic opacity-90 py-10 border-t border-b border-gray-700 max-w-3xl mx-auto" 
}: TestimonialBlockquoteProps) {
  return (
    <AnimatedBlock 
      el="blockquote" 
      variants={blockquoteVariants} 
      className={className}
    >
      <p>{quote}</p>
      <cite className="block mt-4 not-italic text-base opacity-70">{citation}</cite>
    </AnimatedBlock>
  );
}
