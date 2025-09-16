import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/logo192.png"; // ✅ Import your LMS logo

export default function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Brand Row */}
          
          

          {/* Headline */}
          <h1>
            Training in the <span className="highlight">Now.</span>
          </h1>
          <p>
            Smarter, faster learning for students and admins. Manage courses,
            track progress, and grow your skills today.
          </p>

          {/* CTA buttons */}
          <div className="hero-ctas">
            <Link to="/student/courses" className="btn">
              Browse Courses
            </Link>
            <Link to="/register" className="btn btn-outline">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <div className="feature">
          <h3>For Students</h3>
          <p>Enroll in courses, follow lessons, and view your grades.</p>
        </div>
        <div className="feature">
          <h3>For Admins</h3>
          <p>Create and manage courses, monitor students, and grade them.</p>
        </div>
        <div className="feature">
          <h3>Track Progress</h3>
          <p>Stay motivated with progress tracking and visual grade reports.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about container">
        <h2>About MyLMS</h2>
        <p>
          MyLMS is a modern Learning Management System designed to empower both
          students and administrators. With easy-to-use tools for course
          management, grading, and tracking progress, MyLMS makes education more
          engaging and effective.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials container">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"This platform helped me stay on track with my courses!"</p>
            <span>- Student</span>
          </div>
          <div className="testimonial">
            <p>"Managing courses has never been this easy."</p>
            <span>- Admin</span>
          </div>
          <div className="testimonial">
            <p>"The progress tracking motivates me to study daily."</p>
            <span>- Learner</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta container">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of learners and unlock your potential today.</p>
        <Link to="/register" className="btn">
          Get Started
        </Link>
      </section>

      
    </div>
  );
}
