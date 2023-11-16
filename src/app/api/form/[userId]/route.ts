import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const url = req.url.split("/");

  const userId = url[url.length - 1];

  try {
    const forms = await db.form.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json(forms);
  } catch (err) {
    return new Response("GET Operation Failed", { status: 400 });
  }
};
