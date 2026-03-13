import Titlebar from "../common/Titlebar";

export const Exam = () => {
  const categories = [
    {
      title: "Semimatura",
      desc: "Preparation using subject-based questions and past exam tests.",
      icon: "📚",
      color: "border-l-primary",
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
    <section className="bg-blue-50/60 py-16">
      <div className="app-container">
        <Titlebar
          title="Exam Categories"
          description=" Choose the exam type that fits your educational goals"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.title}
              className={`rounded-xl border border-y-0 border-r-0 border-l-4 border-gray-100 bg-white p-6 shadow-sm ${c.color}`}
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
