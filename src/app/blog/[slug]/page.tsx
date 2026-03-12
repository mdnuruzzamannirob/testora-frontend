import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User, ChevronRight, Zap } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ROUTES } from "@/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

const CATEGORY_COUNTS: Record<string, number> = {
  "Exam Preparation": 3,
  "Study Guides": 2,
  "Education News": 2,
  "Student Tips": 3,
};

const ARTICLE_CONTENT: Record<
  string,
  { sections: { heading: string; body?: string; list?: string[]; highlight?: string }[] }
> = {
  "complete-guide-semi-matura-2026": {
    sections: [
      {
        heading: "Understanding the Semi-Matura Structure",
        body: "The Semi-Matura examination serves as a midpoint assessment in the secondary education system. Students typically take these exams at the end of their second year of gymnasium education.",
        list: [
          "Albanian Language and Literature",
          "Mathematics",
          "First Foreign Language (English, German, or French)",
          "Natural Sciences (Biology, Chemistry, or Physics)",
        ],
      },
      {
        heading: "Important Dates for 2026",
        body: "The Ministry of Education has announced the following schedule:",
        list: [
          "Registration deadline: March 15, 2026",
          "Examination period: May 18–28, 2026",
          "Results announcement: June 20, 2026",
          "Appeals deadline: June 27, 2026",
        ],
      },
      {
        heading: "Preparation Timeline",
        body: "Start your preparation at least 3 months before the exam date. Create a study schedule that covers all subjects systematically.\n\n**Month 1: Foundation Building** Review all core concepts and identify weak areas that need additional attention.\n\n**Month 2: Practice and Reinforcement** Work through past exam papers and practice questions to familiarize yourself with the format.\n\n**Month 3: Final Review** Focus on revision, time management, and exam strategies.",
      },
      {
        heading: "Study Tips for Success",
        list: [
          "Create a realistic study schedule and stick to it",
          "Use active recall and spaced repetition techniques",
          "Practice with past papers under timed conditions",
          "Join study groups for collaborative learning",
          "Take regular breaks to maintain focus",
        ],
      },
      {
        heading: "Resources Available",
        body: "Testora provides comprehensive study materials, practice tests, and interactive learning modules specifically designed for Semi-Matura preparation.\n\nVisit our learning platform to access all preparation resources and track your progress effectively.",
        highlight:
          "Create a dedicated study space free from distractions. Consistency in your study environment helps your brain associate that space with focused work, making it easier to concentrate when exam preparation time comes.",
      },
    ],
  },
};

// Default content for posts without specific content
function getDefaultSections(post: (typeof BLOG_POSTS)[0]) {
  return {
    sections: [
      {
        heading: "Overview",
        body: post.excerpt,
      },
      {
        heading: "Key Takeaways",
        list: [
          "Stay up to date with the latest exam requirements",
          "Practice consistently using past exam papers",
          "Focus on your weak areas systematically",
          "Track your progress over time",
        ],
      },
      {
        heading: "Conclusion",
        body: "Using Testora's comprehensive preparation tools will help you stay on track and achieve your academic goals. Browse our platform to access thousands of practice questions and full exam simulations.",
        highlight: "Start your preparation early and practice regularly for the best results.",
      },
    ],
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = ARTICLE_CONTENT[slug] ?? getDefaultSections(post);
  const related = BLOG_POSTS.filter((p) => p.slug !== slug && !p.featured).slice(0, 2);
  const mostRead = BLOG_POSTS.filter((p) => !p.featured).slice(0, 4);

  const CATEGORY_COLORS: Record<string, string> = {
    "Exam Preparation": "bg-blue-100 text-blue-700",
    "Study Guides": "bg-teal-100 text-teal-700",
    "Education News": "bg-amber-100 text-amber-700",
    "Student Tips": "bg-purple-100 text-purple-700",
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-xs text-gray-400">
          <Link href={ROUTES.BLOG} className="hover:text-blue-600">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gray-500">{post.category}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="max-w-xs truncate text-gray-700">{post.title}</span>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main article */}
          <article className="min-w-0 flex-1">
            <span
              className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}
            >
              {post.category}
            </span>
            <h1 className="mb-4 text-2xl leading-tight font-extrabold text-gray-900">
              {post.title}
            </h1>
            <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                Testora Team
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Hero image */}
            <div className="mb-8 flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-200/50">
                <CalendarDays className="h-8 w-8 text-blue-500" />
              </div>
            </div>

            {/* Intro */}
            <p className="mb-6 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>

            {/* Sections */}
            {content.sections.map((section, i) => (
              <div key={i} className="mb-6">
                <h2 className="mb-3 text-lg font-bold text-gray-900">{section.heading}</h2>
                {section.body && (
                  <div className="mb-3 space-y-3 text-sm leading-relaxed text-gray-600">
                    {section.body.split("\n\n").map((para, pi) => (
                      <p
                        key={pi}
                        dangerouslySetInnerHTML={{
                          __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }}
                      />
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="mb-3 ml-4 flex flex-col gap-1.5 text-sm text-gray-600">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.highlight && (
                  <div className="mt-3 flex items-start gap-3 rounded-xl border-l-4 border-blue-400 bg-blue-50 p-4">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <div>
                      <p className="mb-0.5 text-xs font-semibold text-blue-700">Study Tip</p>
                      <p className="text-xs leading-relaxed text-blue-600">{section.highlight}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-4 text-lg font-bold text-gray-900">Related Articles</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`${ROUTES.BLOG}/${r.slug}`}
                      className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md"
                    >
                      <div className="flex h-28 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                        <CalendarDays className="h-8 w-8 text-blue-400/60" />
                      </div>
                      <div className="p-3">
                        <p className="mb-1 text-sm leading-snug font-bold text-gray-900">
                          {r.title}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-gray-400">
                          <CalendarDays className="h-3 w-3" /> {r.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-64">
            {/* Search */}
            <div className="mb-5 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-gray-900">Search Articles</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Categories */}
            <div className="mb-5 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-gray-900">Categories</h3>
              <ul className="flex flex-col gap-1">
                {Object.entries(CATEGORY_COUNTS).map(([cat, count]) => (
                  <li key={cat}>
                    <Link
                      href={ROUTES.BLOG}
                      className="flex justify-between rounded px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50"
                    >
                      <span>{cat}</span>
                      <span className="font-semibold text-gray-400">{count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Most Read */}
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-bold text-gray-900">Most Read</h3>
              <ul className="flex flex-col gap-3">
                {mostRead.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`${ROUTES.BLOG}/${p.slug}`}
                      className="group flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded bg-blue-50">
                        <CalendarDays className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="line-clamp-2 text-xs leading-snug font-medium text-gray-800 group-hover:text-blue-600">
                          {p.title}
                        </p>
                        <p className="mt-0.5 text-[10px] text-gray-400">{p.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
