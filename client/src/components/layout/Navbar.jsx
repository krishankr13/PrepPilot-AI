import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800 bg-slate-950">
      <Link to="/" className="text-2xl font-bold text-blue-500">
        PrepPilot AI
      </Link>

      <div className="hidden md:flex items-center gap-8 text-slate-300">
        <Link to="/">Home</Link>
        <Link to="/">Features</Link>
        <Link to="/">About</Link>
        <Link to="/">Pricing</Link>
      </div>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg border border-slate-700 hover:bg-slate-800"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;