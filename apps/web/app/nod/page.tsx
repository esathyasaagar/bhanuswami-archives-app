import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "../components/PageLayout";
import LectureList from "../components/LectureList";
import { books } from "../data/content";

export default function NodPage() {
  const { nod } = books;
  return (
    <PageLayout title={nod.title} breadcrumbs={[{ label: "Books & Texts", href: "/books" }, { label: "Nectar of Devotion", href: "/nod" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2024/12/Untitled-design-2.jpg" alt="Nectar of Devotion" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-20 rounded shrink-0 flex items-center justify-center text-white/30 font-serif text-3xl" style={{ background: "linear-gradient(135deg, #1a5a2a, #2a8a3a)" }}>📖</div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">By {nod.author}</p>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">{nod.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className="font-serif text-base font-bold text-[var(--color-primary)] uppercase tracking-wide mb-3">Japan Series</h2>
      <LectureList items={nod.sections} />
    </PageLayout>
  );
}
