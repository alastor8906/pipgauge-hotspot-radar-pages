import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "热点需求雷达",
  description: "PipGauge · PositionMath 全球英文热点与计算需求看板",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
