import {
  Upload,
  BrainCircuit,
  Code2,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Resume",
    desc: "Upload your resume and let AI analyze your profile.",
  },
  {
    icon: BrainCircuit,
    title: "AI Interview",
    desc: "Practice HR and technical interviews with AI.",
  },
  {
    icon: Code2,
    title: "Coding Round",
    desc: "Solve coding problems similar to placement tests.",
  },
  {
    icon: Trophy,
    title: "Get Hired",
    desc: "Improve continuously and become placement ready.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          How It Works
        </h2>

        <p className="mt-5 text-center text-slate-400">
          Four simple steps to prepare for your dream job.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center transition hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                  <Icon size={32} className="text-blue-500" />
                </div>

                <span className="text-blue-500 font-bold">
                  Step {index + 1}
                </span>

                <h3 className="mt-4 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;