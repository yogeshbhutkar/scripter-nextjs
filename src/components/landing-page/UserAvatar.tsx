import React from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

export default function UserAvatar({ src }: { src: string }) {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          src={src}
          alt={"user-avatar"}
          height={30}
          width={30}
          className="rounded-full cursor-pointer object-fill"
        />
      </PopoverTrigger>
      <PopoverContent className="w-44 dark">
        <div className="grid gap-4">
          <span
            className="text-sm w-full hover:bg-slate-800 px-3 py-2 flex items-center rounded-md text-center cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </span>
          <span
            className="text-sm w-full hover:bg-slate-800 px-3 py-2 rounded-md cursor-pointer"
            onClick={() => signOut()}
          >
            Sign Out
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
