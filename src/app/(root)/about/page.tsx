import {
  Monitor,
  CheckCircle,
  Download,
  GraduationCap,
  Target,
  Users,
  Activity,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";

export default function AboutPage() {
  return (
    <section className="flex-1 bg-slate-50">
      <PageHero
        title="About Testora"
        description="Testora is Kosovo's leading educational platform dedicated to helping students excel in their most important exams through comprehensive preparation tools and resources."
      />

      <div className="app-container flex flex-col gap-6 py-10">
        {/* Our Mission */}
        <div className="border-l-primary rounded-xl border border-l-[3px] bg-white p-6">
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-blue-50">
            <GraduationCap className="text-primary size-4.5" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Our Mission</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-500">
            Our mission is to help students prepare better for the exams that shape their academic
            future.
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Practice tests based on real exam structures",
              "Subject-based quizzes for quick practice",
              "Organized learning materials",
              "The ability to track progress during preparation",
            ].map((item) => (
              <li
                key={item}
                className="before:bg-primary relative pl-4 text-[13.5px] leading-snug text-slate-500 before:absolute before:top-1.75 before:left-0 before:size-1.25 before:rounded-full before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What We Support */}
        <div className="rounded-xl border bg-white p-6">
          <h2 className="mb-1.5 text-lg font-semibold text-slate-900">What We Support</h2>
          <p className="mb-5 text-sm text-slate-400">
            Three key academic milestones we prepare students for.
          </p>
          <div className="flex flex-col gap-5">
            {[
              {
                num: 1,
                title: "Semi-Matura Preparation",
                desc: "Practice materials and tests that help students understand the structure of the Semi-Matura exam and improve their knowledge in key subjects.",
              },
              {
                num: 2,
                title: "Matura Examination",
                desc: "Structured preparation for the national Matura exam through quizzes, practice tests, and study materials that help students feel more confident.",
              },
              {
                num: 3,
                title: "University Entrance Exams",
                desc: "Preparation for university entrance exams across different faculties through practice questions that reflect real admission test structures.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4">
                <div className="bg-primary mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white">
                  {num}
                </div>
                <div>
                  <h4 className="mb-1 text-[14.5px] font-semibold text-slate-900">{title}</h4>
                  <p className="text-[13px] leading-relaxed text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h2 className="mb-4 text-center text-xl font-semibold text-slate-900">Our Values</h2>
          <div className="grid grid-cols-3 gap-3.5">
            {[
              {
                icon: <Target className="text-primary size-4" />,
                title: "Focused Preparation",
                desc: "Designed to help students focus on questions and topics that matter most for real exams.",
              },
              {
                icon: <Users className="text-primary size-4" />,
                title: "Built for Students",
                desc: "Every feature is crafted to make exam preparation simpler and easier to understand.",
              },
              {
                icon: <Activity className="text-primary size-4" />,
                title: "Real Results",
                desc: "Track progress and better understand preparation levels through actionable insights.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl border bg-white p-5">
                <div className="mb-3 flex size-8 items-center justify-center rounded-[8px] bg-blue-50">
                  {icon}
                </div>
                <h4 className="mb-1.5 text-[13.5px] font-semibold text-slate-900">{title}</h4>
                <p className="text-[12px] leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Students Choose */}
        <div className="border-l-primary rounded-2xl border border-l-[3px] bg-white px-7 py-6">
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-blue-50">
            <CheckCircle className="text-primary size-4.5" />
          </div>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Why Students Choose Testora</h2>
          <ul className="flex flex-col gap-2">
            {[
              "Practice questions based on real exam structures",
              "Learning content organized by subjects",
              "Progress tracking during preparation",
              "Access through both web and mobile app",
            ].map((item) => (
              <li
                key={item}
                className="before:bg-primary relative pl-4 text-[13.5px] leading-snug text-slate-500 before:absolute before:top-1.75 before:left-0 before:size-1.25 before:rounded-full before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* How It Works */}
        <div className="via-primary from-primary to-primary2 rounded-2xl bg-linear-to-br p-7">
          <h2 className="mb-5 text-lg font-semibold text-white">How Testora Works</h2>
          <ol className="mb-6 flex flex-col gap-2.5">
            {[
              "Choose the preparation package for the exam you want.",
              "Download the Testora mobile application.",
              "Log into your account and access quizzes, tests, and materials.",
              "Practice regularly and track your progress.",
            ].map((step, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] text-blue-100">
                <span className="shrink-0 font-semibold text-white">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-2.5">
            <button className="flex items-center gap-2 rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5">
              <Monitor className="size-3.5" /> View Packages
            </button>
            <button className="text-primary flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium transition hover:bg-blue-50">
              <Download className="size-3.5" /> Download App
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border bg-white px-8 py-12 text-center">
          <p className="mx-auto mb-6 max-w-2xl text-2xl leading-tight font-normal text-slate-900">
            Start preparing for your most important academic exams and make your study process more
            structured and effective.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <button className="bg-primary hover:bg-primary/90 rounded-md px-5 py-2.5 text-sm font-medium text-white transition">
              View Packages
            </button>
            <button className="rounded-md border border-gray-200 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-50">
              Download the Testora App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
