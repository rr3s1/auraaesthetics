import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

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
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-blue-start via-primary-green to-gradient-teal-end px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full max-w-2xl rounded-xl bg-neutral-light-gray/90 p-8 text-center shadow-2xl backdrop-blur-md dark:bg-neutral-dark-gray/90">
        <Link href="/" className="mb-8 inline-block">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={150}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={160}
            width={150}
            alt="success"
            className="mx-auto mb-6 rounded-lg"
          />
          <h2 className="mb-4 text-3xl font-bold text-neutral-dark-gray dark:text-neutral-light-gray sm:text-4xl">
            Your <span className="text-primary-green">appointment has</span>
            been successfully scheduled!
          </h2>
          <p className="mb-8 text-lg text-neutral-medium-gray dark:text-neutral-light-gray/90">
            We&apos;ll be in touch shortly to confirm.
          </p>
        </section>

        <section className="mb-8 rounded-lg bg-white/50 p-6 dark:bg-black/30">
          <h3 className="mb-4 text-xl font-semibold text-neutral-dark-gray dark:text-neutral-light-gray">
            Requested Appointment Details:
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center text-sm text-neutral-medium-gray dark:text-neutral-light-gray/90">
              <Image
                src={doctor?.image!}
                alt="doctor"
                width={24}
                height={24}
                className="mr-3 size-6 rounded-full"
              />
              <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
            </div>
            <div className="flex items-center text-sm text-neutral-medium-gray dark:text-neutral-light-gray/90">
              <Image
                src="/assets/icons/calendar.svg"
                height={24}
                width={24}
                alt="calendar"
                className="mr-3 size-6"
              />
              <p>{formatDateTime(appointment.schedule).dateTime}</p>
            </div>
          </div>
        </section>

        <Button
          asChild
          className="w-full rounded-lg bg-primary-green px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-300 ease-in-out hover:bg-primary-green/90 focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:ring-offset-2 sm:w-auto"
        >
          <Link href={`/patients/${userId}/new-appointment`}>
            Book Another Appointment
          </Link>
        </Button>

        <p className="copyright mt-10 text-xs text-neutral-medium-gray dark:text-neutral-light-gray/70">
          {new Date().getFullYear()} CarePulse
        </p>
      </div>
    </div>
  );
};

export default RequestSuccess;
