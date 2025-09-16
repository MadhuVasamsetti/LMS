import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./../styles/Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    logout();
    nav("/"); // redirect to Home after logout
    setMenuOpen(false);
  }

  function handleLinkClick() {
    setMenuOpen(false); // close menu when a link is clicked
  }

  return (
    <nav className="navbar">
      {/* Left side - Brand */}
      <div className="navbar-left">
        <Link to="/" className="brand" onClick={handleLinkClick}>
          MyLMS
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links - collapse on mobile */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <div className="navbar-center">
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/student/courses" onClick={handleLinkClick}>
            Courses
          </Link>
          {user?.role === "ADMIN" && (
            <Link to="/admin/manage-courses" onClick={handleLinkClick}>
              Admin
            </Link>
          )}
        </div>

        <div className="navbar-right">
          {!user && (
            <>
              {/* Login button with black text */}
              <Link
                to="/login"
                className="btn btn-login"
                onClick={handleLinkClick}
              >
                Login
              </Link>

              {/* Register stays outlined/blue */}
              <Link
                to="/register"
                className="btn btn-outline"
                onClick={handleLinkClick}
              >
                Register
              </Link>
            </>
          )}
          {user && (
            <>
              <span className="nav-user">Hi, {user.name}</span>
              <Link
                to="/dashboard"
                className="btn small"
                onClick={handleLinkClick}
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
