import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";
import { Card, CardContent } from "@/components/ui/card";
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
        <Card className="border-[var(--color-border)]">
          <CardContent className="p-6">
            <p className="font-serif text-sm text-muted-foreground">Content for Festivals {year} is being organized.</p>
          </CardContent>
        </Card>
      )}
    </PageLayout>
  );
}
