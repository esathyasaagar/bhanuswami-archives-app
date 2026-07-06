import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "../components/PageLayout";
import LectureList from "../components/LectureList";
import { books } from "../data/content";

export default function VrajaRitiPage() {
  const { vrajariti } = books;
  return (
    <PageLayout title={vrajariti.title} breadcrumbs={[{ label: "Books & Texts", href: "/books" }, { label: "Vraja Rīti Cintāmaṇi", href: "/vrajariti" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2025/01/vc-bs.jpg" alt="Vraja Rīti Cintāmaṇi" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-20 rounded shrink-0 flex items-center justify-center text-white/30 font-serif text-3xl" style={{ background: "linear-gradient(135deg, #3a1a5a, #6a2a8a)" }}>📖</div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">By {vrajariti.author}</p>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-3">{vrajariti.description}</p>
              <div className="px-3 py-2 bg-[oklch(0.98_0.01_80)] border border-[var(--color-border)] rounded text-xs text-muted-foreground">
                Delivered during <strong className="text-foreground">Śravaṇa Utsav 2024</strong>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className="font-serif text-base font-bold text-[var(--color-primary)] uppercase tracking-wide mb-3">Five-Part Series</h2>
      <LectureList items={vrajariti.sections} />
    </PageLayout>
  );
}
