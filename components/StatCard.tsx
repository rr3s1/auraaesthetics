import clsx from "clsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Loader2, XCircle } from 'lucide-react';

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
};

const iconComponents = {
  appointments: CalendarDays,
  pending: Loader2,
  cancelled: XCircle,
};

const iconColors = {
  appointments: "text-blue-500",
  pending: "text-amber-500",
  cancelled: "text-red-500",
};

export const StatCard = ({ count = 0, label, type }: StatCardProps) => {
  const LucideIcon = iconComponents[type];
  const colorClass = iconColors[type];

  return (
    <Card className={clsx(
      "transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl",
      "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm"
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {label}
        </CardTitle>
        <LucideIcon className={clsx("h-6 w-6", colorClass)} />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-slate-900 dark:text-slate-100">{count}</div>
      </CardContent>
    </Card>
  );
};
