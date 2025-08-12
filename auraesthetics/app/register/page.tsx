
import React from "react";

import { PatientForm } from "@/components/forms/PatientForm";
import { NavbarComponent } from '@/components/ui/navigation/navbar';

const RegisterPage = () => {
  return (
    <section className="remove-scrollbar container my-auto bg-site-bg">
      <NavbarComponent />
      <div className="sub-container max-w-[496px]">
       
        <PatientForm />

        {/* Consider if copyright/admin links are needed here or in a global footer */}
      </div>
    </section>
  );
};

export default RegisterPage;
