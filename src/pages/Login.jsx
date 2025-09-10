// src/pages/Login.jsx
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { findUserByEmail, validatePassword } from "../utils/authUtils";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("user"); // default role

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    const user = findUserByEmail(email);
    if (!user || !validatePassword(password, user.password)) {
      toast.error("Invalid email or password");
      return;
    }

    setLoading(true);
    try {
      login({ id: user.id, name: user.name, email: user.email, role }); // save role in context
      toast.success("Login successful!");
      // Redirect based on role
      if (role === "admin") navigate("/admin");
      else navigate("/home");
    } catch (err) {
      console.error(err);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5efe6] p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-[#5a4634]">Login</h2>

        {/* Role Selection */}
        <div className="flex justify-between mb-4">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`px-4 py-2 rounded font-semibold ${
              role === "user" ? "bg-[#8b5e34] text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            User
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`px-4 py-2 rounded font-semibold ${
              role === "admin" ? "bg-[#8b5e34] text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Admin
          </button>
        </div>

        <label className="block mb-2">
          <span className="text-sm text-gray-600">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-gray-600">Password</span>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-2 rounded font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
