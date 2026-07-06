import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2024/12/yasoda-bs.jpg" alt="Kārttika Month" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Kārttika (Dāmodara Month) is one of the holiest months in the Vaiṣṇava calendar. Lectures delivered during Kārttika {year} are dedicated to glorifying Lord Dāmodara and deepening one's practice of bhakti.
          </p>
        </CardContent>
      </Card>
      {items.length > 0 ? <LectureList items={items} /> : (
        <Card className="border-[var(--color-border)]">
          <CardContent className="p-6">
            <p className="font-serif text-sm text-muted-foreground">Content being organized.</p>
          </CardContent>
        </Card>
      )}
    </PageLayout>
  );
}
