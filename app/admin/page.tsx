import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { NavbarComponent } from "@/components/ui/navigation/navbar";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

// Force dynamic rendering to avoid static generation issues with external API calls
export const dynamic = "force-dynamic";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  // Fallback to default values if appointments is undefined or null
  const appointmentData = appointments || {
    scheduledCount: 0,
    pendingCount: 0,
    cancelledCount: 0,
    documents: [],
  };

  return (
    <div className="font-cormorant bg-project-bg relative min-h-screen text-slate-600">
      {/* Floating Add Button */}
      <NavbarComponent />

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col space-y-8">
          
          {/* Improved Header Bar */}
       

          <main className="mt-32 space-y-8">
            {/* Enhanced Status Summary Cards */}
            <section className=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="group rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-2 text-5xl group-hover:animate-pulse">📅</div>
                <p className="text-4xl font-bold">{appointmentData.scheduledCount}</p>
                <p className="mt-2 text-lg font-light">Scheduled appointments</p>
              </div>
              
              <div className="group rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-2 text-5xl group-hover:animate-pulse">⏳</div>
                <p className="text-4xl font-bold">{appointmentData.pendingCount}</p>
                <p className="mt-2 text-lg font-light">Pending appointments</p>
              </div>
              
              <div className="group rounded-xl bg-gradient-to-br from-rose-600 to-red-800 p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-2 text-5xl group-hover:animate-pulse">⚠️</div>
                <p className="text-4xl font-bold">{appointmentData.cancelledCount}</p>
                <p className="mt-2 text-lg font-light">Cancelled appointments</p>
              </div>
            </section>

            {/* Enhanced Data Table */}
            <section className="rounded-xl bg-black/20 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
              <DataTable columns={columns} data={appointmentData.documents} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
