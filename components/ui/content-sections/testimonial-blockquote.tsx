"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';

import { AnimatedBlock } from '../animations/animated-components';
import { blockquoteVariants, simpleFadeInUp } from '../animations/animation-variants';

interface TestimonialBlockquoteProps {
  quote: string;
  citation: string;
  className?: string; // For styling the blockquote element itself
  wrapperClassName?: string; // For styling the outer div wrapper
  quoteClassName?: string; // For specific styling of the quote text <p>
  citationClassName?: string; // For specific styling of the citation <cite>
  variant?: 'default' | 'ignited-statement' | 'client-highlight';
  textAlign?: 'text-center' | 'text-left' | 'text-right';
}

export function TestimonialBlockquote({
  quote,
  citation,
  className = "",
  wrapperClassName = "",
  quoteClassName = "",
  citationClassName = "",
  variant = 'default',
  textAlign = 'text-center'
}: TestimonialBlockquoteProps) {
  // Split quote for potential multi-line gradient in 'ignited-statement'
  const quoteParts = quote.split(/,|\./);
  const firstSeparatorIndex = quote.search(/[,\.]/);
  let firstPart = quote;
  let secondPart = "";

  if (firstSeparatorIndex !== -1) {
    firstPart = quote.substring(0, firstSeparatorIndex + 1);
    secondPart = quote.substring(firstSeparatorIndex + 1).trim();
  }

  if (variant === 'ignited-statement') {
    return (
      <div className={twMerge(`py-20 md:py-28 ${textAlign} relative`, wrapperClassName)}>
        <AnimatedBlock
          el="div"
          variants={simpleFadeInUp}
          className="relative"
        >
          {/* Background glow for statement */}
          <div className="absolute inset-x-0 top-0 bottom-1/4 z-[-1] opacity-20 md:opacity-25">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-accent-yellow-dark/30 via-accent-orange/15 to-transparent filter blur-[100px]"></div>
          </div>
          <blockquote className={twMerge("mx-auto max-w-5xl", className)}>
            <h2 className={twMerge("cinzel-decorative-bold text-4xl md:text-5xl lg:text-6xl leading-tight", quoteClassName)}>
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
          <cite className={twMerge("cormorant-garamond mt-8 block text-xl font-medium italic text-accent-orange md:mt-10 md:text-2xl", citationClassName)}>
            {citation}
          </cite>
        </AnimatedBlock>
      </div>
    );
  }

  if (variant === 'client-highlight') {
    return (
      <div className={twMerge(`mx-auto max-w-3xl px-6 py-12 md:py-16 ${textAlign} relative bg-content-bg/70 backdrop-blur-sm rounded-xl shadow-xl border border-accent-yellow-dark/20 my-16 md:my-20`, wrapperClassName)}>
        <AnimatedBlock
          el="div"
          variants={blockquoteVariants}
          className="relative"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-accent-yellow-dark/10 via-accent-orange/5 to-transparent opacity-50 blur-lg"></div>
          <blockquote className={twMerge("cormorant-garamond text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed text-text-primary", className, quoteClassName)}>
            "{quote}"
          </blockquote>
          <cite className={twMerge("cormorant-garamond mt-6 block text-lg font-semibold text-accent-orange md:text-xl", citationClassName)}>
            {citation}
          </cite>
        </AnimatedBlock>
      </div>
    );
  }

  // Default variant - REFINED
  return (
    <div className={twMerge(`${textAlign}`, wrapperClassName)}>
      <AnimatedBlock
        el="blockquote"
        variants={blockquoteVariants}
        className={twMerge(
          // Base styles for the default blockquote element
          "italic opacity-90 py-10 border-t border-b border-accent-yellow-dark/30 max-w-3xl mx-auto",
          // User-provided className to customize/override the blockquote
          className
        )}
      >
        <p className={twMerge(
            // Default text size for quote, can be overridden if className prop includes text size
            "text-xl sm:text-2xl lg:text-3xl", 
            // Inherits font family, color, etc., from the blockquote's className
            quoteClassName
        )}>
          "{quote}"
        </p>
        <cite className={twMerge(
            // Default citation styles
            "mt-4 block text-base not-italic opacity-70",
            // Specific font for citation to make it softer and more distinct
            "cormorant-garamond font-medium text-text-secondary", // Use Cormorant, medium weight, secondary text color
            citationClassName
        )}>
          {citation}
        </cite>
      </AnimatedBlock>
    </div>
  );
}
