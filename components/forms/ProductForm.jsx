"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function ProductForm({ initialValues = {}, onSubmit }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      sku: "",
      category: "Electronics",
      stock: 0,
      price: 0,
      status: "Active",
      ...initialValues
    }
  });

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <Input label="Product name" {...register("name", { required: true })} />
      <Input label="SKU" {...register("sku", { required: true })} />
      <Input label="Category" {...register("category")} />
      <Input label="Stock" type="number" {...register("stock")} />
      <Input label="Price" type="number" {...register("price")} />
      <Input label="Status" {...register("status")} />
      <div className="sm:col-span-2">
        <Button className="w-full" type="submit">Save product</Button>
      </div>
    </form>
  );
}
