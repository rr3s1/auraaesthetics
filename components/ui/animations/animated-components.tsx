"use client";

import { motion, Variants } from 'framer-motion';
import React from 'react';

import { GradientButton } from "@/components/ui/gradient-button";

// Helper Component for Animating Text (Headings/Paragraphs)
export interface AnimatedTextProps {
  text: string; // Simple string text
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  variants: Variants;
  staggerAmount?: number;
  baseDelay?: number;
  splitter?: 'word' | 'line';
  highlightSpans?: React.ReactNode[]; // For pre-split text with styled spans
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Element = 'p',
  className,
  variants,
  staggerAmount = 0.05,
  baseDelay = 0,
  splitter = 'word',
  highlightSpans // If provided, text prop is ignored and this is used
}) => {
  const elementsToAnimate = highlightSpans 
    ? highlightSpans.map((span, i) => ({ id: i, content: span }))
    : (splitter === 'line' ? text.split('\n') : text.split(' ')).map((item, i) => ({ id: i, content: item }));

  const containerVariants: Variants = {
    hidden: { opacity: 1 }, // Parent doesn't fade, children do
    visible: {
      opacity: 1,
      transition: {
        delayChildren: baseDelay,
        staggerChildren: staggerAmount,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
      style={{ display: Element === 'span' ? 'inline-block' : 'block' }}
    >
      {elementsToAnimate.map((el, index) => (
        <span key={el.id} style={{ display: 'inline-block', overflow: 'hidden' }}> {/* For y: "100%" reveals */}
          <motion.span
            style={{ display: 'inline-block' }}
            variants={variants}
          >
            {el.content}
            {splitter === 'word' && !highlightSpans && index < elementsToAnimate.length - 1 ? '\u00A0' : ''}
          </motion.span>
          {splitter === 'line' && !highlightSpans && index < elementsToAnimate.length - 1 ? <br /> : ''}
        </span>
      ))}
    </motion.div>
  );
};

// Component for animating blocks of rich text (with existing spans)
export interface AnimatedBlockProps {
  children: React.ReactNode;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  variants: Variants;
  delay?: number;
  whileHover?: any;
  whileTap?: any;
}

export const AnimatedBlock: React.FC<AnimatedBlockProps> = ({
  children,
  el = 'div',
  className,
  variants,
  delay = 0,
  whileHover,
  whileTap
}) => {
  const Component = motion[el as keyof typeof motion] || motion.div;
  
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }} // Simplified transition with delay
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </Component>
  );
};

// Motion-compatible GradientButton
export const MotionGradientButton = motion(React.forwardRef<
  HTMLButtonElement, 
  { variant?: "default" | "variant" | null; className?: string; children: React.ReactNode; [key: string]: any }
>(({ variant, className, children, ...props }, ref) => {
  const GradientButtonWithRef = (
    <GradientButton
      ref={ref as any}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </GradientButton>
  );
  return GradientButtonWithRef;
}));
MotionGradientButton.displayName = 'MotionGradientButton';
