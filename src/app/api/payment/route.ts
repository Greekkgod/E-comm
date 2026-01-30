import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Cashfree is not configured. Payment initiation skipped.");
  return NextResponse.json({ error: "Cashfree is not configured." }, { status: 500 });
}