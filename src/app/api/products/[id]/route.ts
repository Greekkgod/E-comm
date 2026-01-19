import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Change the type definition to match Next.js expected structure
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id : string }> }
) {
  try {
    const {id : productId } = await params

    if (!productId) {
      return NextResponse.json({ error: "Missing product ID" }, { status: 400 });
    }

    const product = await prisma.productDetails.findUnique({
      where: { id: productId },
      include: {
        reviews: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id : string }> }
) {
  try {
    const { id: productId } = await params;

    await prisma.productDetails.delete({
      where: { id: productId },
    });

    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}