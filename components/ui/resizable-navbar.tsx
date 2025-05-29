"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { GradientText } from "./gradient-text";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

type NavbarButtonVariant = 'primary' | 'secondary' | 'dark';
type NavbarButtonAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
  variant?: NavbarButtonVariant;
  children: React.ReactNode;
};
type NavbarButtonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  className?: string;
  variant?: NavbarButtonVariant;
  children: React.ReactNode;
};
type NavbarButtonProps = NavbarButtonAnchorProps | NavbarButtonButtonProps;

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "hsla(38, 71%, 97%, 0.85)" // Pale Alabaster
          : "transparent",
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 0 5px rgba(253, 177, 16, 0.1), 0 0 15px rgba(245, 122, 8, 0.08), 0 4px 20px rgba(58, 58, 58, 0.07)"
          : "none",
        width: visible ? "min(95%, 1000px)" : "100%",
        minWidth: visible ? "min(95%, 600px)" : "100%",
        y: visible ? 20 : 0,
        borderRadius: visible ? "9999px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-5xl items-center justify-around self-start px-6 py-3 lg:flex",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex items-center justify-center space-x-1 text-lg lg:text-xl font-medium text-text-primary lg:space-x-2 uppercase",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="cormorant-garamond relative px-4 py-2.5 uppercase text-text-primary transition-colors duration-300 hover:text-accent-orange"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hoveredNavItem"
              className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent-yellow-dark to-accent-orange"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "hsla(38, 71%, 97%, 0.9)"
          : "transparent",
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 0 5px rgba(253, 177, 16, 0.1), 0 0 15px rgba(245, 122, 8, 0.08), 0 4px 15px rgba(58, 58, 58, 0.07)"
          : "none",
        width: "100%",
        borderRadius: visible ? "1rem" : "0px",
        y: visible ? 10 : 0,
        paddingRight: visible ? "12px" : "8px",
        paddingLeft: visible ? "12px" : "8px",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between py-2 px-2 lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      <div className="flex items-center">
        {React.Children.toArray(children)[0]}
      </div>
      <div className="flex items-center p-2">
        {React.Children.toArray(children)[1]}
      </div>
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-full mt-2 z-50 flex w-full flex-col items-start justify-start gap-3 rounded-xl bg-site-bg p-6 shadow-[0_8px_30px_rgba(245,122,8,0.15)] border border-accent-yellow-dark/20",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const iconStyles = "w-6 h-6 sm:w-7 sm:h-7 text-text-primary cursor-pointer";
  return (
    <div className="rounded-md p-1 transition-colors hover:bg-gray-100/50 active:bg-gray-200/50">
      {isOpen ? (
        <IconX className={iconStyles} onClick={onClick} />
      ) : (
        <IconMenu2 className={iconStyles} onClick={onClick} />
      )}
    </div>
  );
};

export const NavbarLogo = () => {
  return (
    <div className="inline-block">
      <GradientText
        className="cinzel-decorative-black py-0 text-xl font-black tracking-wider sm:text-2xl md:text-3xl lg:text-4xl"
        gradient="bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red"
      >
        AURA
      </GradientText>
    </div>
  );
};

export const NavbarButton = (props: NavbarButtonProps) => {
  const { href, children, className, variant = "primary", ...rest } = props;
  const baseStyles =
    "cormorant-garamond px-5 py-2.5 rounded-full text-lg lg:text-xl font-semibold relative cursor-pointer transition-all duration-300 ease-out inline-block text-center shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 uppercase";
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red text-white hover:from-accent-orange hover:to-accent-red-deep hover:scale-105 focus-visible:ring-accent-orange",
    secondary:
      "bg-transparent text-text-primary ring-1 ring-inset ring-accent-yellow-dark/50 hover:bg-accent-yellow-dark/10 hover:text-accent-orange focus-visible:ring-accent-yellow-dark",
    dark:
      "bg-text-primary text-site-bg hover:bg-opacity-90 focus-visible:ring-text-primary",
  };
  const appliedVariant = variantStyles[variant] || variantStyles.primary;

  if (href) {
    // Only pass anchor-allowed props
    const anchorAllowedProps: Record<string, unknown> = {};
    Object.entries(rest).forEach(([key, value]) => {
      // List of allowed anchor props (add more as needed)
      if ([
        'download', 'hrefLang', 'media', 'ping', 'target', 'type', 'rel', 'referrerPolicy', 'className', 'id', 'style', 'title', 'tabIndex', 'aria-label', 'aria-current', 'aria-describedby', 'aria-controls', 'aria-expanded', 'aria-haspopup', 'aria-hidden', 'role', 'onClick', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'children'
      ].includes(key)) {
        anchorAllowedProps[key] = value;
      }
    });
    return (
      <a
        href={href}
        className={cn(baseStyles, appliedVariant, className)}
        {...anchorAllowedProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={cn(baseStyles, appliedVariant, className)}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
}; 