import Link from "next/link";
import { Package, Smartphone, Calendar, CheckCircle, Download, Info } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ROUTES } from "@/constants";

const ACTIVE_PACKAGES = [
  {
    id: 1,
    name: "Premium Learning Package",
    description: "Full access to all learning materials and practice tests",
    expiry: "Dec 31, 2024",
    feature: "Unlimited Access",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 2,
    name: "Advanced Test Prep",
    description: "Comprehensive test preparation with detailed analytics",
    expiry: "Nov 15, 2024",
    feature: "5000+ Questions",
    color: "bg-blue-100 text-blue-600",
  },
];

export default function MyPackagesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNavbar />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="mb-1 text-2xl font-extrabold text-gray-900">My Packages</h1>
        <p className="mb-8 text-sm text-gray-500">View and manage your learning packages</p>

        {/* Mobile App Banner */}
        <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-md">
            <Smartphone className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-bold text-blue-900">
              Learning Happens in the Mobile App
            </h2>
            <p className="mt-0.5 text-sm text-blue-700">
              Your purchased packages are activated and used inside the Testora mobile app. Download
              the app to access your content.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              <Download className="h-4 w-4" />
              Download Mobile App
            </button>
            <button className="rounded-xl border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100">
              Learn More
            </button>
          </div>
        </div>

        {/* Active Packages */}
        <section className="mb-8">
          <h2 className="mb-4 text-base font-bold text-gray-900">Active Packages</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {ACTIVE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <span className="absolute top-4 right-4 rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-semibold text-green-700">
                  Active
                </span>
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${pkg.color}`}
                >
                  <Package className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-gray-900">{pkg.name}</h3>
                <p className="mb-4 text-xs text-gray-500">{pkg.description}</p>
                <div className="mb-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Calendar className="h-3.5 w-3.5 text-gray-400" />
                    Expires {pkg.expiry}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    {pkg.feature}
                  </div>
                </div>
                <button className="group flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                  View Details
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Info Note */}
        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
          <p className="text-sm text-amber-800">
            <span className="font-semibold">How to use your packages:</span> Open the Testora mobile
            app, log in with this account, and your packages will be automatically activated. All
            learning content is accessible from within the app.
          </p>
        </div>

        {/* Need More Packages CTA */}
        <section className="rounded-2xl bg-linear-to-br from-blue-600 to-blue-500 p-8 text-center text-white shadow-lg">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <Package className="h-7 w-7 text-white" />
          </div>
          <h2 className="mb-2 text-xl font-extrabold">Need More Packages?</h2>
          <p className="mx-auto mb-6 max-w-sm text-sm text-blue-100">
            Explore our full range of learning packages designed to help you achieve your exam
            goals.
          </p>
          <Link
            href={ROUTES.PACKAGES}
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50"
          >
            Browse Packages
          </Link>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
