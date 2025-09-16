import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Mock login
    if (email === "student@example.com" && password === "123") {
      login({ name: "Student", role: "STUDENT", email });
      navigate("/student/courses");
    } else if (email === "admin@example.com" && password === "123") {
      login({ name: "Admin", role: "ADMIN", email });
      navigate("/admin/manage-courses");
    } else {
      alert("Invalid credentials. Try student@example.com or admin@example.com with password 123");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
