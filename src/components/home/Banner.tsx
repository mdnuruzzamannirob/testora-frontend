import Link from "next/link";
import { ROUTES } from "@/constants";
import { Monitor } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
          {/* Left text */}
          <div className="flex-1">
            <h1 className="text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl">
              Master Your Exams with{" "}
              <span className="bg-linear-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                Testora
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-gray-500">
              Comprehensive preparation platform for Semimatura, Matura, and University Entrance
              exams. Practice with thousands of questions, take full exam simulations, and track
              your progress.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={ROUTES.REGISTER}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <Monitor className="h-4 w-4" />
                View Packages
              </Link>
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 18.5L7 15V9l5-3 5 3v6l-5 3.5z" />
                </svg>
                Download App
              </button>
            </div>
          </div>
          {/* Right phone mockup */}
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="relative h-105 w-52.5 overflow-hidden rounded-[36px] border-[7px] border-gray-800 bg-gray-800 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-600" />
              <div className="absolute inset-0 flex flex-col gap-3 px-4 py-5">
                <div className="h-5 w-3/4 rounded-md bg-white/30" />
                <div className="h-32 w-full rounded-xl bg-white/20" />
                <div className="h-3 w-1/2 rounded bg-white/25" />
                <div className="h-3 w-2/3 rounded bg-white/25" />
                <div className="mt-1 h-10 w-full rounded-xl bg-blue-300/30" />
                <div className="h-3 w-1/3 rounded bg-white/25" />
                <div className="flex gap-2">
                  <div className="h-14 flex-1 rounded-xl bg-teal-400/40" />
                  <div className="h-14 flex-1 rounded-xl bg-indigo-400/40" />
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
