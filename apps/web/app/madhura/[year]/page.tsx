import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";
import { madhuraContent } from "../../data/content";

export default async function MadhuraPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const items = madhuraContent[year as keyof typeof madhuraContent] ?? [];

  return (
    <PageLayout
      title={`Madhura Mahotsava – ${year}`}
      breadcrumbs={[{ label: "Special Events", href: "/special-events" }, { label: `Madhura Mahotsava ${year}`, href: `/madhura/${year}` }]}
    >
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Madhura Mahotsava is an annual festival celebrating the sweet pastimes of Lord Kṛṣṇa and the rasa-tattva of Gauḍīya Vaiṣṇavism. Lectures from the {year} event are compiled here.
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
