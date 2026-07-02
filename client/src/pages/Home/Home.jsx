import Navbar from "../../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-950 text-white px-6">
        <h1 className="text-6xl font-bold mb-6">
          Ace Your Placement with AI 🚀
        </h1>

        <p className="text-slate-400 text-xl max-w-2xl mb-8">
          Practice interviews, analyze your resume, improve coding skills, and
          get AI-powered feedback—all in one platform.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Start Free
          </button>

          <button className="border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-800">
            Live Demo
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;