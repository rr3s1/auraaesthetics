"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "min-w-[132px] rounded-[11px] px-9 py-4",
    "text-base font-[500] leading-[19px] text-white",
    "font-sans font-bold",
    "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "",
        variant: "gradient-button-variant",
        goldenHourGlow: "gradient-button-golden-hour",
        ignitedRadiance: "gradient-button-ignited-radiance",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
  href?: string;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonContent = (
      <Comp
        className={cn(gradientButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );

    if (href) {
      return (
        <Link href={href} className="inline-block">
          {buttonContent}
        </Link>
      );
    }

    return buttonContent;
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
