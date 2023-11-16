"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import { Textarea } from "../ui/textarea";
import { Progress } from "../ui/progress";
import { toast } from "sonner";
import { generateFormPrompt } from "@/lib/prompts";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useSession } from "next-auth/react";

export default function FormDialog() {
  const [context, setContext] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState<string>("");

  const session = useSession();

  const { mutate: handleSubmit, isPending } = useMutation({
    mutationFn: async () => {
      await axios
        .post("/api/generate", {
          prompt: generateFormPrompt,
          context: context,
        })
        .then((data) => {
          axios.post("/api/form", {
            userId: session.data?.user?.id,
            title,
            formTypes: data.data,
          });
        });
    },
    onSuccess: () => {
      toast.success("Successfully generated form");
      setOpen(false);
    },
    onSettled: () => {
      setTitle("");
      setContext("");
      setProgress(0);
    },
  });

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setProgress((prev) => {
          if (prev < 95 && isPending) {
            return prev + 5;
          } else if (prev > 20 && prev < 95) {
            return 100;
          } else {
            return prev;
          }
        }),
      1500
    );
    return () => clearTimeout(timer);
  }, [isPending, progress]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "space-x-2 bg-white"
        )}
      >
        <span>Create a form</span>
        <Plus className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent className="dark">
        <DialogHeader className="space-y-5 mt-10">
          <div className="items-center space-y-1">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write a beautiful title"
              className="col-span-3"
            />
          </div>
          <div>
            <Label htmlFor="prompt" className="text-left">
              Prompt
            </Label>
            <Textarea
              id="prompt"
              placeholder="Enter a prompt to generate the form."
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>
          {isPending ? (
            <Progress value={progress} className={cn("h-2 text-green-400")} />
          ) : (
            <Button
              disabled={context.length === 0}
              onClick={() => handleSubmit()}
            >
              Generate
            </Button>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
