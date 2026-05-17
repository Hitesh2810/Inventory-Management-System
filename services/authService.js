import api from "./api";

const mockUser = {
  id: 1,
  name: "Avery Stone",
  email: "avery@novaims.ai",
  role: "Operations Director",
  avatar: "AS"
};

export const authService = {
  async login(payload) {
    await new Promise((resolve) => setTimeout(resolve, 650));
    if (typeof window !== "undefined") {
      localStorage.setItem("novaims_access_token", "mock-access-token");
    }
    return { user: mockUser, access: "mock-access-token", refresh: "mock-refresh-token", payload };
  },
  async signup(payload) {
    await new Promise((resolve) => setTimeout(resolve, 750));
    return { user: { ...mockUser, name: payload.name, email: payload.email }, access: "mock-access-token" };
  },
  async verifyOtp(payload) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { verified: true, payload };
  },
  async me() {
    try {
      return (await api.get("/auth/me/")).data;
    } catch {
      return mockUser;
    }
  },
  logout() {
    if (typeof window !== "undefined") localStorage.removeItem("novaims_access_token");
  }
};
