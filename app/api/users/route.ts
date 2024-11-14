import { NextRequest, NextResponse } from "next/server";
import { verifyRequest } from "@/firebase/server";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({
        error: "Unauthorized",
        message: "Authorization token required",
      });
    }
    const authToken = authHeader.split("Bearer ")[1];

    try {
      await verifyRequest(authToken);
    } catch (error) {
      if (error.code == "TOKEN_EXPIRED") {
        return NextResponse.json({
          error: "Unauthorized",
          message: "Authorization token expired",
        });
      }
      return NextResponse.json({
        error: "Unauthorized",
        message: error.message,
      });
    }

    // Your protected data logic here
    const protectedData = {
      status: "success",
      message: "This is protected data",
    };

    return NextResponse.json(protectedData);
  } catch (error) {
    return NextResponse.json({
      error: "Internal Server Error",
      message: error.message || "Authentication failed",
    });
  }
}

export const runtime = "edge"; // 'nodejs' | 'edge'
