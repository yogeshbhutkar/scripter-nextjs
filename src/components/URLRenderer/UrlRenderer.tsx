import { useAtom } from "jotai";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { inputURLAtom } from "../atoms";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Clapperboard, Sparkles } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

export default function UrlRenderer() {
  const [url] = useAtom(inputURLAtom);
  const [res, setRes] = useState<string>();

  const { mutate: handleSubmit, isPending } = useMutation({
    mutationFn: async () => {
      if (url) {
        const payload: { youtubeUrl: string } = {
          youtubeUrl: url,
        };
        const { data } = await axios.post(
          "https://transcribe-backend-s1nz.onrender.com/transcribe",
          payload
        );
        setRes(data.text);
        return data as string;
      }
    },
    onError: () => {
      toast.error("Something went wrong, please try again later.");
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="flex items-center justify-center">
          {url ? (
            <div>
              <ReactPlayer url={url} />
              <Button
                isLoading={isPending}
                onClick={() => handleSubmit()}
                className="w-full mt-3 border bg-[#37b385] hover:bg-[#50cea0] border-gray-800"
              >
                Generate
                <span className="ml-2">
                  <Sparkles className="h-4 w-4" />
                </span>
              </Button>
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center gap-2 bg-zinc-900 p-20 rounded-xl border border-slate-700">
              <Clapperboard className="h-28 w-28 text-[#1ADE97]" />
              <h3 className="font-semibold text-xl">Captions on the go!</h3>
              <p>Enter the url to start rendering the captions.</p>
            </div>
          )}
        </div>
        <div className="mt-5">
          {res && (
            <ScrollArea className="h-[200px] w-full border border-slate-800 mt-3 rounded-md  p-4">
              <p>{res}</p>
            </ScrollArea>
          )}
        </div>
      </div>
    </div>
  );
}
