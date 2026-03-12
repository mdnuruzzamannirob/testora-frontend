const Stats = () => {
  const stats = [
    { value: "20,000+", label: "Practice Questions" },
    { value: "50+", label: "Full Exam Tests" },
    { value: "15+", label: "Subjects Covered" },
    { value: "3", label: "Practice Modes" },
  ];
  return (
    <section className="border-y border-gray-100 bg-gray-50/70 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white p-5 text-center shadow-sm">
            <p className="text-2xl font-extrabold text-blue-600">{s.value}</p>
            <p className="mt-1 text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
