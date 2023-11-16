import { cn } from "@/lib/utils";
import React from "react";

export default function MaxHeightWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "my-auto h-full max-h-screen-xl py-2.5 md:py-20",
        className
      )}
    >
      {children}
    </div>
  );
}
