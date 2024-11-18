/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { verifyRequest, handleAuthError } from "@/firebase/server";

export async function POST(req: NextRequest) {
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

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json(
      { error: "BAD_REQUEST", message: "Invalid request body" },
      { status: 400 }
    );
  }
  const responseData: any = await fetch(`${process.env.REGULAR_AI_SERVER_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const response = await responseData.json().response;
  return NextResponse.json({ user: body.userInput, assistant: response });
}

export const runtime = "edge"; // 'nodejs' | 'edge'
