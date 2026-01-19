import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const products = await prisma.productDetails.findMany({
      include: {
        reviews: {
          include: {
            user: true, // Include the user details of the reviewers (optional)
          },
        },
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
