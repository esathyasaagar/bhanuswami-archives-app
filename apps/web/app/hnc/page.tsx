import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "../components/PageLayout";
import LectureList from "../components/LectureList";
import { books } from "../data/content";

export default function HncPage() {
  const { hnc } = books;
  const japanSeries = hnc.sections.filter((s) => s.title.startsWith("Japan"));
  const ngSeries = hnc.sections.filter((s) => s.title.startsWith("New Govardhana"));

  return (
    <PageLayout title={hnc.title} breadcrumbs={[{ label: "Books & Texts", href: "/books" }, { label: "Harināma Cintāmaṇi", href: "/hnc" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2024/12/hc-bs.jpg" alt="Harināma Cintāmaṇi" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-20 rounded shrink-0 flex items-center justify-center text-white/30 font-serif text-3xl" style={{ background: "linear-gradient(135deg, #5a1a1a, #8b3a3a)" }}>📖</div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">By {hnc.author}</p>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">{hnc.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className="font-serif text-base font-bold text-[var(--color-primary)] uppercase tracking-wide mb-3">Japan Series (6 Parts)</h2>
      <LectureList items={japanSeries} />
      <h2 className="font-serif text-base font-bold text-[var(--color-primary)] uppercase tracking-wide mt-6 mb-3">New Govardhana, Australia (2 Parts)</h2>
      <LectureList items={ngSeries} />
    </PageLayout>
  );
}
