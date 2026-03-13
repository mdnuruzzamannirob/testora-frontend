import { ROUTES } from "@/constants";
import { Download, Monitor } from "lucide-react";
import Link from "next/link";
import Titlebar from "../common/Titlebar";

function CTA() {
  return (
    <section className="bg-blue-50/60 py-16 md:py-20">
      <div className="app-container rounded-xl bg-white py-16 text-center md:py-20">
        <Titlebar
          title="Start Preparing Today"
          description="Join thousands of students who are already achieving their exam goals with Testora"
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={ROUTES.REGISTER}
            className="from-primary to-primary2 hover:from-primary/90 hover:to-primary2/90 flex items-center gap-2 rounded-lg bg-linear-to-r px-5 py-3 text-sm font-medium text-white shadow-sm transition duration-200"
          >
            <Monitor className="h-4 w-4" />
            View Packages
          </Link>
          <button className="border-primary hover:bg-primary/5 text-primary flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-medium transition duration-200">
            <Download className="h-4 w-4" />
            Download App
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
