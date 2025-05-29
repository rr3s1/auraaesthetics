"use client"
import React from "react";

import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  gradient?: string; // Optional: allow custom gradient
}

function GradientText({
  className,
  children,
  as: Component = "span",
  gradient,
  ...props
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "relative inline-block bg-white px-7 overflow-visible", // more padding, allow overflow
        "bg-clip-text text-transparent",
        gradient || "bg-gradient-to-r from-pink-600 via-orange-400 to-green-500", // fallback gradient
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export { GradientText }
