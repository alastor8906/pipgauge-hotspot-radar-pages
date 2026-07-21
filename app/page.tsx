import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "热点内容雷达 | PipGauge · PositionMath",
  description:
    "每日扫描全球英文市场热点，筛选可独立成立的内容机会，并将产品承接控制在 10%–20%。",
  openGraph: {
    title: "热点内容雷达",
    description: "PipGauge · PositionMath 全球英文热点与内容机会看板",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <main className="radar-frame-shell">
      <iframe
        className="radar-frame"
        src="/radar/index.html"
        title="PipGauge 与 PositionMath 热点内容雷达"
      />
      <noscript>
        <a className="fallback-link" href="/radar/index.html">
          打开热点内容雷达
        </a>
      </noscript>
    </main>
  );
}
