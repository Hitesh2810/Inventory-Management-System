import api from "./api";
import { products } from "@/data/mockData";

export const productService = {
  async list(params = {}) {
    try {
      return (await api.get("/products/", { params })).data;
    } catch {
      return products;
    }
  },
  async create(payload) {
    try {
      return (await api.post("/products/", payload)).data;
    } catch {
      return { id: Date.now(), ...payload };
    }
  },
  async update(id, payload) {
    try {
      return (await api.patch(`/products/${id}/`, payload)).data;
    } catch {
      return { id, ...payload };
    }
  },
  async remove(id) {
    try {
      return (await api.delete(`/products/${id}/`)).data;
    } catch {
      return { deleted: true, id };
    }
  }
};
