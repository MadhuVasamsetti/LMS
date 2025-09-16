// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to <span className="highlight">MyLMS</span></h1>
        <p>
          Learn new skills, manage courses, and track progress —
          all in one place.
        </p>
        <div className="hero-buttons">
          <Link to="/student/courses" className="btn-primary">
            Browse Courses
          </Link>
          <Link to="/register" className="btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
