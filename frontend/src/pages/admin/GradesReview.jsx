import React, { useEffect, useState } from "react";
import { courseService } from "../../services/courseService";
import "./../../styles/GradesReview.css";

export default function GradesReview() {
  const [enrolls, setEnrolls] = useState([]);
  const [coursesMap, setCoursesMap] = useState({});

  useEffect(() => {
    async function load() {
      const all = await courseService.getAllEnrollments();
      const cs = await courseService.getAll();
      const map = {};
      cs.forEach((c) => (map[c.id] = c));
      setCoursesMap(map);
      setEnrolls(all);
    }
    load();
  }, []);

  async function handleGrade(enrollId) {
    const grade = prompt("Enter grade (A/B/C/...):");
    if (!grade) return;
    try {
      await courseService.setGrade(enrollId, grade);
      const all = await courseService.getAllEnrollments();
      setEnrolls(all);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="page grades-review-page">
      <h2>Grades Review</h2>
      <div className="enroll-list">
        {enrolls.length === 0 && <div>No enrollments yet</div>}
        {enrolls.map((e) => (
          <div key={e.id} className="enroll-row">
            <div>{coursesMap[e.courseId]?.title}</div>
            <div>Student ID: {e.studentId}</div>
            <div>Progress: {e.progress}%</div>
            <div>Grade: {e.grade ?? "—"}</div>
            <div><button className="btn small" onClick={() => handleGrade(e.id)}>Set Grade</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
