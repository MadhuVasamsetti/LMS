import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { courseService } from "../../services/courseService";
import { userService } from "../../services/userService";
import "./../../styles/Grades.css";

export default function Grades() {
  const { user } = useAuth();
  const [enrolls, setEnrolls] = useState([]);
  const [coursesMap, setCoursesMap] = useState({});

  useEffect(() => {
    async function load() {
      const e = await courseService.getEnrollmentsForStudent(user.id);
      setEnrolls(e);
      const cs = await courseService.getAll();
      const map = {};
      cs.forEach((c) => (map[c.id] = c));
      setCoursesMap(map);
    }
    load();
  }, [user]);

  return (
    <div className="page grades-page">
      <h2>My Grades & Progress</h2>
      <div className="grade-list">
        {enrolls.length === 0 && <div>No enrollments yet. Browse courses to enroll.</div>}
        {enrolls.map((e) => (
          <div key={e.id} className="grade-row">
            <div className="grade-course">{coursesMap[e.courseId]?.title || "Course"}</div>
            <div className="grade-progress">Progress: {e.progress}%</div>
            <div className="grade-grade">Grade: {e.grade ?? "Not graded"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
