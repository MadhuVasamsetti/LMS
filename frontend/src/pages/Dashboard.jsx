import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { courseService } from "../services/courseService";
import Card from "../components/Card";
import "./../styles/Dashboard.css";

export default function Dashboard() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    async function load() {
      const cs = await courseService.getAll();
      setCourses(cs);
      if (user?.role === "STUDENT") {
        const e = await courseService.getEnrollmentsForStudent(user.id);
        setEnrolls(e);
      } else {
        const e = await courseService.getAllEnrollments();
        setEnrolls(e);
      }
    }
    load();
  }, [user]);

  return (
    <div className="page dashboard-page">
      <h2>Dashboard</h2>
      <div className="grid cards">
        <Card title="Courses" subtitle="Total available">
          <h3>{courses.length}</h3>
        </Card>
        <Card title="Enrollments" subtitle="Total enrollments">
          <h3>{enrolls.length}</h3>
        </Card>
        <Card title="Role" subtitle="Current user role">
          <h3>{user?.role}</h3>
        </Card>
      </div>

      <section>
        <h3>Quick Links</h3>
        <div className="quick-links">
          {user?.role === "STUDENT" ? (
            <>
              <a href="/student/courses" className="small-card">Browse Courses</a>
              <a href="/student/grades" className="small-card">My Grades</a>
            </>
          ) : (
            <>
              <a href="/admin/manage-courses" className="small-card">Manage Courses</a>
              <a href="/admin/manage-students" className="small-card">Manage Students</a>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
