import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import { GradientText } from "@/components/ui/gradient-text";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="relative min-h-screen bg-[#030303]">
      
    
       
      
    
          <section className="remove-scrollbar container flex-1 bg-black">
            <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
              <div className="flex items-center">
                <a href="#" className="shrink-0">
                  <GradientText className="cinzel-decorative-bold pl-20 pr-5 text-2xl tracking-wide text-white md:text-4xl lg:text-5xl">
                    AURA
                  </GradientText>
                </a>
              </div>
              
              <RegisterForm user={user} />

              <p className="copyright py-12 text-gray-400"> 2025 Aura Aesthetics</p>
            </div>
            
          </section>

        </div>
     
  );
};

export default Register;
