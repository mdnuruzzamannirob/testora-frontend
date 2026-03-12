import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ROUTES } from "@/constants";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

const sizes = {
  sm: { box: "h-6 w-6", icon: "h-3.5 w-3.5", text: "text-xs" },
  md: { box: "h-8 w-8", icon: "h-4 w-4", text: "text-[15px]" },
  lg: { box: "h-10 w-10", icon: "h-5 w-5", text: "text-lg" },
};

export function Logo({ size = "md", className = "", asLink = true }: LogoProps) {
  const s = sizes[size];

  const inner = (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`flex items-center justify-center rounded-lg bg-linear-to-br from-teal-400 to-blue-500 ${s.box}`}
      >
        <GraduationCap className={`text-white ${s.icon}`} />
      </div>
      <span className={`font-extrabold tracking-widest text-gray-900 ${s.text}`}>Testora</span>
    </div>
  );

  if (asLink) {
    return <Link href={ROUTES.HOME}>{inner}</Link>;
  }
  return inner;
}
