import { delay } from "./api";

const USERS_KEY = "lms_mock_users";

function readUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export const userService = {
  async getAllStudents() {
    await delay();
    return readUsers().filter((u) => u.role === "STUDENT");
  },

  async getById(id) {
    await delay();
    return readUsers().find((u) => u.id === Number(id));
  },

  async updateProfile(id, payload) {
    await delay();
    const users = readUsers();
    const idx = users.findIndex((u) => u.id === Number(id));
    if (idx === -1) throw new Error("User not found");
    users[idx] = { ...users[idx], ...payload };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    const { password, ...user } = users[idx];
    return user;
  },
};
