import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";
import { karthikMonth } from "../../data/content";

export default async function KarthikMonthPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const items = karthikMonth[year as keyof typeof karthikMonth] ?? [];

  return (
    <PageLayout
      title={`Kārttika Month – ${year}`}
      breadcrumbs={[{ label: "Special Events", href: "/special-events" }, { label: `Kārttika Month ${year}`, href: `/km/${year}` }]}
    >
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Kārttika (Dāmodara Month) is one of the holiest months in the Vaiṣṇava calendar. Lectures delivered during Kārttika {year} are dedicated to glorifying Lord Dāmodara and deepening one's practice of bhakti.
        </p>
      </div>
      {items.length > 0 ? <LectureList items={items} /> : (
        <div style={{ background: "white", border: "1px solid #ddd", padding: 24 }}>
          <p style={{ fontFamily: "Georgia, serif", color: "#666" }}>Content being organized.</p>
        </div>
      )}
    </PageLayout>
  );
}
