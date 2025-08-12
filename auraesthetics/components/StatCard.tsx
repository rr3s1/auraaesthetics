import Image from "next/image";

import { cn } from "@/lib/utils";

interface StatCardProps {
  count?: number;
  label: string;
  icon: string;
  type?: "appointments" | "pending" | "cancelled";
}

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  // Define style objects for each type of card
  const cardStyles = {
    appointments: {
      "--gb-color-1": "#1a7a4c",
      "--gb-color-2": "#0d3d26",
      "--gb-color-3": "#25b06b",
      "--gb-color-4": "#083f21",
      "--gb-color-5": "#051b10",
    } as React.CSSProperties,
    
    pending: {
      "--gb-color-1": "#ff8c38",
      "--gb-color-2": "#e56717",
      "--gb-color-3": "#cc7d23",
      "--gb-color-4": "#9c4f00",
      "--gb-color-5": "#6b3600",
    } as React.CSSProperties,
    
    cancelled: {
      "--gb-color-1": "#c41e3a",
      "--gb-color-2": "#a01a2f",
      "--gb-color-3": "#800000",
      "--gb-color-4": "#5c0000",
      "--gb-color-5": "#3b0000",
    } as React.CSSProperties,
  };

  return (
    <div
      className={cn(
        "gradient-button opacity-90 stat-card rounded-[11px] min-w-[132px] px-4 py-3",
        "relative"
      )}
      style={type ? cardStyles[type] : {}}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={45}
          width={45}
          alt={label}
          className="size-8 w-fit"
        />
        <h2 className="font-bold text-slate-900 lg:text-[65px]">{count}</h2>
      </div>

      <p className="font-bold text-white lg:text-[25px]">{label}</p>
    </div>
  );
};
