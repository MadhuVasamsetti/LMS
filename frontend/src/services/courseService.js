import { delay } from "./api";

const COURSES_KEY = "lms_mock_courses";
const ENROLLMENTS_KEY = "lms_mock_enrolls";

function seed() {
  if (!localStorage.getItem(COURSES_KEY)) {
    const sampleCourses = [
      {
        id: 1,
        title: "React for Beginners",
        description: "Learn React basics, hooks and components",
        teacher: "Alice Admin",
        lessons: 12,
      },
      {
        id: 2,
        title: "Java Spring Boot",
        description: "REST APIs with Spring Boot",
        teacher: "Alice Admin",
        lessons: 10,
      },
      {
        id: 3,
        title: "Database Basics",
        description: "MySQL fundamentals",
        teacher: "Alice Admin",
        lessons: 8,
      },
    ];
    localStorage.setItem(COURSES_KEY, JSON.stringify(sampleCourses));
  }
  if (!localStorage.getItem(ENROLLMENTS_KEY)) {
    localStorage.setItem(ENROLLMENTS_KEY, JSON.stringify([]));
  }
}
seed();

function readCourses() {
  return JSON.parse(localStorage.getItem(COURSES_KEY) || "[]");
}
function writeCourses(c) {
  localStorage.setItem(COURSES_KEY, JSON.stringify(c));
}
function readEnrolls() {
  return JSON.parse(localStorage.getItem(ENROLLMENTS_KEY) || "[]");
}
function writeEnrolls(e) {
  localStorage.setItem(ENROLLMENTS_KEY, JSON.stringify(e));
}

export const courseService = {
  async getAll() {
    await delay();
    return readCourses();
  },

  async getById(id) {
    await delay();
    return readCourses().find((c) => c.id === Number(id));
  },

  async addCourse(course) {
    await delay();
    const courses = readCourses();
    const id = courses.length ? Math.max(...courses.map((c) => c.id)) + 1 : 1;
    const newC = { id, ...course };
    courses.push(newC);
    writeCourses(courses);
    return newC;
  },

  async updateCourse(id, payload) {
    await delay();
    const courses = readCourses();
    const idx = courses.findIndex((c) => c.id === Number(id));
    if (idx === -1) throw new Error("Course not found");
    courses[idx] = { ...courses[idx], ...payload };
    writeCourses(courses);
    return courses[idx];
  },

  async deleteCourse(id) {
    await delay();
    let courses = readCourses();
    courses = courses.filter((c) => c.id !== Number(id));
    writeCourses(courses);
    return true;
  },

  async enroll(studentId, courseId) {
    await delay();
    const enrolls = readEnrolls();
    if (enrolls.find((e) => e.studentId === studentId && e.courseId === courseId)) {
      throw new Error("Already enrolled");
    }
    enrolls.push({
      id: enrolls.length ? Math.max(...enrolls.map((e) => e.id)) + 1 : 1,
      studentId,
      courseId,
      progress: 0,
      grade: null,
    });
    writeEnrolls(enrolls);
    return true;
  },

  async getEnrollmentsForStudent(studentId) {
    await delay();
    return readEnrolls().filter((e) => e.studentId === Number(studentId));
  },

  async getAllEnrollments() {
    await delay();
    return readEnrolls();
  },

  async setGrade(enrollId, grade) {
    await delay();
    const enrolls = readEnrolls();
    const idx = enrolls.findIndex((e) => e.id === enrollId);
    if (idx === -1) throw new Error("Enrollment not found");
    enrolls[idx].grade = grade;
    writeEnrolls(enrolls);
    return enrolls[idx];
  },
};

/* ✅ Shortcut exports so you can import directly */
export const getCourses = courseService.getAll;
export const getCourseById = courseService.getById;
