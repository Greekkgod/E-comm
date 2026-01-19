import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    // Extract user ID from request headers (set by middleware)
    const userId = req.headers.get("x-user-id");
    console.log("userId in get function", userId);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized: No user ID found" }, { status: 401 });
    }

    // Fetch user details from the database
    const user = await prisma.userDetails.findFirst({
      where: { id:  userId },
      include: {
        _count: {
          select: { orders: true }
        }
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Flatten the response so user.orders is a number
    const userWithCount = {
        ...user,
        orders: user._count.orders
    };

    return NextResponse.json({ user: userWithCount }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
