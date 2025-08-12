"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TestimonialBlockquoteProps {
  quote: string;
  citation: string;
  className?: string; // For styling the blockquote element itself
  wrapperClassName?: string; // For styling the outer div wrapper
  quoteClassName?: string; // For specific styling of the quote text <p>
  citationClassName?: string; // For specific styling of the citation <cite>
  textAlign?: 'text-center' | 'text-left' | 'text-right';
}

export function TestimonialBlockquote({
  quote,
  citation,
  className = "",
  wrapperClassName = "",
  quoteClassName = "",
  citationClassName = "",
  textAlign = 'text-center'
}: TestimonialBlockquoteProps) {
  return (
    <div className={twMerge(`${textAlign}`, wrapperClassName)}>
      <blockquote className={twMerge(
        "py-10 border-t border-b border-accent-yellow-dark/30 max-w-3xl mx-auto",
        className
      )}>
        <p className={twMerge(
          "text-xl sm:text-2xl lg:text-3xl italic", 
          quoteClassName
        )}>
          "{quote}"
        </p>
        <cite className={twMerge(
          "mt-4 block text-base not-italic",
          "cormorant-garamond font-medium text-text-secondary",
          citationClassName
        )}>
          {citation}
        </cite>
      </blockquote>
    </div>
  );
}
