function TrustedCompanies() {
  const companies = [
    "Google",
    "Amazon",
    "Microsoft",
    "TCS",
    "Infosys",
    "Adobe",
  ];

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-12 text-center text-sm uppercase tracking-[0.3em] text-slate-400">
          Trusted by students preparing for
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center transition hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="text-lg font-semibold">
                {company}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;