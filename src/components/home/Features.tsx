import { BookOpen, Brain, CalendarCheck, Users, Smartphone, MessageSquareMore } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      label: "Comprehensive Content",
      desc: "Access thousands of carefully curated questions across multiple subjects.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Brain,
      label: "Smart Analytics",
      desc: "Track your performance with advanced analytics and targeted insights.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CalendarCheck,
      label: "Flexible Schedule",
      desc: "Study at your own pace with personalized learning schedule.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Users,
      label: "Expert Content",
      desc: "Content designed by professional educators and subject matter experts.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Smartphone,
      label: "Mobile Learning",
      desc: "Learn on the go with our powerful mobile application.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: MessageSquareMore,
      label: "Instant Feedback",
      desc: "Get immediate explanations and corrections for every question.",
      color: "bg-rose-100 text-rose-600",
    },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Platform Features</h2>
          <p className="mt-2 text-sm text-gray-500">
            Everything you need to succeed in your exam preparation
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                <f.icon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <p className="mb-1 text-sm font-semibold text-gray-800">{f.label}</p>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
