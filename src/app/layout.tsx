import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimal Gallery",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-[#0c0c0c]", inter.className)}>{children}</body>
    </html>
  );
}
