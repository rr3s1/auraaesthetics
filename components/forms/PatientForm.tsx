"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { MotionGradientButton } from "../ui/animations/animated-components";

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          
          <p className="text-dark-700 text-3xl font-bold mt-10 cormorant-garamond">Get started with appointments.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="+1 555 123 4567"
        />

        <MotionGradientButton
          type="submit"
          disabled={isLoading}
          variant="variant"
          className="cormorant-garamond min-w-[200px] px-6 py-3 text-lg sm:min-w-[220px] sm:px-8 sm:py-4 sm:text-xl md:min-w-[240px] md:px-10 md:py-5 md:text-2xl"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(200, 100, 255, 0.3)" 
          }}
          whileTap={{ scale: 0.95, boxShadow: "0px 2px 8px rgba(200, 100, 255, 0.2)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          REGISTER 
        </MotionGradientButton>
      </form>
    </Form>
  );
};
