import { Variants } from 'framer-motion';

// Animation variants for the entire page
export const sectionContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased stagger for drama between major elements in a section
      delayChildren: 0.1,
    },
  },
};

export const dramaticTitleWordVariants: Variants = {
  hidden: { y: "100%", opacity: 0, skewY: 7 }, // Increased skew and y offset
  visible: {
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 80, // Softer spring for a more grand reveal
      damping: 20,
      duration: 1.2, // Longer duration
    },
  },
};

export const paragraphLineVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(3px)" }, // Added blur
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1.0], // More dramatic ease
    },
  },
};

export const imageDramaticRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75, filter: "brightness(0.5) saturate(0.5)" }, // Start smaller, desaturated, darker
  visible: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1) saturate(1)",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 1.5, // Longer duration for a majestic feel
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 17,
    },
  },
};

export const cardHoverEffect = {
  scale: 1.04,
  boxShadow: "0px 15px 35px -10px rgba(168, 85, 247, 0.4)", // More pronounced shadow
  transition: { type: 'spring', stiffness: 250, damping: 10 }
};

export const blockquoteVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, rotateX: -30 }, // Added 3D rotation
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      duration: 1.0,
    },
  },
};

export const simpleFadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const ctaButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.2 },
  },
  hover: {
    scale: 1.08, // More dramatic hover scale
    boxShadow: "0px 8px 25px rgba(168, 85, 247, 0.3)", // Purple shadow
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
  tap: { scale: 0.92 }
};

// Animation variants for the HeroContent component
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

export const titleWrapperVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

export const titleCharVariants: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
  hover: {
    y: -3,
    transition: { duration: 0.2 }
  }
};

export const paragraphVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

export const glowingSpanVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(4px) brightness(0.7)', scale: 0.85 },
  visible: {
    opacity: 1,
    filter: 'blur(0px) brightness(1)',
    scale: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 120,
      damping: 10,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    filter: 'blur(0px) brightness(1.15)',
    transition: { duration: 0.2, type: 'spring', stiffness: 300 },
  },
};

export const buttonWrapperVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 12, duration: 0.6 },
  },
};
