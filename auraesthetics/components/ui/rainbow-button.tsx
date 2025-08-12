import React from "react";

import { cn } from "@/lib/utils";
interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "purple";
}

export function RainbowButton({
  children,
  className,
  variant = "default",
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // Glow effect styles - positioned behind the button with even distribution
        "after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:animate-rainbow after:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] after:bg-[length:200%] after:blur-md after:opacity-70 after:rounded-xl after:scale-[1.02]",
        
        // Border gradient effect
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:animate-rainbow before:content-[''] before:-z-[5]",

        // Variant-specific background styles
        variant === "default" && [
          // Default light mode colors
          "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
          // Default dark mode colors
          "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        ],
        
        variant === "purple" && [
          // Purple light mode colors
          "bg-[linear-gradient(#7c3aed,#7c3aed),linear-gradient(#7c3aed_50%,rgba(124,58,237,0.6)_80%,rgba(124,58,237,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
          "hover:bg-[linear-gradient(#6d28d9,#6d28d9),linear-gradient(#6d28d9_50%,rgba(109,40,217,0.6)_80%,rgba(109,40,217,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
          // Purple dark mode colors
          "dark:bg-[linear-gradient(#7c3aed,#7c3aed),linear-gradient(#7c3aed_50%,rgba(124,58,237,0.6)_80%,rgba(124,58,237,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
          "dark:hover:bg-[linear-gradient(#6d28d9,#6d28d9),linear-gradient(#6d28d9_50%,rgba(109,40,217,0.6)_80%,rgba(109,40,217,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        ],

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
