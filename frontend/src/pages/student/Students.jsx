import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/userService";
import "../../styles/Students.css";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(getStudents()); // mock fetch
  }, []);

  return (
    <div className="page students-page">
      <h2>Enrolled Students</h2>
      <ul className="student-list">
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
