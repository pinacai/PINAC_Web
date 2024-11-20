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
  const userInput = body.userInput;
  const promptData: any = await fetch(
    `${process.env.PROMPT_MASTER_SERVER_URL}?input=${encodeURIComponent(
      userInput
    )}`
  );
  const promptName = promptData.json();
  body.promptName = promptName.promptName;
  const responseData: any = await fetch(
    `${process.env.PROMPT_MASTER_AI_SERVER_URL}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const response = await responseData.json();
  return NextResponse.json({ user: userInput, assistant: response.response });
}

export const runtime = "edge"; // 'nodejs' | 'edge'
