import { NextResponse } from "next/server";

export async function GET(req, res) {
    console.log("Cashfree verification is not configured.");
    return NextResponse.json({ message: "Cashfree verification is not configured." }, { status: 200 });
}