import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <Link href="/" className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Admin Dashboard</h1>
      </header>

      <main className="admin-main">
        {/* TODO: Define animate-fadeIn in globals.css if not already present: @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fadeIn { animation: fadeIn 0.5s ease-in-out forwards; animation-delay: 0.2s; } */}
        <section className="w-full space-y-4 opacity-0 animate-fadeIn">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Welcome 👋</h1>
          <p className="text-md text-slate-600 dark:text-slate-400">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
