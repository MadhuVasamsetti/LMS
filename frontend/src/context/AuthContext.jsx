import React, { createContext, useContext, useState } from "react";

// Create Context
const AuthContext = createContext();

// Custom Hook
export function useAuth() {
  return useContext(AuthContext);
}

// Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Mock login
  function login(name, role) {
    // role can be "STUDENT" or "ADMIN"
    setUser({ name, role });
  }

  // Logout
  function logout() {
    setUser(null);
  }

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
