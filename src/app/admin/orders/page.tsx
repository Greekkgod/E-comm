"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/api/admin/orders");
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading orders...</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Orders Management</h1>
      <div className="rounded-md border bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="p-4 text-left font-medium">Order ID</th>
              <th className="p-4 text-left font-medium">Date</th>
              <th className="p-4 text-left font-medium">Customer</th>
              <th className="p-4 text-left font-medium">Items</th>
              <th className="p-4 text-left font-medium">Total</th>
              <th className="p-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50">
                <td className="p-4 font-mono">{order.orderId}</td>
                <td className="p-4">{format(new Date(order.createdAt), "MMM d, yyyy")}</td>
                <td className="p-4">
                  <div className="font-medium">{order.user?.name || "Guest"}</div>
                  <div className="text-xs text-muted-foreground">{order.user?.email}</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-4 text-xs">
                    {order.items.map((item: any) => (
                        <li key={item.id}>{item.product?.name} (x{item.quantity})</li>
                    ))}
                  </ul>
                </td>
                <td className="p-4 font-medium">{formatCurrency(order.total)}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    order.status === "PAID" ? "bg-green-100 text-green-800" :
                    order.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-muted-foreground">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
