import api from "./api";
import { reports } from "@/data/mockData";

export const reportService = {
  async list() {
    try {
      return (await api.get("/reports/")).data;
    } catch {
      return reports;
    }
  },
  async exportReport(type) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ready: true, type, url: `/mock-exports/${type}.csv` };
  }
};
