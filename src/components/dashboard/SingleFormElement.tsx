import { Form } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SingleFormElement({ form }: { form: Form }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/form/${form.id}`)}
      className="bg-black w-full h-32 flex items-center justify-between px-10 rounded-md border-2 border-green-400 shadow-md hover:bg-neutral-950 hover:shadow-green-400/60 cursor-pointer"
    >
      <div>{form.title}</div>
      <div>Responses</div>
    </div>
  );
}
