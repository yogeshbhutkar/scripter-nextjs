import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <div className="flex justify-between bg-black">
      <div className="p-20 h-[25vh] ">
        <p>Scripter.{"  "}@2023</p>
        <div className="text-sm mt-5">
          <p>Have some queries? Feel free to write it down here.</p>
          <a
            className={cn(buttonVariants({ variant: "default" }), "mt-2")}
            href="mailto: yogeshbhutkar3@gmail.com"
          >
            Send Mail
          </a>
        </div>
      </div>
      <div className="p-20 h-[25vh] bg-black pr-32">
        <p>Socials</p>
        <div className="text-sm mt-5 space-y-2">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}
