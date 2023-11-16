"use client";

import React from "react";
import Navbar from "./Navbar";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const outfit = Outfit({ weight: "500", subsets: ["latin"] });

export default function LandingPage() {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="w-full pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 85.1% 50.1%,85.1% 50.1%,85.1% 50.1%,85.1% 50.1%)",
            }}
            className="opacity-65 animate-gradient-x sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 via-[#1ADE97] to-cyan-400"
          />
        </div>
        <div
          aria-hidden="true"
          className="w-full pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 85.1% 50.1%,85.1% 50.1%,85.1% 50.1%,85.1% 50.1%)",
            }}
            className="opacity-65 animate-gradient-x sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] +translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 via-[#1ADE97] to-cyan-400"
          />
        </div>
      </div>
      <Navbar />
      <div className="flex flex-col relative items-center text-center justify-center min-h-[calc(100vh-14vh)]">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#1ADE97] bg-slate-900 px-7 py-2 shadow-md backdrop-blur transition-all">
          <p className="text-sm font-semibold text-white">
            Scripter is now public!
          </p>
        </div>
        <h2
          className={cn(
            "max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl",
            outfit.className
          )}
        >
          Create <span className="text-[#1ADE97]">captions</span> with an
          embedded video link.
        </h2>
        <p className="max-w-xl mt-6 font-medium text-gray-200">
          Effortlessly transform any video into captivating narratives with our
          AI-powered caption generator.
        </p>
        <Button
          onClick={() => {
            session.data?.user.email
              ? router.push("/dashboard")
              : toast.error("Sign In to continue");
          }}
          className="mt-5"
          variant={"secondary"}
        >
          Get Started
          <ArrowRight className="h-4 w-4 mx-2" />
        </Button>
      </div>
      <div className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 3.0,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-4 rounded-xl bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </>
  );
}
