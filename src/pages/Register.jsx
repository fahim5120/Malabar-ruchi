import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = form;

    if (!name || !email || !password || !confirm) {
      toast.error("Please fill all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      toast.error("Email already registered");
      return;
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegistered(true);
      toast.success("Registration successful!");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5efe6] p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-[#5a4634]">Register</h2>

        {!registered && (
          <>
            <label className="block mb-2">
              <span className="text-sm text-gray-600">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
              />
            </label>
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
            <label className="block mb-2">
              <span className="text-sm text-gray-600">Password</span>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={onChange}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
              />
            </label>
            <label className="block mb-4">
              <span className="text-sm text-gray-600">Confirm Password</span>
              <input
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={onChange}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-2 rounded font-semibold"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </>
        )}

        {registered && (
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full mt-4 bg-[#8b5e34] hover:bg-[#6b4423] text-white py-2 rounded font-semibold"
          >
            Go to Login
          </button>
        )}
      </form>
    </div>
  );
}

export default Register;
