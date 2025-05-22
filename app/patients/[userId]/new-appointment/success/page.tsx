import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician,
  );

  return (
    <div className="relative min-h-screen bg-[#030303]">
      <HeroGeometric
        badge="Appointment Confirmed!"
        title1="Successfully Booked"
        title2="Your Health Journey Continues"
      />
      <div className="relative z-10 p-4 sm:p-6 md:p-8 text-gray-100 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg shadow-xl max-w-2xl w-full">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="logo"
              className="h-10 w-fit"
            />
          </Link>

          <section className="flex flex-col items-center text-center">
            <Image
              src="/assets/gifs/success.gif"
              height={300}
              width={280}
              alt="success"
            />
            <h2 className="header mb-6 max-w-[600px] text-center text-2xl sm:text-3xl font-bold">
              Your <span className="text-green-500"> appointment has</span>
              been successfully scheduled!
            </h2>
            <p className="text-gray-300">We&apos;ll be in touch shortly to confirm.</p>
          </section>

          <section className="request-details mt-6 w-full">
            <p className="text-gray-300 mb-2">Requested appointment details: </p>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src={doctor?.image!}
                alt="doctor"
                width={100}
                height={100}
                className="size-6"
              />
              <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/icons/calendar.svg"
                height={24}
                width={24}
                alt="calendar"
              />
              <p className="text-gray-300"> {formatDateTime(appointment.schedule).dateTime}</p>
            </div>

            <Button variant="outline" className="shad-primary-btn w-full" asChild>
              <Link href={`/patients/${userId}/new-appointment`}>
                New Appointment
              </Link>
            </Button>

            <p className="copyright mt-8 text-center text-gray-500"> 2024 CarePluse</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccess;
