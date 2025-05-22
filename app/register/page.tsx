import Image from "next/image";
import React from "react";

import { PatientForm } from "@/components/forms/PatientForm";
import { GradientText } from "@/components/ui/gradient-text";

const RegisterPage = () => {
  return (
    <section className="remove-scrollbar container my-auto bg-[#030303]">
      <div className="sub-container max-w-[496px]">
        <div className="flex items-center">
          <a href="#" className="shrink-0">
            <GradientText className="cinzel-decorative-bold pl-20 pr-5 text-2xl tracking-wide text-white md:text-4xl lg:text-5xl">
              AURA
            </GradientText>
          </a>
        </div>

        <PatientForm />

        {/* Consider if copyright/admin links are needed here or in a global footer */}
      </div>
    </section>
  );
};

export default RegisterPage;
