const steps = [
  {
    num: 1,
    title: "Download App",
    desc: "Download our mobile app from the App Store or Google Play.",
  },
  {
    num: 2,
    title: "Choose Package",
    desc: "Select the perfect package that matches your exam preparation needs.",
  },
  {
    num: 3,
    title: "Start Learning",
    desc: "Begin practicing with thousands of questions and track your progress.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50/70 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
};

export default HowItWorks;
