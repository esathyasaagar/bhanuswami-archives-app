import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { seminars } from "../../data/content";

export default async function SeminarYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const data = seminars[year];
  const title = `Seminars – ${year}`;

  if (!data) {
    return (
      <PageLayout title={title} breadcrumbs={[{ label: "Seminars", href: "/seminars" }, { label: year, href: `/seminars/${year}` }]}>
        <Card className="border-[var(--color-border)]">
          <CardContent className="p-6">
            <p className="font-serif text-sm text-muted-foreground">Content for {year} is being organized.</p>
          </CardContent>
        </Card>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={title} breadcrumbs={[{ label: "Seminars", href: "/seminars" }, { label: year, href: `/seminars/${year}` }]}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.entries(data).map(([location, lectures]) => (
          <Link key={location} href={`/seminars/${year}/${location}`} className="group block">
            <Card className="border-l-4 border-l-[var(--color-maroon)] border-[var(--color-border)] hover:shadow-md transition-shadow h-full">
              <CardContent className="p-4">
                <p className="font-serif text-sm font-bold text-[var(--color-primary)] group-hover:underline capitalize mb-1">
                  {location.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </p>
                <Badge variant="secondary" className="text-[10px]">{lectures.length} seminar{lectures.length !== 1 ? "s" : ""}</Badge>
                <p className="text-xs text-[var(--color-primary)] font-semibold mt-2">View →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
