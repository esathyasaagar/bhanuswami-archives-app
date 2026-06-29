import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { festivals } from "../data/content";

export default function FestivalsPage() {
  const years = Object.keys(festivals).sort((a, b) => Number(b) - Number(a));
  return (
    <PageLayout title="Festivals" breadcrumbs={[{ label: "Festivals", href: "/festivals" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Lectures and talks delivered by Bhanu Swami Maharaj at Vaiṣṇava festivals and observances — including Janmāṣṭamī, Rādhāṣṭamī, Gaura Pūrṇimā, Ratha Yātrā, and other auspicious days in the Gauḍīya Vaiṣṇava calendar.
        </p>
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {years.map((year) => (
          <Link key={year} href={`/festivals/${year}`} style={{ textDecoration: "none", flex: "1 1 200px", minWidth: 200 }}>
            <div style={{ background: "white", border: "1px solid #ddd", borderTop: "4px solid #8b1a1a", padding: 20, textAlign: "center" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: "bold", color: "#8b1a1a" }}>{year}</div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#888", marginTop: 4 }}>{festivals[year].length} lectures</div>
              <div style={{ marginTop: 12, fontFamily: "Arial, sans-serif", fontSize: 12, color: "#8b1a1a", fontWeight: "bold" }}>View →</div>
            </div>
          </Link>
        ))}
        <Link href="/festivals-2017" style={{ textDecoration: "none", flex: "1 1 200px", minWidth: 200 }}>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "4px solid #8b1a1a", padding: 20, textAlign: "center" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: "bold", color: "#8b1a1a" }}>2017</div>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#888", marginTop: 4 }}>Festival archive</div>
            <div style={{ marginTop: 12, fontFamily: "Arial, sans-serif", fontSize: 12, color: "#8b1a1a", fontWeight: "bold" }}>View →</div>
          </div>
        </Link>
      </div>
    </PageLayout>
  );
}
