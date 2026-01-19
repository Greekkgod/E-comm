import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [totalProducts, totalOrders, totalRevenue, recentOrders] = await Promise.all([
      prisma.productDetails.count(),
      prisma.order.count(),
      prisma.order.aggregate({
        _sum: {
          total: true,
        },
        where: {
            status: "PAID"
        }
      }),
      prisma.order.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      }),
    ]);

    return NextResponse.json({
      totalProducts,
      totalOrders,
      totalRevenue: totalRevenue._sum.total || 0,
      recentOrders,
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
