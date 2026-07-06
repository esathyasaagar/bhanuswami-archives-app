import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "../components/PageLayout";
import { books } from "../data/content";

const bookList = [
  { key: "nod", href: "/nod", color: "#1a5a2a" },
  { key: "hnc", href: "/hnc", color: "#5a1a1a" },
  { key: "brhad", href: "/brhad", color: "#1a3a5a" },
  { key: "vrajariti", href: "/vrajariti", color: "#3a1a5a" },
] as const;

export default function BooksPage() {
  return (
    <PageLayout title="Books & Texts" breadcrumbs={[{ label: "Books & Texts", href: "/books" }]}>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Bhanu Swami Maharaj's lectures on key Vaiṣṇava scriptures and devotional texts, providing deep insight into the philosophy and practice of bhakti-yoga.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bookList.map(({ key, href, color }) => {
          const b = books[key];
          return (
            <Link key={key} href={href} className="group block">
              <Card className="overflow-hidden hover:shadow-md transition-shadow border-[var(--color-border)]">
                <div className="h-20 flex items-center justify-center relative" style={{ background: color }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/30" />
                  <span className="text-white/20 font-serif text-5xl relative z-10">ॐ</span>
                </div>
                <CardContent className="p-4">
                  <p className="font-serif text-sm font-bold text-[var(--color-primary)] group-hover:underline mb-1">{b.title}</p>
                  <p className="text-[10px] text-muted-foreground mb-2">by {b.author}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{b.description.slice(0, 120)}…</p>
                  <Badge variant="secondary" className="text-[10px]">{b.sections.length} parts available</Badge>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </PageLayout>
  );
}
