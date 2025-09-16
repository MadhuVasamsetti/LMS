import React, { useEffect, useState } from "react";
import { userService } from "../../services/userService";
import "./../../styles/ManageStudents.css";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const s = await userService.getAllStudents();
    setStudents(s);
  }

  return (
    <div className="page manage-students-page">
      <h2>Students</h2>
      <div className="student-list">
        {students.map((s) => (
          <div key={s.id} className="student-row">
            <div>{s.name}</div>
            <div className="muted">{s.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
