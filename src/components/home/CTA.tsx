import { ROUTES } from "@/constants";
import { ArrowRight, Monitor } from "lucide-react";
import Link from "next/link";

function CTA() {
  return (
    <section className="bg-linear-to-r from-teal-500 to-blue-600 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="mb-2 text-3xl font-extrabold text-white">Start Preparing Today</h2>
        <p className="mb-8 text-blue-100">
          Join thousands of students who are already achieving their exam goals with Testora
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={ROUTES.REGISTER}
            className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            <Monitor className="h-4 w-4" />
            View Packages
          </Link>
          <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            <ArrowRight className="h-4 w-4" />
            Download App
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
