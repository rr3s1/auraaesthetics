import Image from "next/image";
import { motion } from "framer-motion";

import { GradientButton } from "./ui/gradient-button"; 

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "variant" | null; 
}

const MotionEnabledGradientButton = motion(GradientButton); 

const SubmitButton = ({ isLoading, className, children, variant }: ButtonProps) => {
  const motionSpecificClasses =
    "cormorant-garamond min-w-[200px] px-6 py-3 text-lg sm:min-w-[220px] sm:px-8 sm:py-4 sm:text-xl md:min-w-[240px] md:px-10 md:py-5 md:text-2xl";

  const baseClasses = className ?? "shad-primary-btn w-full";
  const finalClassName = `${baseClasses} ${motionSpecificClasses}`;

  return (
    <MotionEnabledGradientButton
      type="submit"
      disabled={isLoading}
      className={finalClassName}
      variant={variant ?? "variant"} 
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)",
      }}
      whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </MotionEnabledGradientButton>
  );
};

export default SubmitButton;
