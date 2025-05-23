"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentModal } from "../AppointmentModal";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium text-gray-400">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium font-semibold text-white">{appointment.patient.name}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;
      const statusConfig = {
        scheduled: {
          bg: "bg-emerald-900/80",
          text: "text-emerald-300",
          ring: "ring-emerald-500/30",
          icon: "✅"
        },
        pending: {
          bg: "bg-amber-900/80", 
          text: "text-amber-300",
          ring: "ring-amber-500/30",
          icon: "⏳"
        },
        cancelled: {
          bg: "bg-red-900/80",
          text: "text-red-300", 
          ring: "ring-red-500/30",
          icon: "⚠️"
        }
      };
      
      const config = statusConfig[appointment.status as keyof typeof statusConfig] || statusConfig.pending;
      
      return (
        <div className="min-w-[115px]">
          <span className={`inline-flex items-center gap-1 rounded-full ${config.bg} px-3 py-1 text-xs font-medium ${config.text} shadow-inner ring-1 ${config.ring} backdrop-blur-sm`}>
            {config.icon} {appointment.status}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px] text-gray-300">
          {formatDateTime(appointment.schedule).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: "Doctor",
    cell: ({ row }) => {
      const appointment = row.original;

      const doctor = Doctors.find(
        (doctor) => doctor.name === appointment.primaryPhysician,
      );

      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image!}
            alt="doctor"
            width={100}
            height={100}
            className="size-8 rounded-full ring-2 ring-white/20"
          />
          <p className="whitespace-nowrap text-gray-200">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="flex gap-3">
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="schedule"
            title="Schedule Appointment"
            description="Please confirm the following details to schedule."
          />
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="cancel"
            title="Cancel Appointment"
            description="Are you sure you want to cancel your appointment?"
          />
        </div>
      );
    },
  },
];
