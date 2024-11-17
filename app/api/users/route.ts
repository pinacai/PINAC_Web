/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { verifyRequest, handleAuthError } from "@/firebase/server";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Unauthorized", message: "Authorization token required" },
      { status: 401 }
    );
  }

  const authToken = authHeader.slice(7);

  try {
    await verifyRequest(authToken);
  } catch (error: any) {
    const authError = handleAuthError(error);
    return NextResponse.json(
      { code: authError.code, message: authError.message },
      { status: authError.status }
    );
  }

  return NextResponse.json({
    status: "success",
    message: "This is protected data",
  });
}

export const runtime = "edge"; // 'nodejs' | 'edge'
