"use client";

import ListFormProperties from "@/components/form/ListFormProperties";
import MaxHeightWrapper from "@/components/landing-page/MaxHeightWrapper";
import MaxWidthWrapper from "@/components/landing-page/MaxWidthWrapper";
import Navbar from "@/components/landing-page/Navbar";
import { Form } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface PageParams {
  params: {
    formId: string;
  };
}

export default function page({ params }: PageParams) {
  const formId = params.formId;

  const { data: fetchForm } = useQuery({
    queryKey: ["form", formId],
    queryFn: async () => {
      const { data } = await axios.get(`/api/form/getSingleFormInfo/${formId}`);
      console.log(data);
      return data as Form;
    },
  });

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <MaxHeightWrapper>
          <div className="text-white text-lg">{fetchForm?.title}</div>
          {fetchForm ? <ListFormProperties form={fetchForm} /> : null}
        </MaxHeightWrapper>
      </MaxWidthWrapper>
    </>
  );
}
