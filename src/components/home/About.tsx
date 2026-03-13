import { Brain, Monitor } from "lucide-react";
import Titlebar from "../common/Titlebar";

const About = () => {
  return (
    <section className="app-container py-16 md:py-20">
      <Titlebar
        title="About Testora"
        description="Empowering students to achieve their academic goals through innovative learning
            solutions"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-blue-50/60 p-6 shadow-sm">
          <div className="bg-primary/10 mb-3 flex size-10 items-center justify-center rounded-xl">
            <Brain className="text-primary h-5 w-5" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Our Mission</h3>
          <p className="text-gray-500">
            Provide accessible, high-quality exam preparation resources that help students in their
            most important exams through comprehensive, structured practice.
          </p>
        </div>

        <div className="rounded-xl bg-blue-50/60 p-6 shadow-sm">
          <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-teal-100">
            <Monitor className="h-5 w-5 text-teal-600" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Our Vision</h3>
          <p className="text-gray-500">
            To become the leading educational technology platform that transforms how students
            prepare to work and achieve academic excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
