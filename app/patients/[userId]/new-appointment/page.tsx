import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { getPatient } from "@/lib/actions/patient.actions";
import { GradientText } from "@/components/ui/gradient-text";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]">
    
      <div className="relative z-10 flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center p-4 text-gray-100 sm:p-6 md:flex-row md:p-8">
        <div className="flex h-auto max-h-[calc(100vh-12rem)] w-full max-w-5xl rounded-lg bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] p-6 shadow-xl">
          <section className="remove-scrollbar container my-auto flex-1">
            <div className="sub-container max-w-[860px] flex-1 justify-between">
             

              <AppointmentForm
                patientId={patient?.$id}
                userId={userId}
                type="create"
              />

              <p className="copyright mt-10 py-12 text-gray-400"> 2025 Aura Aesthetics</p>
            </div>
          </section>
         
        </div>
      </div>
    </div>
  );
};

export default Appointment;
