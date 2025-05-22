import Image from "next/image";
import Link from "next/link";

import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="text-center">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="CarePulse Logo"
              className="mx-auto mb-12 h-10 w-fit"
            />
            <h1 className="header mb-6 text-4xl font-bold">
              Welcome to CarePulse!
            </h1>
            <p className="mb-8 text-lg text-dark-700">
              Streamlining healthcare appointments for patients and providers.
              Join us to experience seamless medical scheduling and care.
            </p>
            <Link
              href="/register"
              className="shad-primary-btn mb-10 inline-block px-6 py-3 text-lg"
            >
              Get Started Now
            </Link>
          </div>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; 2024 CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
