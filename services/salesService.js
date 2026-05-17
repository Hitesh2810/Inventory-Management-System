import api from "./api";
import { salesTrend, topProducts } from "@/data/mockData";

export const salesService = {
  async overview() {
    try {
      return (await api.get("/sales/overview/")).data;
    } catch {
      return { salesTrend, topProducts };
    }
  }
};
