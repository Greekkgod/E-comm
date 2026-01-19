"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, DollarSign, Users } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Stats {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  recentOrders: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get("/api/admin/stats");
        setStats(data);
      } catch (error) {
        console.error("Failed to load stats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!stats) return <div>Failed to load dashboard.</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="rounded-md border bg-white">
          <div className="p-4 grid grid-cols-4 font-medium border-b">
            <div>Order ID</div>
            <div>Customer</div>
            <div>Total</div>
            <div>Status</div>
          </div>
          {stats.recentOrders.map((order: any) => (
            <div key={order.id} className="p-4 grid grid-cols-4 border-b last:border-0">
              <div className="truncate">{order.orderId}</div>
              <div>{order.user?.name || "Guest"}</div>
              <div>{formatCurrency(order.total)}</div>
              <div>
                <span className={`px-2 py-1 rounded text-xs ${
                  order.status === "PAID" ? "bg-green-100 text-green-800" :
                  order.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
          {stats.recentOrders.length === 0 && (
            <div className="p-4 text-center text-muted-foreground">No orders found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
