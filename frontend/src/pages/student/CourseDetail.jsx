import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/courseService";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading course details...</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Teacher:</strong> {course.teacher}</p>
      <p><strong>Lessons:</strong> {course.lessons}</p>
    </div>
  );
}
