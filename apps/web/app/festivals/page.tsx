import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "../components/PageLayout";
import { festivals } from "../data/content";

export default function FestivalsPage() {
  const years = Object.keys(festivals).sort((a, b) => Number(b) - Number(a));
  return (
    <PageLayout title="Festivals" breadcrumbs={[{ label: "Festivals", href: "/festivals" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2025/03/9.jpg" alt="Festivals" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Lectures and talks delivered by Bhanu Swami Maharaj at Vaiṣṇava festivals and observances — including Janmāṣṭamī, Rādhāṣṭamī, Gaura Pūrṇimā, Ratha Yātrā, and other auspicious days in the Gauḍīya Vaiṣṇava calendar.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {years.map((year) => (
          <Link key={year} href={`/festivals/${year}`} className="group block">
            <Card className="border-t-4 border-t-[var(--color-maroon)] border-[var(--color-border)] hover:shadow-md transition-shadow text-center">
              <CardContent className="p-3">
                <p className="font-serif text-4xl font-bold text-[var(--color-primary)] mb-1">{year}</p>
                <Badge variant="secondary" className="text-[10px] mb-2">{festivals[year].length} lectures</Badge>
                <p className="text-xs text-[var(--color-primary)] font-semibold group-hover:underline">View →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
        <Link href="/festivals-2017" className="group block">
          <Card className="border-t-4 border-t-[var(--color-maroon)] border-[var(--color-border)] hover:shadow-md transition-shadow text-center">
            <CardContent className="p-3">
              <p className="font-serif text-4xl font-bold text-[var(--color-primary)] mb-1">2017</p>
              <Badge variant="secondary" className="text-[10px] mb-2">Festival archive</Badge>
              <p className="text-xs text-[var(--color-primary)] font-semibold group-hover:underline">View →</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </PageLayout>
  );
}
