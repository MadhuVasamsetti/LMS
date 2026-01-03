import React, { useEffect, useState } from "react";
import { courseService } from "../../services/courseService";
import "./../../styles/ManageCourses.css";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [lessons, setLessons] = useState(6);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const cs = await courseService.getAll();
    setCourses(cs);
  }

  async function handleAdd(e) {
    e.preventDefault();
    await courseService.addCourse({ title, description: desc, lessons, teacher: "Admin" });
    setTitle("");
    setDesc("");
    setLessons(6);
    load();
  }

  async function handleDelete(id) {
    await courseService.deleteCourse(id);
    load();
  }

  return (
    <div className="page manage-courses-page">
      <h2>Manage Courses</h2>
      <form className="manage-form" onSubmit={handleAdd}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} required />
        <input type="number" min="1" value={lessons} onChange={(e) => setLessons(Number(e.target.value))} />
        <button className="btn" type="submit">Add Course</button>
      </form>

      <div className="course-admin-list">
        {courses.map((c) => (
          <div key={c.id} className="course-admin-row">
            <div>
              <strong>{c.title}</strong>
              <div className="muted">{c.description}</div>
            </div>
            <div className="admin-actions">
              <button className="btn btn-ghost" onClick={() => handleDelete(c.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
