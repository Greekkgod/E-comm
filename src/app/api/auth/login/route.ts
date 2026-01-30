import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs"; // Use bcryptjs instead of bcrypt
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // 1. Find user
    const user = await prisma.userDetails.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 2. Check Password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 3. Generate Token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // 4. Set Cookie safely using Next.js API
    // Note: await cookies() is required in Next.js 15+, works in 14 too if awaited
    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true, // Prevents JavaScript from accessing the cookie (security)
      secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
      sameSite: "lax", // Protects against CSRF
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // 5. Return success (and token in body just in case client needs it)
    return NextResponse.json(
      { 
        message: "Login successful",
        user: { id: user.id, email: user.email } 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}