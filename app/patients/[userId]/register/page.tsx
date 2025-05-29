
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { NavbarComponent } from "@/components/ui/navigation/navbar";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="relative min-h-screen bg-site-bg">
       <NavbarComponent />
    
       
      
    
          <section className="remove-scrollbar container flex-1 bg-site-bg">
            <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
              
              
              <RegisterForm user={user} />

              <p className="copyright py-12 text-gray-400"> 2025 Aura Aesthetics</p>
            </div>
            
          </section>

        </div>
     
  );
};

export default Register;
