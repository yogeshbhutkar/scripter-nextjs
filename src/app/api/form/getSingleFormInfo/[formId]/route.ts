import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const url = req.url.split("/");
  const formId = url[url.length - 1];

  try {
    const form = await db.form.findUnique({
      where: {
        id: formId,
      },
    });
    return NextResponse.json(form);
  } catch (err) {
    console.log(err);
    return new Response("GET operation failed", { status: 400 });
  }
};
