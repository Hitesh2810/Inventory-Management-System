"use client";

import { useMemo, useState } from "react";
import { Plus, Search, SlidersHorizontal, Trash2 } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/tables/DataTable";
import { Modal } from "@/components/modals/Modal";
import { ProductForm } from "@/components/forms/ProductForm";
import { products as initialProducts } from "@/data/mockData";

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState(false);

  const categories = ["All", ...new Set(initialProducts.map((product) => product.category))];
  const filtered = useMemo(() => products.filter((product) => {
    const matchesQuery = `${product.name} ${product.sku}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesQuery && matchesCategory;
  }), [products, query, category]);

  function addProduct(values) {
    setProducts([{ id: Date.now(), velocity: 50, reorder: 100, ...values, stock: Number(values.stock), price: Number(values.price) }, ...products]);
    setOpen(false);
  }

  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader
          title="Products intelligence"
          description="Searchable product grid, live inventory indicators, filters, status badges, and CRUD-ready modal flows."
          action={<Button onClick={() => setOpen(true)}><Plus className="h-4 w-4" />Add product</Button>}
        />
        <GlassCard className="mb-4">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
            <Input icon={Search} placeholder="Search products or SKU..." value={query} onChange={(event) => setQuery(event.target.value)} />
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <Button key={item} variant={category === item ? "primary" : "secondary"} size="sm" onClick={() => setCategory(item)}>
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </GlassCard>
        <div className="grid gap-4 lg:grid-cols-3">
          {filtered.map((product) => (
            <GlassCard key={product.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Badge tone={product.status === "Critical" ? "rose" : product.status === "Low Stock" ? "amber" : "emerald"}>{product.status}</Badge>
                  <h2 className="mt-4 text-xl font-bold text-white">{product.name}</h2>
                  <p className="mt-1 text-sm text-white/45">{product.sku} · {product.category}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setProducts(products.filter((item) => item.id !== product.id))} aria-label="Delete product">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-5">
                <div className="mb-2 flex justify-between text-xs text-white/45"><span>Inventory</span><span>{product.stock} units</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300 shadow-glow" style={{ width: `${Math.min(product.velocity, 100)}%` }} />
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-black text-white">${product.price}</span>
                <Button variant="secondary" size="sm"><SlidersHorizontal className="h-4 w-4" />Edit</Button>
              </div>
            </GlassCard>
          ))}
        </div>
        <GlassCard className="mt-4">
          <DataTable columns={[
            { key: "name", label: "Product" },
            { key: "sku", label: "SKU" },
            { key: "category", label: "Category" },
            { key: "stock", label: "Stock" },
            { key: "price", label: "Price", render: (row) => `$${row.price}` },
            { key: "status", label: "Status" }
          ]} rows={filtered} />
        </GlassCard>
        <Modal open={open} onClose={() => setOpen(false)} title="Add product">
          <ProductForm onSubmit={addProduct} />
        </Modal>
      </AppShell>
    </ProtectedRoute>
  );
}
