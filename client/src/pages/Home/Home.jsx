import HowItWorks from "../../components/home/HowItWorks";
import Features from "../../components/common/Features";
import Navbar from "../../components/layout/Navbar";
import { ArrowRight, Sparkles } from "lucide-react";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
            <Sparkles size={18} />
            AI Powered Interview Platform
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
            Ace Your Placement
            <br />
            with <span className="text-blue-500">AI</span> 🚀
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Prepare smarter with AI-powered mock interviews, resume analysis,
            coding practice and personalized performance reports.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-slate-700 px-7 py-4 font-semibold transition hover:bg-slate-800">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <h2 className="text-3xl font-bold text-blue-400">10K+</h2>
              <p className="mt-2 text-slate-400">Students</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <h2 className="text-3xl font-bold text-blue-400">500+</h2>
              <p className="mt-2 text-slate-400">Interview Questions</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <h2 className="text-3xl font-bold text-blue-400">95%</h2>
              <p className="mt-2 text-slate-400">Success Rate</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <h2 className="text-3xl font-bold text-blue-400">24/7</h2>
              <p className="mt-2 text-slate-400">AI Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 text-center text-sm uppercase tracking-[0.3em] text-slate-400">
            Trusted by students preparing for
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Google",
              "Amazon",
              "Microsoft",
              "TCS",
              "Infosys",
              "Adobe",
            ].map((company) => (
              <div
                key={company}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <h3 className="text-lg font-semibold">{company}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <Features />
      <HowItWorks />
    </>
  );
}

export default Home;