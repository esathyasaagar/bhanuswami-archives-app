import Link from "next/link";
import PageLayout from "../components/PageLayout";

const events = [
  {
    title: "Madhura Mahotsava",
    href: "/madhura/2025",
    desc: "Annual festival celebrating the sweet pastimes of Lord Kṛṣṇa and rasa-tattva.",
    years: [{ label: "2025", href: "/madhura/2025" }],
    color: "#8b1a1a",
  },
  {
    title: "Śravaṇa Utsav",
    href: "/shravana-utsav/2025",
    desc: "Annual festival dedicated to śravaṇa (hearing) of transcendental topics.",
    years: [{ label: "2025", href: "/shravana-utsav/2025" }, { label: "2024", href: "/shravana-utsav/2024" }],
    color: "#1a6b8a",
  },
  {
    title: "Kārttika Month",
    href: "/km/2024",
    desc: "Dāmodara Month lectures — the most auspicious month of the year for devotional practice.",
    years: [{ label: "2024", href: "/km/2024" }, { label: "2022", href: "/km/2022" }],
    color: "#5a1a8a",
  },
  {
    title: "Mayapur Seminars",
    href: "/seminars/mayapur/2025",
    desc: "Seminars delivered at the ISKCON headquarters in Śrī Māyāpur Dhāma.",
    years: [{ label: "2025", href: "/seminars/mayapur/2025" }],
    color: "#1a5a2a",
  },
];

export default function SpecialEventsPage() {
  return (
    <PageLayout title="Special Events" breadcrumbs={[{ label: "Special Events", href: "/special-events" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Special annual events and festivals featuring extensive lecture series by Bhanu Swami Maharaj.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {events.map((e) => (
          <div key={e.href} style={{ background: "white", border: "1px solid #ddd", overflow: "hidden" }}>
            <div style={{ background: e.color, padding: "20px 16px" }}>
              <h3 style={{ color: "white", fontFamily: "Georgia, serif", fontSize: 18, margin: 0 }}>{e.title}</h3>
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.6, margin: "0 0 12px" }}>{e.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {e.years.map((y) => (
                  <Link key={y.href} href={y.href} style={{ background: e.color, color: "white", padding: "5px 12px", fontFamily: "Arial, sans-serif", fontSize: 12, borderRadius: 2, textDecoration: "none" }}>
                    {y.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
