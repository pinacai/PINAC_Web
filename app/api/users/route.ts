import { NextRequest, NextResponse } from "next/server";
import { verifyRequest } from "@/firebase/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Authorization token required");
  }
  const authToken = authHeader.split("Bearer ")[1];

  const decodedToken = await verifyRequest(authToken);

  if (!decodedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Your protected data logic here
  const protectedData = {
    message: "This is protected data",
    userId: decodedToken.uid,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(protectedData);
}

export const runtime = "edge"; // 'nodejs' | 'edge'
