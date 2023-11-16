import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAtom } from "jotai";
import { PlusIcon } from "lucide-react";
import { inputURLAtom } from "../atoms";
import { useState } from "react";
export function AddURLDialog() {
  const [url, setURL] = useAtom(inputURLAtom);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="dark border border-[#1d5843] shadow shadow-green-300/30 hover:shadow-green-400/50"
        >
          Add a URL
          <span className="ml-2">
            <PlusIcon className="h-4 w-4" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a URL</DialogTitle>
          <DialogDescription>
            Copy and paste a URL here to generate captions for it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              URL
            </Label>
            <Input
              id="name"
              value={url}
              onChange={(e) => setURL(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} className="w-full">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
