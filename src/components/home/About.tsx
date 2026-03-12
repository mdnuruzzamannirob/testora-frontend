import { Brain, Monitor } from "lucide-react";

const About = () => {
  return (
    <section className="bg-blue-50/60 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Testora</h2>
          <p className="mt-2 text-sm text-gray-500">
            Empowering students to achieve their academic goals through innovative learning
            solutions
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
              <Brain className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="mb-2 font-bold text-gray-900">Our Mission</h3>
            <p className="text-sm text-gray-500">
              Provide accessible, high-quality exam preparation resources that help students in
              their most important exams through comprehensive, structured practice.
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100">
              <Monitor className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="mb-2 font-bold text-gray-900">Our Vision</h3>
            <p className="text-sm text-gray-500">
              To become the leading educational technology platform that transforms how students
              prepare to work and achieve academic excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
