import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageLayout from "../components/PageLayout";

const events = [
  {
    title: "Madhura Mahotsava",
    href: "/madhura/2025",
    desc: "Annual festival celebrating the sweet pastimes of Lord Kṛṣṇa and rasa-tattva.",
    years: [{ label: "2025", href: "/madhura/2025" }],
    color: "#8b1a1a",
  },
  {
    title: "Śravaṇa Utsav",
    href: "/shravana-utsav/2025",
    desc: "Annual festival dedicated to śravaṇa (hearing) of transcendental topics.",
    years: [{ label: "2025", href: "/shravana-utsav/2025" }, { label: "2024", href: "/shravana-utsav/2024" }],
    color: "#1a6b8a",
  },
  {
    title: "Kārttika Month",
    href: "/km/2024",
    desc: "Dāmodara Month lectures — the most auspicious month of the year for devotional practice.",
    years: [{ label: "2024", href: "/km/2024" }, { label: "2022", href: "/km/2022" }],
    color: "#5a1a8a",
  },
  {
    title: "Mayapur Seminars",
    href: "/seminars/mayapur/2025",
    desc: "Seminars delivered at the ISKCON headquarters in Śrī Māyāpur Dhāma.",
    years: [{ label: "2025", href: "/seminars/mayapur/2025" }],
    color: "#1a5a2a",
  },
];

export default function SpecialEventsPage() {
  return (
    <PageLayout title="Special Events" breadcrumbs={[{ label: "Special Events", href: "/special-events" }]}>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Special annual events and festivals featuring extensive lecture series by Bhanu Swami Maharaj.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {events.map((e) => (
          <Card key={e.href} className="overflow-hidden border-[var(--color-border)]">
            <CardHeader className="py-4 px-5" style={{ background: e.color }}>
              <CardTitle className="text-white font-serif text-lg">{e.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{e.desc}</p>
              <div className="flex flex-wrap gap-2">
                {e.years.map((y) => (
                  <Button key={y.href} asChild size="sm" className="text-white h-7 text-xs" style={{ background: e.color }}>
                    <Link href={y.href}>{y.label} →</Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
