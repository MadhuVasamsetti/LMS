import { delay } from "./api";

const USERS_KEY = "lms_mock_users";

/* seed sample users if not exist */
function seed() {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    const seedUsers = [
      { id: 1, name: "Alice Admin", email: "admin@lms.com", password: "admin123", role: "ADMIN" },
      { id: 2, name: "Sam Student", email: "student@lms.com", password: "student123", role: "STUDENT" },
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(seedUsers));
  }
}
seed();

function readUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}
function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export const authService = {
  async login(email, password) {
    await delay();
    const users = readUsers();
    const u = users.find((x) => x.email === email && x.password === password);
    if (!u) throw new Error("Invalid credentials");
    // return user without password
    const { password: p, ...user } = u;
    return user;
  },

  async register({ name, email, password, role = "STUDENT" }) {
    await delay();
    const users = readUsers();
    if (users.find((u) => u.email === email)) throw new Error("Email already registered");
    const id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const newUser = { id, name, email, password, role };
    users.push(newUser);
    writeUsers(users);
    const { password: p, ...user } = newUser;
    return user;
  },

  async currentUserFromLocalStorage() {
    // used by context if needed
    const raw = localStorage.getItem("lms_user");
    if (!raw) return null;
    return JSON.parse(raw);
  },
};
