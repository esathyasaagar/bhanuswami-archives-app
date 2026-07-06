import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageLayout from "../components/PageLayout";
import { seminars } from "../data/content";

const years = Object.keys(seminars).sort((a, b) => Number(b) - Number(a));

export default function SeminarsPage() {
  return (
    <PageLayout title="Seminars Archive" breadcrumbs={[{ label: "Seminars", href: "/seminars" }]}>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            His Holiness Bhanu Swami Maharaj travels extensively across the world delivering seminars on Vaiṣṇava philosophy, devotional practice, and the teachings of the Gauḍīya ācāryas. This archive organizes those seminars by year and location.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {years.map((year) => {
          const locations = Object.keys(seminars[year]);
          return (
            <Link key={year} href={`/seminars/${year}`} className="group block">
              <Card className="border-t-4 border-t-[var(--color-maroon)] border-[var(--color-border)] hover:shadow-md transition-shadow h-full">
                <CardContent className="p-3">
                  <p className="font-serif text-3xl font-bold text-[var(--color-primary)] mb-2">{year}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {locations.map((l) => l.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())).join(" · ")}
                  </p>
                  <p className="text-xs text-[var(--color-primary)] font-semibold group-hover:underline">View seminars →</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="border-[var(--color-border)]">
        <CardContent className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Also See</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Seminars – Mayapur 2025", href: "/seminars/mayapur/2025" },
              { label: "The Mystery of Sound", href: "/seminars/2025/japan/mysteries-of-sound" },
              { label: "Love of God – Virtual Reality Relationships", href: "/seminar/relationship" },
            ].map((l) => (
              <Button key={l.href} asChild size="sm" className="bg-[var(--color-maroon)] hover:bg-[var(--color-maroon-dark)] text-white">
                <Link href={l.href}>{l.label}</Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
