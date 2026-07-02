import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">

        <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
          <Sparkles size={18} />
          AI Powered Interview Platform
        </div>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Ace Your Placement
          <br />
          with <span className="text-blue-500">AI</span> 🚀
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Prepare smarter with AI-powered mock interviews,
          resume analysis, coding practice and personalized
          performance reports.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700">
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-slate-700 px-7 py-4 font-semibold transition hover:bg-slate-800">
            Watch Demo
          </button>
        </div>

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["10K+", "Students"],
            ["500+", "Interview Questions"],
            ["95%", "Success Rate"],
            ["24/7", "AI Assistance"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur"
            >
              <h2 className="text-3xl font-bold text-blue-400">
                {value}
              </h2>

              <p className="mt-2 text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;