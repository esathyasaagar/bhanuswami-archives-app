import PageLayout from "../../../components/PageLayout";
import LectureList from "../../../components/LectureList";
import { seminars } from "../../../data/content";

export default async function SeminarLocationPage({ params }: { params: Promise<{ year: string; location: string }> }) {
  const { year, location } = await params;
  const locationName = location.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const lectures = seminars[year]?.[location] ?? [];

  return (
    <PageLayout
      title={`${locationName} – ${year}`}
      breadcrumbs={[
        { label: "Seminars", href: "/seminars" },
        { label: year, href: `/seminars/${year}` },
        { label: locationName, href: `/seminars/${year}/${location}` },
      ]}
    >
      {lectures.length > 0 ? (
        <LectureList items={lectures} />
      ) : (
        <div style={{ background: "white", border: "1px solid #ddd", padding: 24 }}>
          <p style={{ fontFamily: "Georgia, serif", color: "#666" }}>Content for this location is being organized and will be available soon.</p>
        </div>
      )}
    </PageLayout>
  );
}
