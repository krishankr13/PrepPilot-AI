import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 py-5 backdrop-blur-xl">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-tight text-white"
      >
        Prep<span className="text-blue-500">Pilot</span> AI
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>

        <Link to="/" className="hover:text-white transition">
          Features
        </Link>

        <Link to="/" className="hover:text-white transition">
          About
        </Link>

        <Link to="/" className="hover:text-white transition">
          Pricing
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="rounded-xl border border-slate-700 px-5 py-2.5 text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;