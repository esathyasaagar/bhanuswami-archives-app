import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2025/02/Shravana-Utsav.jpg" alt="Śravaṇa Utsav" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Śravaṇa Utsav is an annual festival dedicated to the hearing of transcendental topics — one of the most important of the nine processes of devotional service. Lectures delivered during Śravaṇa Utsav {year} are compiled here.
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
