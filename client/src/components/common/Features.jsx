import {
  FileText,
  BrainCircuit,
  Code2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Analyzer",
    description:
      "Upload your resume and receive an ATS score with AI-powered suggestions.",
  },
  {
    icon: BrainCircuit,
    title: "AI Mock Interview",
    description:
      "Practice HR and technical interviews with instant AI feedback.",
  },
  {
    icon: Code2,
    title: "Coding Practice",
    description:
      "Solve coding questions and prepare for placement rounds.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your progress and improve using detailed reports.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-5 text-center text-slate-400 max-w-2xl mx-auto">
          One platform for resume analysis, AI interviews,
          coding preparation and performance tracking.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  className="mb-6 text-blue-500"
                  size={42}
                />

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;