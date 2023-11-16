import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { signIn, useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";

export default function Navbar() {
  const session = useSession();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-600/50 bg-[#0B0B13]/60 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href={"/"} className="flex z-40 font-semibold ">
            <span>scripter.</span>
          </Link>

          <div className="hidden items-center space-x-12 sm:flex">
            <>
              <Link href={"/"} className={"text-sm"}>
                Pricing
              </Link>
              {session.status === "unauthenticated" ? (
                <button onClick={() => signIn("google")} className={"text-sm"}>
                  Sign In
                </button>
              ) : session.data?.user?.image ? (
                <UserAvatar src={session.data.user.image} />
              ) : (
                <div className="rounded-full h-6 w-6 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700" />
              )}
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
