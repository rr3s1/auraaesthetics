import Image from "next/image";
import { redirect } from "next/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="relative min-h-screen bg-[#030303]">
      <HeroGeometric
        badge="Patient Registration"
        title1="Complete Your Profile"
        title2="Access Personalized Care"
      />
      <div className="relative z-10 p-4 sm:p-6 md:p-8 text-gray-100 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="flex h-auto max-h-[calc(100vh-12rem)] w-full max-w-5xl bg-gray-900/50 p-6 rounded-lg shadow-xl">
          <section className="remove-scrollbar container flex-1">
            <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />

              <RegisterForm user={user} />

              <p className="copyright py-12 text-gray-400"> 2024 CarePluse</p>
            </div>
          </section>

          <Image
            src="/assets/images/register-img.png"
            height={1000}
            width={1000}
            alt="patient"
            className="side-img max-w-[300px] md:max-w-[390px] bg-bottom object-cover rounded-md ml-4 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
