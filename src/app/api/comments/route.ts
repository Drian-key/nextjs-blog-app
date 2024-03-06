import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "Not Authenticated!" },
        { status: 401 }
      );
    }

    const { text, postId } = await req.json();

    const newComment = await prisma.comment.create({
      data: {
        text,
        userId: user.id,
        postId,
      },
    });

    return NextResponse.json({ data: newComment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
