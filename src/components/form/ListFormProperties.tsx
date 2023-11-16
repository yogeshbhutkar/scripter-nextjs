import { Form } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

export interface FormType {
  label: string;
  option: string[];
  type: "checkbox" | "radiobutton" | "textfield";
}

export default function ListFormProperties({ form }: { form: Form }) {
  const [formContent, setFormContent] = useState<FormType[]>();

  useEffect(() => {
    let temp: FormType[] = [];
    form.formType.map((type) => {
      temp.push({
        //@ts-ignore
        label: type?.label,
        //@ts-ignore
        option: type?.option!,
        //@ts-ignore
        type: type?.type,
      });
    });

    setFormContent(temp);

    console.log(formContent);
  }, [form]);

  return (
    <div className="py-14 w-full border border-gray-700 rounded-lg my-14">
      {formContent?.map((form, index) => (
        <div key={index} className="flex items-center justify-center">
          <p className="flex">{form.label}</p>
          {form.type === "checkbox" ? (
            <Checkbox />
          ) : form.type === "radiobutton" ? (
            <p>radiobutton</p>
          ) : (
            <Input className="dark w-fit" />
          )}
        </div>
      ))}
    </div>
  );
}
