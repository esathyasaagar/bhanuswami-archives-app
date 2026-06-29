import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { podcasts } from "../data/content";

export default function PodcastsPage() {
  return (
    <PageLayout title="Podcasts" breadcrumbs={[{ label: "Podcasts", href: "/podcasts" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Podcast episodes by His Holiness Bhanu Swami Maharaj — updated November 2025 through January 2026. Topics cover Vaiṣṇava philosophy, the science of devotion, and practical spiritual guidance.
        </p>
      </div>

      {Object.entries(podcasts).sort(([a], [b]) => Number(b) - Number(a)).map(([year, episodes]) => (
        <div key={year} style={{ marginBottom: 24 }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Podcasts – {year}</h2>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none" }}>
            {episodes.map((ep, i) => (
              <div key={i} style={{ padding: "16px", borderBottom: "1px solid #eee", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, background: "#1a6b8a", flexShrink: 0, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "white", fontSize: 20 }}>🎙</span>
                </div>
                <div>
                  <Link href={ep.href} style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#8b1a1a", display: "block", marginBottom: 4 }}>{ep.title}</Link>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999" }}>{ep.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ background: "#f0f4f8", border: "1px solid #ddd", padding: 16 }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#555", margin: 0 }}>
          More podcast episodes available at <Link href="/podcasts-2025" style={{ color: "#8b1a1a" }}>Podcasts 2025</Link> and <Link href="/podcast-2020" style={{ color: "#8b1a1a" }}>Podcasts 2020</Link>.
        </p>
      </div>
    </PageLayout>
  );
}
