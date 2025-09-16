import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { userService } from "../services/userService";
import "./../styles/Profile.css";

export default function Profile() {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email] = useState(user?.email || "");
  const [msg, setMsg] = useState(null);

  async function handleSave(e) {
    e.preventDefault();
    try {
      const updated = await userService.updateProfile(user.id, { name });
      setMsg("Profile updated");
      // update local user preserved by AuthContext? quick approach:
      const stored = JSON.parse(localStorage.getItem("lms_user"));
      localStorage.setItem("lms_user", JSON.stringify({ ...stored, name: updated.name }));
      setTimeout(() => setMsg(null), 2000);
    } catch (error) {
      setMsg(error.message);
      setTimeout(() => setMsg(null), 2000);
    }
  }

  function handleLogout() {
    logout();
  }

  return (
    <div className="page profile-page">
      <h2>My Profile</h2>
      {msg && <div className="success">{msg}</div>}
      <form className="profile-form" onSubmit={handleSave}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input value={email} readOnly />
        <label>Role</label>
        <input value={user?.role} readOnly />
        <div className="form-actions">
          <button className="btn" type="submit">Save</button>
          <button className="btn btn-ghost" type="button" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
}
