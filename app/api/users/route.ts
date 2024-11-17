/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { verifyRequest } from "@/firebase/server";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "Authorization token required",
        },
        { status: 401 }
      );
    }
    const authToken = authHeader.split("Bearer ")[1];

    try {
      await verifyRequest(authToken);
    } catch (error: any) {
      if (error.code === "TOKEN_EXPIRED") {
        return NextResponse.json(
          {
            error: "Unauthorized",
            message: "Your token has expired",
          },
          { status: 401 }
        );
      }
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: error.message,
        },
        { status: 401 }
      );
    }

    // Your protected data logic here
    const protectedData = {
      status: "success",
      message: "This is protected data",
    };

    return NextResponse.json(protectedData);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error.message || "Authentication failed",
      },
      { status: 500 }
    );
  }
}

export const runtime = "edge"; // 'nodejs' | 'edge'
