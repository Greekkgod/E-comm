"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Reusing the public API for now
        const { data } = await axios.get("/api/products/getall");
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
      if(!confirm("Are you sure you want to delete this product?")) return;
      try {
          await axios.delete(`/api/products/${id}`);
          setProducts(products.filter(p => p.id !== id));
      } catch (error) {
          alert("Failed to delete product");
      }
  }

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/admin/products/add">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
            <div className="relative aspect-video w-full bg-gray-100">
              <Image 
                src={product.image[0] || "/placeholder.svg"} 
                alt={product.name} 
                fill 
                className="object-contain p-2" 
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-medium truncate" title={product.name}>{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">Stock: {product.stock}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold">{formatCurrency(product.price)}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" disabled>
                    <Edit className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
