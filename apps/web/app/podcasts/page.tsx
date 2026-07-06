import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PageLayout from "../components/PageLayout";
import { podcasts } from "../data/content";

export default function PodcastsPage() {
  return (
    <PageLayout title="Podcasts" breadcrumbs={[{ label: "Podcasts", href: "/podcasts" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2025/11/Untitled-design.jpg" alt="Podcasts" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Podcast episodes by His Holiness Bhanu Swami Maharaj — updated November 2025 through January 2026. Topics cover Vaiṣṇava philosophy, the science of devotion, and practical spiritual guidance.
          </p>
        </CardContent>
      </Card>

      {Object.entries(podcasts).sort(([a], [b]) => Number(b) - Number(a)).map(([year, episodes]) => (
        <div key={year} className="mb-6">
          <h2 className="font-serif text-base font-bold text-[var(--color-primary)] uppercase tracking-wide mb-3">Podcasts – {year}</h2>
          <Card className="border-[var(--color-border)]">
            {(episodes as any[]).map((ep: any, i: number) => (
              <div key={i}>
                <div className="flex items-start gap-3 px-3 py-1.5">
                  <div className="w-10 h-10 rounded bg-[#1a6b8a] shrink-0 flex items-center justify-center text-xl">🎙</div>
                  <div>
                    <Link href={ep.href} className="font-serif text-sm text-[var(--color-primary)] hover:text-[var(--color-maroon-dark)] leading-snug block mb-1">{ep.title}</Link>
                    <span className="text-[10px] text-muted-foreground">{ep.date}</span>
                  </div>
                </div>
                {i < (episodes as any[]).length - 1 && <Separator />}
              </div>
            ))}
          </Card>
        </div>
      ))}

      <Card className="border-[var(--color-border)] bg-muted/30">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            More podcast episodes available at{" "}
            <Link href="/podcasts-2025" className="text-[var(--color-primary)] font-semibold hover:underline">Podcasts 2025</Link>{" "}
            and{" "}
            <Link href="/podcast-2020" className="text-[var(--color-primary)] font-semibold hover:underline">Podcasts 2020</Link>.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
