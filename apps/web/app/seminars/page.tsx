import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { seminars } from "../data/content";

const years = Object.keys(seminars).sort((a, b) => Number(b) - Number(a));

export default function SeminarsPage() {
  return (
    <PageLayout title="Seminars Archive" breadcrumbs={[{ label: "Seminars", href: "/seminars" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          His Holiness Bhanu Swami Maharaj travels extensively across the world delivering seminars on Vaiṣṇava philosophy, devotional practice, and the teachings of the Gauḍīya ācāryas. This archive organizes those seminars by year and location.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {years.map((year) => {
          const locations = Object.keys(seminars[year]);
          return (
            <Link key={year} href={`/seminars/${year}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "white", border: "1px solid #ddd", borderTop: "4px solid #8b1a1a", padding: 16 }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: "bold", color: "#8b1a1a", marginBottom: 6 }}>{year}</div>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.6 }}>
                  {locations.map((l) => l.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())).join(" · ")}
                </div>
                <div style={{ marginTop: 10, fontFamily: "Arial, sans-serif", fontSize: 11, color: "#8b1a1a", fontWeight: "bold" }}>
                  View seminars →
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div style={{ marginTop: 20, background: "#fafafa", border: "1px solid #ddd", padding: 16 }}>
        <h3 style={{ fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: "bold", textTransform: "uppercase", color: "#555", margin: "0 0 10px" }}>Also See</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            { label: "Seminars – Mayapur 2025", href: "/seminars/mayapur/2025" },
            { label: "The Mystery of Sound", href: "/seminars/the-mystery-of-sound" },
            { label: "Love of God – Virtual Reality Relationships", href: "/seminar/relationship" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "#8b1a1a", color: "white", padding: "7px 14px", fontFamily: "Arial, sans-serif", fontSize: 12, borderRadius: 2, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
