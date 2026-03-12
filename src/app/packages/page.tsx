import { Check, Monitor, ArrowRight } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ROUTES } from "@/constants";
import Link from "next/link";

const PACKAGES = [
  {
    name: "Semimatura Package",
    features: [
      "Subject-based questions",
      "Past exam tests",
      "Practice exams",
      "Detailed analytics",
      "Performance tracking",
    ],
    featured: false,
  },
  {
    name: "Matura Package",
    features: [
      "Comprehensive subject coverage",
      "Full exam simulations",
      "Select your study direction",
      "Progress monitoring",
    ],
    featured: false,
  },
  {
    name: "Entrance Exam Package",
    features: [
      "Faculty-specific content",
      "Preparation for university entrance exams",
      "Select your study direction",
      "Updated practice tests",
      "Targeted preparation",
      "Need your specific faculty after selecting",
    ],
    featured: false,
  },
  {
    name: "Full Access Package",
    badge: "POPULAR",
    features: [
      "Complete access to Testora",
      "Complete Matura preparation",
      "One reduced rate of choice",
      "Premium support",
    ],
    note: "Does not include Architecture or electives exquisit",
    featured: true,
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />

      {/* Hero banner */}
      <section className="border-b border-gray-100 py-14 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Exam Preparation Packages</h1>
          <p className="mt-3 text-sm text-gray-500">
            Choose the package that fits your exam preparation needs. All packages include mobile
            app access.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 rounded-lg border border-blue-300 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-100">
              <Monitor className="h-4 w-4" />
              Purchase on website / Learn in mobile app
            </button>
          </div>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Choose Your Package</h2>
            <p className="mt-2 text-sm text-gray-500">
              Select the package that best fits your exam preparation needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${
                  pkg.featured
                    ? "border-blue-500 bg-blue-600 text-white shadow-blue-200"
                    : "border-gray-100 bg-white"
                }`}
              >
                {"badge" in pkg && pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-gray-900">
                    {pkg.badge}
                  </span>
                )}
                <h3
                  className={`mb-4 text-base font-bold ${pkg.featured ? "text-white" : "text-gray-900"}`}
                >
                  {pkg.name}
                </h3>
                <ul className="mb-5 flex flex-1 flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? "text-blue-200" : "text-blue-500"}`}
                      />
                      <span className={pkg.featured ? "text-blue-100" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                {"note" in pkg && pkg.note && (
                  <p className="mb-3 text-xs text-blue-200">{pkg.note}</p>
                )}
                <button
                  className={`w-full rounded-lg py-2.5 text-sm font-semibold transition ${
                    pkg.featured
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "border border-blue-500 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-12">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="mb-2 text-2xl font-extrabold text-white">Ready to Start?</h2>
          <p className="mb-6 text-sm text-blue-100">
            Join thousands of students already using Testora to ace their exams.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={ROUTES.REGISTER}
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Get Started Free
            </Link>
            <button className="flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              <ArrowRight className="h-4 w-4" />
              Download App
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
