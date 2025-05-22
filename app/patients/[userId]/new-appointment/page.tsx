import Image from "next/image";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="relative min-h-screen bg-[#030303]">
      <HeroGeometric
        badge={`New Appointment for ${patient?.name || 'Patient'}`}
        title1="Book Your Slot"
        title2="Quick & Easy Scheduling"
      />
      <div className="relative z-10 p-4 sm:p-6 md:p-8 text-gray-100 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="flex h-auto max-h-[calc(100vh-12rem)] w-full max-w-5xl bg-gray-900/50 p-6 rounded-lg shadow-xl">
          <section className="remove-scrollbar container my-auto flex-1">
            <div className="sub-container max-w-[860px] flex-1 justify-between">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="logo"
                className="mb-12 h-10 w-fit"
              />

              <AppointmentForm
                patientId={patient?.$id}
                userId={userId}
                type="create"
              />

              <p className="copyright mt-10 py-12 text-gray-400"> 2024 CarePluse</p>
            </div>
          </section>

          <Image
            src="/assets/images/appointment-img.png"
            height={1000}
            width={1000}
            alt="appointment"
            className="side-img max-w-[300px] md:max-w-[390px] bg-bottom object-cover rounded-md ml-4 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
