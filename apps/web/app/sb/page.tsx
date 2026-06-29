import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { sbCantos } from "../data/content";

export default function SBPage() {
  return (
    <PageLayout title="Śrīmad-Bhāgavatam" breadcrumbs={[{ label: "Śrīmad-Bhāgavatam", href: "/sb" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          The Śrīmad-Bhāgavatam (Bhāgavata Purāṇa) is the ripened fruit of the tree of Vedic literature, composed by Śrīla Vyāsadeva. His Holiness Bhanu Swami Maharaj's extensive lecture series covers the available cantos with deep philosophical insight and practical application for devotees.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
        {sbCantos.map((c) => (
          <Link key={c.canto} href={`/sb/${c.canto}`} style={{ textDecoration: "none" }}>
            <div style={{ background: "white", border: "1px solid #ddd", borderLeft: "4px solid #8b1a1a", padding: 16, transition: "box-shadow 0.2s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ background: "#8b1a1a", color: "white", width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif", fontSize: 14, fontWeight: "bold", flexShrink: 0 }}>
                  {c.canto}
                </span>
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: "bold", color: "#8b1a1a" }}>Canto {c.canto}</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666" }}>{c.title}</div>
                </div>
              </div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#888" }}>
                {c.chapters.length} lectures available
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
