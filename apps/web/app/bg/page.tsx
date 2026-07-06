import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageLayout from "../components/PageLayout";

const bgContent = [
  { title: "BG 4.34 – Approach a Spiritual Master", href: "/bg/4/34" },
  { title: "BG 12.8–12.12 – Various Processes of Devotional Service", href: "/bg/12/8-12" },
  { title: "BG 18.50–18.57 – Reaching Brahman by Actions", href: "/bg/18/50-57" },
  { title: "BG 18.66 – Surrender unto the Lord", href: "/bg/18/66" },
];

export default function BGPage() {
  return (
    <PageLayout title="Bhagavad-gītā As It Is" breadcrumbs={[{ label: "Bhagavad-gītā", href: "/bg" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2024/12/IMG-20241213-WA0022.jpg" alt="Bhagavad-gītā" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-4">
            The Bhagavad-gītā As It Is by Śrīla Prabhupāda is the most widely read edition of the Gītā. Bhanu Swami Maharaj's lectures illuminate the philosophical depth of each verse, drawing on commentaries of the Gauḍīya Vaiṣṇava ācāryas.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm" className="bg-[var(--color-maroon)] hover:bg-[var(--color-maroon-dark)] text-white">
              <Link href="/bg/seminars">BG Seminars →</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="border-[var(--color-maroon)] text-[var(--color-primary)]">
              <Link href="/bg/seminars/gj">Gītā Jayantī →</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="font-serif text-base font-bold text-foreground mb-3 uppercase tracking-wide text-[var(--color-primary)]">Selected Lectures</h2>
      <Card className="border-[var(--color-border)] mb-5">
        {bgContent.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 px-3 py-1.5">
              <div className="w-9 h-9 rounded bg-[var(--color-maroon)] shrink-0 flex items-center justify-center text-white text-[10px] font-bold">BG</div>
              <Link href={item.href} className="font-serif text-sm text-[var(--color-primary)] hover:text-[var(--color-maroon-dark)] leading-snug">
                {item.title}
              </Link>
            </div>
            {i < bgContent.length - 1 && <Separator />}
          </div>
        ))}
      </Card>

      <Card className="border-[var(--color-gold)] bg-[oklch(0.98_0.01_80)] border-[var(--color-border)]">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Śravaṇa Utsav 2025</strong> featured an in-depth study of the Bhagavad-gītā using the <em>Sārārtha Varṣiṇī Ṭīkā</em> commentary by Śrīla Viśvanātha Cakravartī Ṭhākura.{" "}
            <Link href="/shravana-utsav/2025" className="text-[var(--color-primary)] font-semibold hover:underline">View lectures →</Link>
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
