export const Exam = () => {
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
};

export default Exam;
