"use client";

import { AddURLDialog } from "@/components/URLRenderer/AddURLDialog";
import UrlRenderer from "@/components/URLRenderer/UrlRenderer";
import MaxWidthWrapper from "@/components/landing-page/MaxWidthWrapper";
import Navbar from "@/components/landing-page/Navbar";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Outfit } from "next/font/google";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const outfit = Outfit({
  weight: ["600"],
  subsets: ["latin"],
});

export default function page() {
  const session = useSession();
  if (session.status === "unauthenticated") {
    return redirect("/");
  }

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <div className="flex my-14 justify-between">
          <h2 className={cn("text-white text-3xl", outfit.className)}>
            Hola, {session.data?.user?.name}
            <span>👋</span>
          </h2>
          <AddURLDialog />
        </div>
        <UrlRenderer />
      </MaxWidthWrapper>
    </>
  );
}
