"use client";
import ProductListing from "@/components/ProductListing";
import axios from "axios";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import { useParams } from "next/navigation";

const Page: React.FC = () => {
  const { setProducts } = useProductStore();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>("/api/products/getall");
        
        // Map common slugs to category keywords
        const categoryMap: Record<string, string> = {
            "fresh-products": "fresh",
            "milk-products": "milk",
            "grocery": "grocery",
            "drinks": "drinks",
            "vegetables": "vegetables",
            "fruit": "fruit",
            "fruits": "fruit"
        };
        
        const searchTerm = categoryMap[slug] || slug;

        const filtered = response.data.filter(product => {
            if (!product.category) return false;
            // Check if any category string matches the search term (case insensitive)
            return Array.isArray(product.category) 
                ? product.category.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
                : (product.category as string).toLowerCase().includes(searchTerm.toLowerCase());
        });
        
        setProducts(response.data);
        setFilteredProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProducts();
  }, [slug, setProducts]);

  if (loading) return <div className="w-full text-center py-20">Loading products...</div>;

  return (
    <main className="w-full px-4 md:px-8 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 capitalize text-center text-[#10281E]">
        {slug?.replace(/-/g, ' ')}
      </h1>
      {filteredProducts.length > 0 ? (
        <ProductListing products={filteredProducts} />
      ) : (
        <div className="text-center py-10 text-gray-500">
          No products found in this category.
        </div>
      )}
    </main>
  );
};

export default Page;
