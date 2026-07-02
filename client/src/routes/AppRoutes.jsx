import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";

const Login = () => <h1 className="text-white">Login Page</h1>;
const Signup = () => <h1 className="text-white">Signup Page</h1>;

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}