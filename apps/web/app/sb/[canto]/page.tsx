import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sbCantos } from "../../data/content";

export default async function CantoPage({ params }: { params: Promise<{ canto: string }> }) {
  const { canto } = await params;
  const data = sbCantos.find((c) => c.canto === Number(canto));

  if (!data) {
    return (
      <PageLayout title={`Canto ${canto}`} breadcrumbs={[{ label: "Śrīmad-Bhāgavatam", href: "/sb" }, { label: `Canto ${canto}`, href: `/sb/${canto}` }]}>
        <Card className="border-[var(--color-border)]">
          <CardContent className="p-6">
            <p className="font-serif text-sm text-muted-foreground">Content for this canto is being organized and will be available soon.</p>
          </CardContent>
        </Card>
      </PageLayout>
    );
  }

  const items = data.chapters.map((ch) => ({
    title: ch,
    href: `/sb/${canto}/${ch.split(" ")[0].replace(/\./g, "/")}`,
  }));

  return (
    <PageLayout
      title={`Canto ${data.canto} – ${data.title}`}
      breadcrumbs={[{ label: "Śrīmad-Bhāgavatam", href: "/sb" }, { label: `Canto ${data.canto}`, href: `/sb/${canto}` }]}
    >
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-4">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            Lectures on Canto {data.canto} of the Śrīmad-Bhāgavatam — <em>{data.title}</em> — by His Holiness Bhanu Swami Maharaj.
          </p>
        </CardContent>
      </Card>

      <LectureList items={items} />

      <div className="mt-5 flex flex-wrap gap-2">
        {sbCantos.map((c) => (
          <Link key={c.canto} href={`/sb/${c.canto}`}>
            <Badge
              variant={c.canto === data.canto ? "default" : "outline"}
              className={c.canto === data.canto
                ? "bg-[var(--color-maroon)] text-white border-[var(--color-maroon)] cursor-default"
                : "text-[var(--color-primary)] border-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-white cursor-pointer transition-colors"}
            >
              Canto {c.canto}
            </Badge>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
