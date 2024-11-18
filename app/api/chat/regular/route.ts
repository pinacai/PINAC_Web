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

  const chatData = await req.json().catch(() => null);
  if (!chatData) {
    return NextResponse.json(
      { error: "BAD_REQUEST", message: "Invalid request body" },
      { status: 400 }
    );
  }
  const userInput = chatData.input;
  chatData.messages.push({ role: "user", content: userInput });
  const responseData: any = await fetch(`${process.env.AI_SERVER_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chatData.messages),
  });
  const response = await responseData.json()[0].response.response;
  return NextResponse.json({ user: userInput, assistant: response });
}

export const runtime = "edge"; // 'nodejs' | 'edge'
