"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  product: {
    name: string;
    image: string[];
  };
}

interface Order {
  id: string;
  orderId: string;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
}

export default function UserOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/api/user/orders");
        setOrders(data);
      } catch (err) {
        setError("Failed to load orders");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div className="text-center py-8">Loading your orders...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (orders.length === 0) return <div className="text-center py-8">No orders found.</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Orders</h2>
      {orders.map((order) => (
        <Card key={order.id} className="overflow-hidden">
          <div className="bg-muted/30 p-4 border-b flex flex-wrap justify-between items-center gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Order ID</p>
              <p className="font-mono text-sm">{order.orderId}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Date</p>
              <p className="text-sm">{format(new Date(order.createdAt), "MMM d, yyyy")}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Total</p>
              <p className="font-bold">{formatCurrency(order.total)}</p>
            </div>
            <div>
              <Badge variant={order.status === "PAID" ? "default" : "secondary"}>
                {order.status}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image[0] || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium line-clamp-1">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(item.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
