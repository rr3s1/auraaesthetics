import Image from "next/image";
import Link from "next/link";
import { MdEvent, MdOutlineMailOutline, MdArrowForward, MdDashboard } from "react-icons/md"; // Added more icons

import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/ui/shape-landing-hero"; // Assuming this is for background
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { GradientText } from "@/components/ui/gradient-text";

// Placeholder for a small AURA logo mark, replace with your actual asset or remove
const AuraLogoMark = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-color-1">
    {/* Simple placeholder - replace with actual logo path or <GradientText>A</GradientText> */}
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.618L4.618 6.212 12 3.236l7.382 2.976L12 9.618zM2 17l10 5 10-5-10-5-10 5zm10 3.382L4.618 16.212 12 13.236l7.382 2.976L12 20.382z"/>
  </svg>
);


const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician,
  );

  // Fallback for doctor image if not found or invalid
  const doctorImageUrl = doctor?.image || "/assets/icons/user.svg"; // Ensure you have a fallback user icon

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
         <HeroGeometric /> {/* Assuming this renders some cool shapes */}
      </div>
      
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 py-10 sm:p-6 md:p-8">
        <div className="w-full max-w-3xl rounded-xl bg-black/70 backdrop-blur-lg shadow-2xl ring-1 ring-gray-700/50">
          {/* Header Section */}
          <div className="flex flex-col items-center space-y-4 border-b border-gray-700/50 p-6 sm:p-8">
            {/* You can use an actual logo image here */}
            {/* <Image src="/assets/icons/aura-logo-mark.svg" alt="AURA" width={50} height={50} /> */}
            <div className="flex items-center space-x-2">
              <AuraLogoMark />
              <GradientText className="cinzel-decorative-bold text-2xl tracking-wider">
                AURA
              </GradientText>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/gifs/success.gif" // Ensure this GIF has a transparent or suitable background
                height={180} // Adjusted size
                width={180}  // Adjusted size
                alt="Success Animation"
                unoptimized // GIFS are often better unoptimized by Next/Image
              />
            </div>
            <h1 className="cinzel-decorative-bold text-center text-3xl sm:text-4xl">
              <GradientText from="text-green-400" to="text-emerald-500">
                Appointment Confirmed!
              </GradientText>
            </h1>
            <p className="cormorant-garamond max-w-lg text-center text-lg text-gray-300">
              Your request has been successfully processed. We're excited to welcome you.
            </p>
          </div>

          {/* Appointment Details Section */}
          <div className="cinzel-decorative p-6 sm:p-8">
            <h2 className="mb-6 text-center text-xl font-semibold tracking-wide text-gray-100 sm:text-left">
              Your Appointment Details
            </h2>
            
            <div className="space-y-5 rounded-lg border border-gray-700/50 bg-gray-800/30 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-gray-400">Appointment ID:</p>
                <p className="font-mono text-sm text-color-2">{appointmentId}</p>
              </div>
              <hr className="border-gray-700/50" />
              <div className="flex items-center gap-4">
                <Image
                  src={doctorImageUrl}
                  alt={`Dr. ${doctor?.name || 'N/A'}`}
                  width={64} // Larger image
                  height={64}
                  className="size-16 rounded-full border-2 border-color-1/50 object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-100">Dr. {doctor?.name || 'Not Specified'}</p>
                  <p className="text-sm text-gray-400">Primary Physician</p>
                </div>
              </div>
              <hr className="border-gray-700/50" />
              <div className="flex items-center gap-3">
                <MdEvent className="size-7 text-color-3" />
                <div>
                  <p className="text-lg font-semibold text-gray-100">
                    {formatDateTime(appointment.schedule).date}
                  </p>
                  <p className="text-sm text-gray-400">
                    at {formatDateTime(appointment.schedule).time}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions and Next Steps Section */}
          <div className="border-t border-gray-700/50 p-6 sm:p-8">
            <h3 className="cinzel-decorative-bold mb-6 text-center text-xl font-semibold tracking-wide text-gray-100">
              What's Next?
            </h3>
            <div className="space-y-4">
              <p className="cormorant-garamond flex items-center justify-center gap-2 text-center text-gray-300">
                <MdOutlineMailOutline className="size-5 text-color-1" />
                A confirmation email has been sent to your registered address.
              </p>
              
              <Button 
                variant="default" // Assuming default is your primary styled button
                className="w-full cinzel-decorative-bold bg-gradient-to-r from-color-1/80 to-color-2/80 py-3 text-lg text-white transition-all hover:from-color-1 hover:to-color-2 hover:shadow-lg hover:shadow-color-1/30"
                asChild
              >
                <Link href={`/patients/${userId}/new-appointment`}>
                  Book Another Appointment
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full cinzel-decorative border-gray-600 py-3 text-lg text-gray-300 hover:border-color-3 hover:text-color-3 hover:bg-color-3/10"
                asChild
              >
                <Link href={`/patients/${userId}/appointments`}> {/* Example link */}
                  View My Appointments <MdArrowForward className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/" className="cormorant-garamond text-sm text-gray-400 hover:text-color-1 hover:underline">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccess;