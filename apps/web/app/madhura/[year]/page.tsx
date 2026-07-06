import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2025/01/Untitled-design.jpg" alt="Madhura Mahotsava" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Madhura Mahotsava is an annual festival celebrating the sweet pastimes of Lord Kṛṣṇa and the rasa-tattva of Gauḍīya Vaiṣṇavism. Lectures from the {year} event are compiled here.
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
