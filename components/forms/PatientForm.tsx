"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form"; // ShadCN UI Form
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField"; // Your custom field
import { MotionGradientButton } from "../ui/animations/animated-components"; // Your animated button
// import { Loader2 } from "lucide-react"; // Optional, if you want a spinner

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    setSubmissionStatus(null);
    setErrorMessage("");

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };
      const newUser = await createUser(user);

      if (newUser) {
        setSubmissionStatus("success");
        setTimeout(() => {
          router.push(`/patients/${newUser.$id}/register`);
        }, 2000);
      } else {
        throw new Error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Patient Form Submission Error:", error);
      setSubmissionStatus("error");
      if (error instanceof Error) {
        setErrorMessage(error.message || "An unexpected error occurred.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      if (submissionStatus !== "success") {
        setIsLoading(false);
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    // Overall Page Structure - Assuming this form is embedded in a page that has the global background
    // For demonstration, we'll wrap it in a div that could represent the page content area.
    <div className="relative bg-site-bg py-16 md:py-24"> {/* Base Pale Alabaster for the section */}
      {/* Atmospheric Background Glows - consistent with other project sections */}
      <div className="absolute inset-0 z-[-1] overflow-hidden opacity-30 md:opacity-40">
        <div className="absolute -left-1/3 -top-1/4 size-full rounded-full bg-gradient-radial from-accent-yellow-dark/20 via-accent-orange/10 to-transparent blur-[100px]" />
        <div className="absolute -bottom-1/4 -right-1/3 size-full rounded-full bg-gradient-radial from-accent-red/15 via-accent-red-deep/5 to-transparent blur-[100px]" />
      </div>

      {/* Form Container with "Ignited Radiance" styling */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-xl rounded-2xl border border-accent-yellow-dark/15 bg-content-bg/80 p-8 shadow-2xl backdrop-blur-md md:p-12"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <header className="mb-8 text-center md:mb-10">
              <h1 className="cinzel-decorative-bold mb-3 bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-3xl text-transparent md:text-4xl">
                Schedule Your Consultation
              </h1>
              <p className="cormorant-garamond text-lg leading-relaxed text-text-primary/85 md:text-xl">
                Embark on your journey to renewed confidence.
              </p>
            </header>

            {/* CustomFormField styling will be crucial. Assuming it's adapted for light theme. */}
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="e.g., Alex Sterling"
              // Icons are kept as per original code - if they are dark on dark, they won't show.
              // For a light theme, icons should ideally be dark (e.g., text-text-primary) or an accent color.
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="e.g., alex.sterling@example.com"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Contact Phone Number"
              placeholder="(555) AURA-NOW"
            />

            <div className="pt-4">
              <MotionGradientButton
                type="submit"
                disabled={isLoading || submissionStatus === "success"}
                variant="ignitedRadiance" // **Ensure this variant is DEFINED and STYLED**
                className="cormorant-garamond w-full min-w-[200px] px-6 py-3.5 text-xl font-semibold md:text-2xl"
                // For "Ignited Radiance" variant, hover/tap should be:
                // whileHover={{
                //   scale: 1.05,
                //   boxShadow: "0px 6px 20px rgba(245, 122, 8, 0.35)" // Orange glow
                // }}
                // whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    {/* <Loader2 className="mr-2 h-5 w-5 animate-spin text-site-bg" /> */}
                    REGISTERING...
                  </div>
                ) : submissionStatus === "success" ? (
                  "SUCCESS!"
                ) : (
                  "REGISTER & BEGIN"
                )}
              </MotionGradientButton>
            </div>

            <AnimatePresence>
              {submissionStatus === "success" && (
                <motion.p
                  variants={messageVariants} initial="hidden" animate="visible" exit="exit"
                  className="mt-4 text-center text-lg font-medium text-accent-yellow-dark"
                >
                  Thank you! We&apos;ll be in touch shortly to confirm.
                </motion.p>
              )}
              {submissionStatus === "error" && (
                <motion.p
                  variants={messageVariants} initial="hidden" animate="visible" exit="exit"
                  className="text-md mt-4 text-center font-medium text-red-600" // Using a standard red for error for clarity
                >
                  Error: {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};