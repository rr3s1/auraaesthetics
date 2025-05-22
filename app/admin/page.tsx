import Image from "next/image";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="relative min-h-screen bg-[#030303]">
      {/* <HeroGeometric
        badge="Admin Dashboard"
        title1="System Overview"
        title2="Manage & Monitor"
      /> */}
      <div className="relative z-10 p-4 sm:p-6 bg-[#030303] md:p-8 text-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col bg-[#030303] space-y-14">
          <header className="admin-header">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/icons/logo-full.svg"
                height={32}
                width={162}
                alt="logo"
                className="h-8 w-fit"
              />
            </Link>

            <p className="text-16-semibold">Admin Dashboard</p>
          </header>

          <main className="admin-main bg-[#030303]">

            <section className="admin-stat">
              <StatCard
                type="appointments"
                count={appointments.scheduledCount}
                label="Scheduled appointments"
                icon={"/assets/icons/appointments.svg"}
              />
              <StatCard
                type="pending"
                count={appointments.pendingCount}
                label="Pending appointments"
                icon={"/assets/icons/pending.svg"}
              />
              <StatCard
                type="cancelled"
                count={appointments.cancelledCount}
                label="Cancelled appointments"
                icon={"/assets/icons/cancelled.svg"}
              />
            </section>

            <DataTable columns={columns} data={appointments.documents} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
