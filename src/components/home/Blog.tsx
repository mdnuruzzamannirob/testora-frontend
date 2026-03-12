import { ChevronRight } from "lucide-react";

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

function Blog() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

export default Blog;
