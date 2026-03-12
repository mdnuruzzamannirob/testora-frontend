import Link from "next/link";
import { ROUTES } from "@/constants";
import { BookOpen, Zap, Monitor, BarChart2, Check, ArrowRight, ChevronRight } from "lucide-react";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-teal-400 to-blue-500">
            <svg
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L12 22M12 2L6 8M12 2L18 8" />
            </svg>
          </div>
          <span className="text-[15px] font-extrabold tracking-widest text-gray-900">Testora</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {["Home", "About", "Packages", "Marketplace", "Blog"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.LOGIN}
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Login
          </Link>
          <Link
            href={ROUTES.REGISTER}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
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
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: "20,000+", label: "Practice Questions" },
    { value: "50+", label: "Full Exam Tests" },
    { value: "15+", label: "Subjects Covered" },
    { value: "3", label: "Practice Modes" },
  ];
  return (
    <section className="border-y border-gray-100 bg-gray-50/70 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white p-5 text-center shadow-sm">
            <p className="text-2xl font-extrabold text-blue-600">{s.value}</p>
            <p className="mt-1 text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Exam Categories ──────────────────────────────────────────────────────────
function ExamCategories() {
  const categories = [
    {
      title: "Semimatura",
      desc: "Preparation using subject-based questions and past exam tests.",
      icon: "📚",
      color: "border-l-blue-500",
    },
    {
      title: "Matura",
      desc: "Structured practice and simulations for the national Matura exam.",
      icon: "🎓",
      color: "border-l-teal-500",
    },
    {
      title: "Entrance Exams",
      desc: "Preparation for university entrance exams across different faculties and study programs.",
      icon: "🏛️",
      color: "border-l-purple-500",
    },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Exam Categories</h2>
          <p className="mt-2 text-sm text-gray-500">
            Choose the exam type that fits your educational goals
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.title}
              className={`rounded-xl border border-l-4 border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${c.color}`}
            >
              <span className="mb-3 block text-3xl">{c.icon}</span>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: 1, title: "Create Account", desc: "Create your student account in seconds." },
    {
      num: 2,
      title: "Choose Exam Category",
      desc: "Select Semimatura, Matura, or Entrance Exams.",
    },
    {
      num: 3,
      title: "Practice Questions",
      desc: "Browse sections, short practice, or full exam tests.",
    },
    {
      num: 4,
      title: "Track Your Results",
      desc: "Monitor your progress and improve your performance.",
    },
  ];
  return (
    <section className="bg-gray-50/70 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <p className="mt-2 text-sm text-gray-500">
            Start your exam preparation journey in four simple steps
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex flex-1 flex-col gap-5">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm">
                  {s.num}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Visual */}
          <div className="flex flex-1 justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl bg-linear-to-br from-blue-100 to-indigo-200 shadow-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                <div className="h-20 w-full rounded-xl bg-white/40" />
                <div className="h-6 w-3/4 rounded bg-white/40" />
                <div className="h-6 w-1/2 rounded bg-blue-400/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Platform Features ────────────────────────────────────────────────────────
function PlatformFeatures() {
  const features = [
    { icon: BookOpen, label: "Study Archive", color: "bg-blue-100 text-blue-600" },
    { icon: Zap, label: "Quick Quizzes", color: "bg-amber-100 text-amber-600" },
    { icon: Monitor, label: "Full Exam Simulation", color: "bg-teal-100 text-teal-600" },
    { icon: BarChart2, label: "Performance Statistics", color: "bg-purple-100 text-purple-600" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Platform Features</h2>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                <f.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold text-gray-800">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App Screens Preview ──────────────────────────────────────────────────────
function AppScreensPreview() {
  const screens = [
    { label: "Quiz Screen", gradient: "from-cyan-400 to-blue-500" },
    { label: "Student Dashboard", gradient: "from-gray-700 to-gray-900" },
    { label: "Test Archive", gradient: "from-indigo-400 to-purple-500" },
  ];
  return (
    <section className="bg-gray-50/70 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">App Screens Preview</h2>
          <p className="mt-2 text-sm text-gray-500">
            Experience our intuitive and powerful mobile application
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {screens.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div
                className={`relative h-65 w-32.5 overflow-hidden rounded-[28px] border-[5px] border-gray-800 bg-linear-to-br shadow-xl ${s.gradient}`}
              >
                <div className="absolute inset-0 flex flex-col gap-2 p-3">
                  <div className="h-3 w-3/4 rounded bg-white/30" />
                  <div className="h-24 w-full rounded-xl bg-white/20" />
                  <div className="h-2 w-1/2 rounded bg-white/25" />
                  <div className="h-2 w-2/3 rounded bg-white/25" />
                  <div className="mt-1 flex gap-1.5">
                    <div className="h-8 flex-1 rounded-lg bg-white/20" />
                    <div className="h-8 flex-1 rounded-lg bg-white/20" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Packages ─────────────────────────────────────────────────────────
function Packages() {
  const packages = [
    {
      name: "Semimatura Package",
      features: [
        "Semimatura subject coverage",
        "Past exam questions",
        "Full exam tests",
        "Detailed analytics",
        "Performance tracking",
      ],
      price: null,
      featured: false,
    },
    {
      name: "Matura Package",
      features: [
        "Complete Matura subject coverage",
        "Full exam simulations",
        "Detailed analytics",
        "Performance tracking",
      ],
      price: null,
      featured: false,
    },
    {
      name: "Entrance Exam Package",
      features: [
        "Preparation for top selected universities",
        "Faculty specific content",
        "Specialized practice tests",
        "Targeted preparation",
      ],
      price: null,
      featured: false,
    },
    {
      name: "Full Access Package",
      features: [
        "Complete access to all categories",
        "Semimatura, Matura & Entrance Exams",
        "All practice tests",
        "Priority analytics support",
      ],
      badge: "POPULAR",
      note: "Does not include Architecture or electives exquisit",
      price: null,
      featured: true,
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Choose Your Package</h2>
          <p className="mt-2 text-sm text-gray-500">
            Select the package that best fits your exam preparation needs
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${
                pkg.featured
                  ? "border-blue-500 bg-blue-600 text-white shadow-blue-200"
                  : "border-gray-100 bg-white"
              }`}
            >
              {pkg.featured && "badge" in pkg && pkg.badge && (
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
  );
}

// ─── Marketplace Preview ──────────────────────────────────────────────────────
function MarketplacePreview() {
  const products = [
    { name: "Academic Textbook Collection", price: "€29.99", category: "Books" },
    { name: "Scientific Calculator", price: "€14.99", category: "Tools" },
    { name: "Premium Study Backpack", price: "€49.00", category: "Bags" },
    { name: "Engineering Tool Set", price: "€34.99", category: "Tools" },
    { name: "Premium Notebooks Set", price: "€14.66", category: "Stationery" },
  ];

  const gradients = [
    "from-amber-100 to-orange-200",
    "from-teal-100 to-cyan-200",
    "from-slate-200 to-gray-300",
    "from-blue-100 to-indigo-200",
    "from-gray-100 to-slate-200",
  ];

  return (
    <section className="bg-gray-50/70 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Marketplace Preview</h2>
          <p className="mt-2 text-sm text-gray-500">
            Browse our selection of physical study materials and tools
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              <div
                className={`flex h-36 items-center justify-center bg-linear-to-br ${gradients[i]}`}
              >
                <BookOpen className="h-12 w-12 text-gray-400/60" />
              </div>
              <div className="flex flex-1 flex-col p-3">
                <p className="mb-1 text-xs leading-tight font-semibold text-gray-800">{p.name}</p>
                <p className="mb-2 text-xs text-gray-400">{p.category}</p>
                <p className="mb-2 text-sm font-bold text-gray-900">{p.price}</p>
                <button className="mt-auto flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Blog Preview ─────────────────────────────────────────────────────────────
function BlogPreview() {
  const posts = [
    {
      title: "10 Essential Tips for Matura Exam Success",
      excerpt:
        "Discover proven strategies and techniques to maximize your performance in the national Matura exam.",
      date: "Mar 8, 2026",
      readTime: "5 min read",
      color: "from-amber-100 to-orange-200",
    },
    {
      title: "Understanding University Entrance Exam Requirements",
      excerpt:
        "A comprehensive guide to entrance exam requirements across different universities and faculties.",
      date: "Mar 5, 2026",
      readTime: "7 min read",
      color: "from-teal-100 to-cyan-200",
    },
    {
      title: "How Technology is Transforming Exam Preparation",
      excerpt:
        "Explore how digital learning platforms are helping students prepare for their exams more effectively.",
      date: "Mar 1, 2026",
      readTime: "4 min read",
      color: "from-blue-100 to-indigo-200",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Blog Preview</h2>
          <p className="mt-2 text-sm text-gray-500">
            Stay informed with the latest exam preparation tips and educational insights
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <div
              key={p.title}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-40 bg-linear-to-br ${p.color}`} />
              <div className="flex flex-1 flex-col p-5">
                <h4 className="mb-2 text-sm leading-snug font-bold text-gray-900">{p.title}</h4>
                <p className="mb-3 flex-1 text-xs leading-relaxed text-gray-500">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {p.date} · {p.readTime}
                  </span>
                  <button className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline">
                    Read More <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-linear-to-r from-teal-500 to-blue-600 py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
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

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const columns = [
    {
      heading: "Company",
      links: ["About", "Team", "Careers", "Contact"],
    },
    {
      heading: "Product",
      links: ["Packages", "Marketplace", "Blog", "App"],
    },
    {
      heading: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
    {
      heading: "Support",
      links: ["Help Center", "FAQ"],
    },
  ];

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href={ROUTES.HOME} className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-teal-400 to-blue-500">
                <svg
                  className="h-3.5 w-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L12 22M12 2L6 8M12 2L18 8" />
                </svg>
              </div>
              <span className="text-sm font-extrabold tracking-widest text-gray-900">Testora</span>
            </Link>
            <p className="text-xs text-gray-400">
              Your comprehensive exam preparation platform for academic success.
            </p>
          </div>
          {/* Columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-3 text-xs font-semibold tracking-wider text-gray-900 uppercase">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-1.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-xs text-gray-500 hover:text-gray-800">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © 2026 Testora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <ExamCategories />
      <HowItWorks />
      <PlatformFeatures />
      <AppScreensPreview />
      <Packages />
      <MarketplacePreview />
      <BlogPreview />
      <CTA />
      <Footer />
    </main>
  );
}
