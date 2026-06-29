import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";
import { festivals } from "../../data/content";

export default async function FestivalYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const items = festivals[year] ?? [];

  return (
    <PageLayout
      title={`Festivals – ${year}`}
      breadcrumbs={[{ label: "Festivals", href: "/festivals" }, { label: year, href: `/festivals/${year}` }]}
    >
      {items.length > 0 ? (
        <LectureList items={items} />
      ) : (
        <div style={{ background: "white", border: "1px solid #ddd", padding: 24 }}>
          <p style={{ fontFamily: "Georgia, serif", color: "#666" }}>Content for Festivals {year} is being organized.</p>
        </div>
      )}
    </PageLayout>
  );
}
