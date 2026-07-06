import PageLayout from "../../../components/PageLayout";
import LectureList from "../../../components/LectureList";
import { Card, CardContent } from "@/components/ui/card";
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
        <Card className="border-[var(--color-border)]">
          <CardContent className="p-6">
            <p className="font-serif text-sm text-muted-foreground">Content for this location is being organized and will be available soon.</p>
          </CardContent>
        </Card>
      )}
    </PageLayout>
  );
}
