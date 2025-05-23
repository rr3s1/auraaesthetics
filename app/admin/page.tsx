import Link from "next/link";

import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { GradientText } from "@/components/ui/gradient-text";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="font-cormorant relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 py-12 text-white">
      {/* Floating Add Button */}
      <div className="fixed right-6 top-6 z-50">
        <Link href="/register">
          <button className="group relative rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-6 py-3 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
            <span className="relative z-10 text-sm font-semibold">+ Add New Appointment</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
          </button>
        </Link>
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col space-y-8">
          
          {/* Header Section */}
          <div className="flex items-center justify-center">
            <GradientText className="cinzel-decorative-bold text-2xl tracking-wide text-white md:text-4xl lg:text-5xl">
              AURA
            </GradientText>
          </div>

          {/* Improved Header Bar */}
          <div className="rounded-xl bg-gradient-to-r from-purple-900/80 via-indigo-900/70 to-pink-900/80 p-5 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
            <h1 className="font-merienda text-center text-3xl tracking-wide text-white">
              Appointments Dashboard
            </h1>
          </div>

          <main className="space-y-8">
            {/* Enhanced Status Summary Cards */}
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="group rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-2 text-5xl group-hover:animate-pulse">📅</div>
                <p className="text-4xl font-bold">{appointments.scheduledCount}</p>
                <p className="mt-2 text-lg font-light">Scheduled appointments</p>
              </div>
              
              <div className="group rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-2 text-5xl group-hover:animate-pulse">⏳</div>
                <p className="text-4xl font-bold">{appointments.pendingCount}</p>
                <p className="mt-2 text-lg font-light">Pending appointments</p>
              </div>
              
              <div className="group rounded-xl bg-gradient-to-br from-rose-600 to-red-800 p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-2 text-5xl group-hover:animate-pulse">⚠️</div>
                <p className="text-4xl font-bold">{appointments.cancelledCount}</p>
                <p className="mt-2 text-lg font-light">Cancelled appointments</p>
              </div>
            </section>

            {/* Enhanced Data Table */}
            <section className="rounded-xl bg-black/20 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
              <DataTable columns={columns} data={appointments.documents} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
