"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import { MotionGradientButton } from "../animations/animated-components";

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
        throw new Error("User creation did not return expected data.");
      }
    } catch (error) {
      console.error("Patient Form Submission Error:", error);
      setSubmissionStatus("error");
      if (error instanceof Error) {
        setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
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
    <div className="relative mx-auto my-12 max-w-2xl rounded-2xl border border-accent-yellow-dark/10 bg-gradient-to-br from-site-bg via-content-bg to-site-bg/90 p-8 shadow-2xl md:my-16 md:p-12">
      {/* Subtle background glows */}
      <div className="absolute inset-0 z-[-1] overflow-hidden rounded-2xl opacity-30">
        <div className="absolute -left-1/4 -top-1/4 size-full rounded-full bg-gradient-radial from-accent-yellow/20 to-transparent blur-[80px]" />
        <div className="absolute -bottom-1/4 -right-1/4 size-full rounded-full bg-gradient-radial from-accent-orange/15 to-transparent blur-[80px]" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <header className="mb-10 text-center">
            <h1 className="cinzel-decorative-bold mb-3 bg-gradient-to-r from-accent-yellow-dark via-accent-orange to-accent-red bg-clip-text text-3xl text-transparent md:text-4xl">
              Begin Your Aura Journey
            </h1>
            <p className="cormorant-garamond text-lg text-text-primary/85 md:text-xl">
              Secure your consultation and step towards radiant confidence.
            </p>
          </header>

          <fieldset className="space-y-6">
            <legend className="cormorant-garamond mb-4 border-b border-accent-yellow-dark/30 pb-2 text-xl font-semibold text-text-primary">
              Personal Details
            </legend>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="cormorant-garamond mb-2 block text-lg font-medium text-text-primary">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...form.register("name")}
                  className="w-full rounded-lg border border-accent-yellow-dark/30 bg-site-bg px-4 py-3 text-text-primary placeholder:text-text-primary/60 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50"
                  placeholder="e.g., Dr. Evelyn Reed"
                />
                {form.formState.errors.name && (
                  <p className="mt-1 text-sm text-accent-red">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="cormorant-garamond mb-2 block text-lg font-medium text-text-primary">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="w-full rounded-lg border border-accent-yellow-dark/30 bg-site-bg px-4 py-3 text-text-primary placeholder:text-text-primary/60 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50"
                  placeholder="e.g., e.reed@example.com"
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-sm text-accent-red">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="cormorant-garamond mb-2 block text-lg font-medium text-text-primary">
                  Primary Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...form.register("phone")}
                  className="w-full rounded-lg border border-accent-yellow-dark/30 bg-site-bg px-4 py-3 text-text-primary placeholder:text-text-primary/60 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50"
                  placeholder="(555) 123-AURA"
                />
                {form.formState.errors.phone && (
                  <p className="mt-1 text-sm text-accent-red">{form.formState.errors.phone.message}</p>
                )}
              </div>
            </div>
          </fieldset>

          <div className="pt-4">
            <MotionGradientButton
              type="submit"
              disabled={isLoading || submissionStatus === "success"}
              variant="ignitedRadiance"
              className="cormorant-garamond w-full min-w-[200px] px-6 py-3.5 text-xl font-semibold md:text-2xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 5px 20px rgba(245, 122, 8, 0.3)" 
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: "0px 2px 10px rgba(245, 122, 8, 0.2)" 
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  Processing...
                </div>
              ) : submissionStatus === "success" ? (
                "Registration Complete!"
              ) : (
                "Register & Book Consultation"
              )}
            </MotionGradientButton>
          </div>

          <AnimatePresence>
            {submissionStatus === "success" && (
              <motion.p
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-4 text-center text-lg font-medium text-accent-yellow-dark"
              >
                Thank you! Your journey with Aura has begun. We will be in touch shortly.
              </motion.p>
            )}
            {submissionStatus === "error" && (
              <motion.p
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-md mt-4 text-center font-medium text-accent-red"
              >
                Error: {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
}; 