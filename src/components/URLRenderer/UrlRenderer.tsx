import { useAtom } from "jotai";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { inputURLAtom } from "../atoms";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
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
          <div>
            {url && <ReactPlayer url={url} />}
            <Button
              isLoading={isPending}
              onClick={() => handleSubmit()}
              className="w-full mt-3 border border-gray-800"
            >
              Generate
              <span className="ml-2">
                <Sparkles className="h-4 w-4" />
              </span>
            </Button>
          </div>
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
