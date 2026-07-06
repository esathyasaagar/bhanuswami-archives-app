import Link from "next/link";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sbCantos } from "../data/content";

export default function SBPage() {
  return (
    <PageLayout title="Śrīmad-Bhāgavatam" breadcrumbs={[{ label: "Śrīmad-Bhāgavatam", href: "/sb" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2024/10/sb-bs.jpg" alt="Śrīmad-Bhāgavatam" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-6 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            The Śrīmad-Bhāgavatam (Bhāgavata Purāṇa) is the ripened fruit of the tree of Vedic literature, composed by Śrīla Vyāsadeva. His Holiness Bhanu Swami Maharaja's extensive lecture series covers the available cantos with deep philosophical insight and practical application for devotees.
          </p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sbCantos.map((c) => (
          <Link key={c.canto} href={`/sb/${c.canto}`} className="group block">
            <Card className="border-l-4 border-l-[var(--color-maroon)] border-[var(--color-border)] hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-maroon)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {c.canto}
                </div>
                <div className="min-w-0">
                  <p className="font-serif text-sm font-bold text-[var(--color-primary)] group-hover:underline">Canto {c.canto}</p>
                  <p className="text-xs text-muted-foreground truncate">{c.title}</p>
                  <Badge variant="secondary" className="mt-1 text-[10px]">{c.chapters.length} lectures</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
