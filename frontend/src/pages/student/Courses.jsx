import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "../../styles/Courses.css";

// 👉 Import local images from assets
import reactPic from "../../assets/reactpic.jpg";
import pythonPic from "../../assets/pythonpic.jpg";
import dsaPic from "../../assets/dsapic.jpg";
import webPic from "../../assets/webpic.jpg";
import javaPic from "../../assets/javapic.jpg";
import mlPic from "../../assets/mlpic.jpg";
import dbPic from "../../assets/dbpic.jpg";
import uiuxPic from "../../assets/uiuxpic.jpg";

const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    description: "Learn the basics of React, components, props, and hooks.",
    image: reactPic,
  },
  {
    id: 2,
    title: "Python Programming",
    instructor: "Jane Smith",
    description: "Start coding in Python with hands-on exercises and projects.",
    image: pythonPic,
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    instructor: "Mark Johnson",
    description: "Master problem solving with DSA in C++ and Python.",
    image: dsaPic,
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    instructor: "Emily Davis",
    description: "HTML, CSS, JavaScript, and modern frameworks in one course.",
    image: webPic,
  },
  {
    id: 5,
    title: "Java Programming",
    instructor: "Chris Brown",
    description: "Learn Java fundamentals, OOP, and backend development basics.",
    image: javaPic,
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    instructor: "Sophia Wilson",
    description: "Get started with AI, ML models, and Python libraries.",
    image: mlPic,
  },
  {
    id: 7,
    title: "Database Management Systems",
    instructor: "Daniel White",
    description: "Understand SQL, NoSQL, and how to manage large datasets.",
    image: dbPic,
  },
  {
    id: 8,
    title: "UI/UX Design Fundamentals",
    instructor: "Olivia Taylor",
    description: "Learn wireframing, prototyping, and design principles.",
    image: uiuxPic,
  },
];

export default function Courses() {
  return (
    <div className="courses-page">
      <h1 className="page-title">Available Courses</h1>
      <div className="courses-grid">
        {coursesData.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-img" />
            <div className="course-content">
              <h2>{course.title}</h2>
              <p className="instructor">Instructor: {course.instructor}</p>
              <p className="description">{course.description}</p>
              <div className="card-actions">
                {/* ✅ Both buttons go to /register */}
                <Link to="/register" className="btn">
                  View Details
                </Link>
                <Link to="/register" className="btn btn-outline">
                  Enroll
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
