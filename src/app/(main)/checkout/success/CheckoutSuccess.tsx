"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      
      {orderId && (
        <div className="bg-gray-50 p-4 rounded-md border mb-8 w-full max-w-sm">
          <p className="text-sm text-gray-500 mb-1">Order ID</p>
          <p className="font-mono font-medium text-lg">{orderId}</p>
        </div>
      )}

      <div className="flex gap-4">
        <Link href="/">
          <Button variant="outline">Return Home</Button>
        </Link>
        <Link href="/user/orders">
          <Button>View My Orders</Button>
        </Link>
      </div>
    </div>
  );
}