"use client";

import { Form } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import SingleFormElement from "./SingleFormElement";

export default function UserForms() {
  const session = useSession();

  const { data: fetchForms } = useQuery({
    queryKey: ["fetch-all-forms", session.data?.user.id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/form/${session.data?.user.id}`);
      return data as Form[];
    },
  });

  return (
    <>
      {fetchForms &&
        fetchForms.map((form) => (
          <SingleFormElement key={form.id} form={form} />
        ))}
    </>
  );
}
