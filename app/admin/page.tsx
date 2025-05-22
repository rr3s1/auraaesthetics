import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { GradientButton } from "@/components/ui/gradient-button";
import { GradientText } from "@/components/ui/gradient-text";
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
      <div className="relative z-10 bg-[#030303] p-4 text-gray-100 sm:p-6 md:p-8">
        <div className="mx-auto flex max-w-7xl flex-col space-y-14 bg-[#030303]">
          
          <div className="flex items-center bg-[#030303]">
            <a href="#" className="shrink-0">
              <GradientText className="cinzel-decorative-bold pl-20 pr-5 text-2xl tracking-wide text-white md:text-4xl lg:text-5xl">
                AURA
              </GradientText>
            </a>
          </div>

          <GradientButton className="scale-70 font-merienda text-xs tracking-widest md:text-4xl">
                 Appointments Dashboard
              </GradientButton>
         

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
