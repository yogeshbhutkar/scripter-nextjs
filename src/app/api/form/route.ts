import { FormType } from "@/components/form/ListFormProperties";
import { db } from "@/lib/db";

export const POST = async (req: Request, res: Response) => {
  const { userId, title, formTypes } = await req.json();
  try {
    await db.form.create({
      data: {
        title,
        formType: formTypes.data,
        userId,
      },
    });
    return new Response("Ok");
  } catch (err) {
    console.log(err);
    return new Response("POST operation failed", { status: 400 });
  }
};
