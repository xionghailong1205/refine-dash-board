import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Refine Dashboard",
  description: "基于 Refine + Next.js + shadcn/ui 的管理面板",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
