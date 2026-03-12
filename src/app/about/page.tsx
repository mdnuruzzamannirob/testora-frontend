import { Brain, Monitor, Check, ArrowRight } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ROUTES } from "@/constants";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />

      {/* Hero */}
      <section className="bg-blue-50/60 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold text-gray-900">About Testora</h1>
          <p className="mt-4 text-base text-gray-500">
            Testora is Kosovo&apos;s leading educational platform dedicated to helping students
            excel in their most important exams through comprehensive preparation tools and
            resources.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                <Brain className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="mb-2 text-lg font-bold text-gray-900">Our Mission</h2>
              <p className="text-sm text-gray-500">
                We believe that every student deserves access to high-quality exam preparation
                resources. Testora was created to bridge the gap between traditional education and
                modern learning needs, providing students with the tools they need to succeed in
                Semi-Matura, Matura, and university entrance examinations.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Our platform combines expert-designed content, interactive practice tests, and
                comprehensive study materials to create a learning experience that is both effective
                and engaging. We understand the pressure students face, and we&apos;re committed to
                making exam preparation more accessible, structured, and results-oriented.
              </p>
            </div>
            <div className="rounded-xl border border-teal-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100">
                <Monitor className="h-5 w-5 text-teal-600" />
              </div>
              <h2 className="mb-2 text-lg font-bold text-gray-900">Our Vision</h2>
              <p className="text-sm text-gray-500">
                To become the leading educational technology platform for transforming how students
                in Kosovo and the region prepare for their most important exams — making
                high-quality preparation accessible to every student regardless of location or
                background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section className="bg-gray-50/70 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            What We Support
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                num: 1,
                title: "Semi-Matura Preparation",
                desc: "Complete preparation materials for the Semi-Matura examination, including practice tests, study guides, and topic-specific resources covering all required subjects.",
              },
              {
                num: 2,
                title: "Matura Examination",
                desc: "Comprehensive support for Matura exam preparation with updated content aligned with current examination standards including past papers and realistic simulations.",
              },
              {
                num: 3,
                title: "University Entrance Exams",
                desc: "Specialized preparation for university entrance examinations across multiple faculties, helping students secure admission to their preferred programs.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-5 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {item.num}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Focused Preparation",
                desc: "Comprehensive exam preparation tailored specifically for Semi-Matura, complete Matura and university entrance exams in Kosovo.",
              },
              {
                icon: "🎓",
                title: "Student-Centered",
                desc: "Built by educators who understand the challenges students face and designed to make exam preparation accessible and effective.",
              },
              {
                icon: "📈",
                title: "Proven Results",
                desc: "Trusted by thousands of students across Kosovo to improve their exam performance and achieve their academic goals.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <span className="mb-3 block text-3xl">{v.icon}</span>
                <h3 className="mb-2 font-bold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Testora Works CTA */}
      <section className="bg-blue-600 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-6 text-xl font-bold text-white">How Testora Works</h2>
          <ol className="mb-8 flex flex-col gap-3">
            {[
              "Browse and purchase exam preparation packages on our website.",
              "Download the Testora mobile app on your device.",
              "Access your purchased content including tests, quizzes, and study materials.",
              "Practice regularly, track your progress, and prepare effectively for exam day.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                <span className="mt-0.5 font-bold text-white">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3">
            <Link
              href={ROUTES.PACKAGES}
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              <Monitor className="h-4 w-4" />
              View Packages
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
