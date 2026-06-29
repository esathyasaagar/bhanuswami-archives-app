import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";
import { shravanaUtsav } from "../../data/content";

export default async function ShravanaUtsavPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const items = shravanaUtsav[year as keyof typeof shravanaUtsav] ?? [];

  return (
    <PageLayout
      title={`Śravaṇa Utsav – ${year}`}
      breadcrumbs={[{ label: "Special Events", href: "/special-events" }, { label: `Śravaṇa Utsav ${year}`, href: `/shravana-utsav/${year}` }]}
    >
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Śravaṇa Utsav is an annual festival dedicated to the hearing of transcendental topics — one of the most important of the nine processes of devotional service. Lectures delivered during Śravaṇa Utsav {year} are compiled here.
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
