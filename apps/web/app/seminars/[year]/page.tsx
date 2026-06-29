import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import { seminars } from "../../data/content";

export default async function SeminarYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const data = seminars[year];

  const title = `Seminars – ${year}`;

  if (!data) {
    return (
      <PageLayout title={title} breadcrumbs={[{ label: "Seminars", href: "/seminars" }, { label: year, href: `/seminars/${year}` }]}>
        <div style={{ background: "white", border: "1px solid #ddd", padding: 24 }}>
          <p style={{ fontFamily: "Georgia, serif", color: "#666" }}>Content for {year} is being organized.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={title} breadcrumbs={[{ label: "Seminars", href: "/seminars" }, { label: year, href: `/seminars/${year}` }]}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
        {Object.entries(data).map(([location, lectures]) => (
          <Link key={location} href={`/seminars/${year}/${location}`} style={{ textDecoration: "none" }}>
            <div style={{ background: "white", border: "1px solid #ddd", borderLeft: "4px solid #8b1a1a", padding: 16 }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: "bold", color: "#8b1a1a", marginBottom: 4, textTransform: "capitalize" }}>
                {location.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#888" }}>{lectures.length} seminar{lectures.length !== 1 ? "s" : ""}</div>
              <div style={{ marginTop: 8, fontFamily: "Arial, sans-serif", fontSize: 11, color: "#8b1a1a" }}>View →</div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
