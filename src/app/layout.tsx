import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "scripter.",
  description: "Scripter is a generative AI powered registration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "bg-[#0B0B13] min-h-screen text-white")}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
