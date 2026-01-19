"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component or use standard textarea
import { Label } from "@/components/ui/label";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "", // Simple string for now, comma separated for multiple?
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/products", {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        image: [formData.image], // Wrapping in array as schema expects String[]
        category: [formData.category],
      });
      router.push("/admin/products");
    } catch (error) {
      console.error("Failed to create product", error);
      alert("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg border">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input id="name" name="name" required onChange={handleChange} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" name="description" onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price (₹)</Label>
            <Input id="price" name="price" type="number" required onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stock">Stock</Label>
            <Input id="stock" name="stock" type="number" required onChange={handleChange} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" placeholder="e.g. fresh, grocery" required onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input id="image" name="image" placeholder="/images/..." required onChange={handleChange} />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating..." : "Create Product"}
        </Button>
      </form>
    </div>
  );
}
