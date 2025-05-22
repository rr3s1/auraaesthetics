import Image from "next/image";
import React from "react";

import { PatientForm } from "@/components/forms/PatientForm";

const RegisterPage = () => {
  return (
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="CarePulse Logo"
          className="mb-12 h-10 w-fit"
        />

        <PatientForm />

        {/* Consider if copyright/admin links are needed here or in a global footer */}
      </div>
    </section>
  );
};

export default RegisterPage;
