"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DemonstrationVideo from "../DemonstrationVideo";

export default function FeaturePage() {
  return (
    <div className="min-h-screen">
      <div>
        <div className="relative isolate">
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-600/25 p-2 ring-1 ring-inset ring-gray-700/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src={"/hero-element.png"}
                    width={1677}
                    height={970}
                    quality={100}
                    alt="product preview"
                    className="rounded-md bg-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none ml-40 absolute inset-x-0 flex items-center justify-center -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
          >
            <div
              style={{
                clipPath:
                  "polygon(92% 6%, 74% 4%, 56% 7%, 29% 6%, 8% 5%, 1% 13%, 0% 30%, 0% 63%, 40% 95%, 60% 95%, 75% 91%, 100% 59%, 100% 33%, 100% 11%)",
              }}
              className="opacity-35 top-52 animate-gradient-x sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] relative left-[calc(50%-11rem)] aspect-[1155/678] w-[15.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 via-[#1ADE97] to-cyan-400"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mb-40 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl sm:text-5xl">
              Unleash your <span className="text-[#1ADE97]">visuals</span> with{" "}
              <span className="text-cyan-500">words.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-200 flex items-center justify-center text-center">
              Transforming Ideas into Impactful Narratives, Your Words, Our
              Magic.
              <span>
                <Sparkles className="h-5 text-[#1ADE97] w-5 ml-2" />
              </span>
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="space-y-4 py-20 md:flex md:space-x-12 md:space-y-0 my-10">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-400 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-bold text-[#1ADE97]">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-200">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href={"/pricing"}
                  className="text-blue-400 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-400 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-[#1ADE97]">Step 2</span>
              <span className="text-xl font-semibold">Embed a video url</span>
              <span className="mt-2 text-zinc-200">
                We&apos;ll process the video url and generate captions for it.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-400 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-[#1ADE97]">Step 3</span>
              <span className="text-xl font-semibold">
                Download the captions
              </span>
              <span className="mt-2 text-zinc-200">
                Download the captions in any format you want. Now supports
                multiple languages.
              </span>
            </div>
          </li>
        </ol>
        <DemonstrationVideo />
      </div>
    </div>
  );
}
