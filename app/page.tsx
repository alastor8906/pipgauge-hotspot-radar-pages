import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "热点需求雷达 | PipGauge · PositionMath",
  description:
    "每日扫描全球英文市场热点，筛选与 PipGauge 和 PositionMath 计算器贴合的内容机会与流量打法。",
  openGraph: {
    title: "热点需求雷达",
    description: "PipGauge · PositionMath 全球英文热点与计算需求看板",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <main className="radar-frame-shell">
      <iframe
        className="radar-frame"
        src="/radar/index.html"
        title="PipGauge 与 PositionMath 热点需求雷达"
      />
      <noscript>
        <a className="fallback-link" href="/radar/index.html">
          打开热点需求雷达
        </a>
      </noscript>
    </main>
  );
}
