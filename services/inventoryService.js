import api from "./api";
import { inventoryLevels, stockAlerts } from "@/data/mockData";

export const inventoryService = {
  async overview() {
    try {
      return (await api.get("/inventory/overview/")).data;
    } catch {
      return { inventoryLevels, stockAlerts };
    }
  }
};
