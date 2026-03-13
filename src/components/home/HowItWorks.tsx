import Image from "next/image";
import Titlebar from "../common/Titlebar";

import { UserPlus, CircleDot, BookOpenCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Create Account",
    desc: "Create your student account in seconds.",
    icon: UserPlus,
  },
  {
    num: "2",
    title: "Choose Exam Category",
    desc: "Select Semimatura, Matura, or Entrance Exams.",
    icon: CircleDot,
  },
  {
    num: "3",
    title: "Practice Questions",
    desc: "Solve quizzes, subject practice, or full exam tests.",
    icon: BookOpenCheck,
  },
  {
    num: "4",
    title: "Track Your Results",
    desc: "Monitor your progress and improve your performance.",
    icon: TrendingUp,
  },
];

const HowItWorks = () => {
  return (
    <section className="app-container py-16 md:py-20">
      <Titlebar
        title="How It Works"
        description="Start your exam preparation journey in four simple steps"
      />

      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
        {/* Left */}
        <div className="flex flex-1 flex-col gap-7">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.num} className="flex items-center gap-4">
                <div className="from-primary to-primary2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-r text-sm font-bold text-white shadow-sm">
                  {step.num}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="text-primary2 size-4.5" />
                    <p className="text-lg font-semibold text-gray-900">{step.title}</p>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex flex-1 justify-center md:justify-end">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
            alt="Students preparing and analyzing exam performance"
            width={900}
            height={700}
            className="aspect-video rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
