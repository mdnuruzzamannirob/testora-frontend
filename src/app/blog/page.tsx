"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ROUTES } from "@/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

const CATEGORIES = [
  "All Articles",
  "Exam Preparation",
  "Study Guides",
  "Education News",
  "Student Tips",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Exam Preparation": "bg-blue-100 text-blue-700",
  "Study Guides": "bg-teal-100 text-teal-700",
  "Education News": "bg-amber-100 text-amber-700",
  "Student Tips": "bg-purple-100 text-purple-700",
};

const CARD_GRADIENTS = [
  "from-blue-100 to-indigo-200",
  "from-amber-100 to-orange-200",
  "from-teal-100 to-cyan-200",
  "from-purple-100 to-violet-200",
  "from-rose-100 to-pink-200",
  "from-gray-100 to-slate-200",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = BLOG_POSTS.find((p) => p.featured)!;
  const regular = BLOG_POSTS.filter((p) => !p.featured);

  const filtered =
    activeCategory === "All Articles"
      ? regular
      : regular.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />

      {/* Header */}
      <div className="border-b border-gray-100 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-extrabold text-gray-900">Blog</h1>
          <p className="mt-1 text-sm text-gray-500">
            News, updates and guidance related to school exams and university entrance tests
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setActiveCategory(c);
                setVisibleCount(6);
              }}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === c
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured article */}
        {activeCategory === "All Articles" && (
          <Link
            href={`${ROUTES.BLOG}/${featured.slug}`}
            className="mb-8 flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md md:flex-row"
          >
            <div className="flex h-48 w-full items-center justify-center bg-linear-to-br from-blue-100 to-indigo-200 md:h-auto md:w-80 md:shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                <CalendarDays className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-3 text-sm font-medium text-blue-600">Featured Article</div>
            </div>
            <div className="flex flex-col justify-center p-6">
              <span
                className={`mb-2 inline-block w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[featured.category]}`}
              >
                {featured.category}
              </span>
              <h2 className="mb-2 text-xl font-extrabold text-gray-900">{featured.title}</h2>
              <p className="mb-4 text-sm text-gray-500">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
                Read Article
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        )}

        {/* Regular grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {visible.map((post, i) => (
            <Link
              key={post.slug}
              href={`${ROUTES.BLOG}/${post.slug}`}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`flex h-40 items-center justify-center bg-linear-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]}`}
              >
                <CalendarDays className="h-10 w-10 text-blue-400/60" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span
                  className={`mb-2 inline-block w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {post.category}
                </span>
                <h3 className="mb-2 text-sm leading-snug font-bold text-gray-900">{post.title}</h3>
                <p className="mb-3 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <CalendarDays className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline">
                    Read More <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((n) => n + 3)}
              className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>

      <SiteFooter />
    </main>
  );
}
