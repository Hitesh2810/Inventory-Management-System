"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { authService } from "@/services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: "Avery Stone",
    email: "avery@novaims.ai",
    role: "Operations Director",
    avatar: "AS"
  });
  const [loading, setLoading] = useState(false);

  async function login(payload) {
    setLoading(true);
    const result = await authService.login(payload);
    setUser(result.user);
    setLoading(false);
    return result;
  }

  async function signup(payload) {
    setLoading(true);
    const result = await authService.signup(payload);
    setUser(result.user);
    setLoading(false);
    return result;
  }

  function logout() {
    authService.logout();
    setUser(null);
  }

  const value = useMemo(() => ({ user, loading, login, signup, logout }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
