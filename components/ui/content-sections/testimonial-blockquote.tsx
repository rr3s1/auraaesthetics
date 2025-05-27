"use client";

import React from 'react';

import { AnimatedBlock } from '../animations/animated-components';
import { blockquoteVariants, simpleFadeInUp } from '../animations/animation-variants';

interface TestimonialBlockquoteProps {
  quote: string;
  citation: string;
  className?: string;
  variant?: 'default' | 'ignited-statement' | 'client-highlight';
  textAlign?: 'text-center' | 'text-left' | 'text-right';
}

export function TestimonialBlockquote({
  quote,
  citation,
  className = "",
  variant = 'default',
  textAlign = 'text-center'
}: TestimonialBlockquoteProps) {
  // Split quote for potential multi-line gradient in 'ignited-statement'
  const quoteParts = quote.split(/,|\./);
  const firstPart = quoteParts[0] + (quoteParts.length > 1 && quote.includes(',') ? "," : (quoteParts.length > 1 && quote.includes('.') ? "." : ""));
  const secondPart = quoteParts.length > 1 ? quoteParts.slice(1).join(quote.includes(',') ? ',' : '.').trim() : "";

  if (variant === 'ignited-statement') {
    const firstPart = quoteParts[0] + (quoteParts.length > 1 && quote.includes(',') ? "," : (quoteParts.length > 1 && quote.includes('.') ? "." : ""));
    const secondPart = quoteParts.length > 1 ? quoteParts.slice(1).join(quote.includes(',') ? ',' : '.').trim() : "";
    
    return (
      <div className={`py-20 md:py-28 ${textAlign} ${className} relative`}>
        <AnimatedBlock
          el="div"
          variants={simpleFadeInUp}
          className="relative"
        >
          {/* Background glow for statement */}
          <div className="absolute inset-x-0 top-0 bottom-1/4 z-[-1] opacity-20 md:opacity-25">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-accent-yellow-dark/30 via-accent-orange/15 to-transparent filter blur-[100px]"></div>
          </div>
          <blockquote className="mx-auto max-w-5xl">
            <h2 className="cinzel-decorative-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span className="block bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-transparent">
                {firstPart}
              </span>
              {secondPart && (
                <span className="mt-2 block bg-gradient-to-r from-accent-orange via-accent-red to-accent-red-deep bg-clip-text text-transparent md:mt-3">
                  {secondPart}
                </span>
              )}
            </h2>
          </blockquote>
          <div className="mt-10 flex justify-center md:mt-12" aria-hidden="true">
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-accent-yellow-dark/70 via-accent-orange to-accent-red/70 opacity-90 md:w-40"></div>
          </div>
          <cite className="cormorant-garamond mt-8 block text-xl font-medium italic text-accent-orange md:mt-10 md:text-2xl">
            {citation}
          </cite>
        </AnimatedBlock>
      </div>
    );
  }

  if (variant === 'client-highlight') {
    return (
      <div className={`mx-auto max-w-3xl px-6 py-12 md:py-16 ${textAlign} ${className} relative bg-content-bg/70 backdrop-blur-sm rounded-xl shadow-xl border border-accent-yellow-dark/20 my-16 md:my-20`}>
        <AnimatedBlock
          el="div"
          variants={blockquoteVariants}
          className="relative"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-accent-yellow-dark/10 via-accent-orange/5 to-transparent opacity-50 blur-lg"></div>
          <blockquote className="cormorant-garamond text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed text-text-primary">
            "{quote}"
          </blockquote>
          <cite className="cormorant-garamond mt-6 block text-lg font-semibold text-accent-orange md:text-xl">
            {citation}
          </cite>
        </AnimatedBlock>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`${textAlign} ${className}`}>
      <AnimatedBlock
        el="blockquote"
        variants={blockquoteVariants}
        className="text-xl sm:text-2xl lg:text-3xl italic opacity-90 py-10 border-t border-b border-accent-yellow-dark/30 max-w-3xl mx-auto"
      >
        <p>"{quote}"</p>
        <cite className="mt-4 block text-base not-italic opacity-70">{citation}</cite>
      </AnimatedBlock>
    </div>
  );
}
