import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { getUsers, findUserByEmail, createUser } from "../utils/authUtils";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false); // <-- registration state

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = form;
    if (!name || !email || !password || !confirm) {
      toast.error("Please fill all");
      return;
    }
    if (password.length < 6) {
      toast.error("Password at least 6 characters");
      return;
    }
    if (password !== confirm) {
      toast.error("Password not match");
      return;
    }
    if (findUserByEmail(email)) {
      toast.error("This email already registered");
      return;
    }
    setLoading(true);
    try {
      const user = createUser({ name, email, password });
      toast.success("Registration successful!");
      setRegistered(true); // show login button
    } catch (err) {
      console.error(err);
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5efe6] p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-[#5a4634]">Register</h2>

        {!registered && (
          <>
            <label className="block mb-2">
              <span className="text-sm text-gray-600">Name</span>
              <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2 focus:outline-none" />
            </label>
            <label className="block mb-2">
              <span className="text-sm text-gray-600">Email</span>
              <input name="email" type="email" value={form.email} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2 focus:outline-none" />
            </label>
            <label className="block mb-2">
              <span className="text-sm text-gray-600">Password</span>
              <input name="password" type="password" value={form.password} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2 focus:outline-none" />
            </label>
            <label className="block mb-4">
              <span className="text-sm text-gray-600">Confirm Password</span>
              <input name="confirm" type="password" value={form.confirm} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2 focus:outline-none" />
            </label>
            <button type="submit" className="w-full bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-2 rounded font-semibold">
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

