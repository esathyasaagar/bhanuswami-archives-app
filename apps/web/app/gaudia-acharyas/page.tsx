import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PageLayout from "../components/PageLayout";
import { gaudiyaAcharyas } from "../data/content";

const acharyas = [
  { name: "Śrīla Rūpa Gosvāmī", desc: "Author of Bhakti-rasāmṛta-sindhu, Ujjvala-nīlamaṇi, and many other foundational Gauḍīya texts." },
  { name: "Śrīla Sanātana Gosvāmī", desc: "Elder brother of Rūpa Gosvāmī; author of Bṛhad Bhāgavatāmṛta and Hari-bhakti-vilāsa." },
  { name: "Śrīla Raghunātha Dāsa Gosvāmī", desc: "Renowned for his intense renunciation and deep absorption in the pastimes of Rādhā-Kṛṣṇa at Rādhā-kuṇḍa." },
  { name: "Śrīla Jīva Gosvāmī", desc: "The foremost philosopher among the Six Gosvāmīs; author of the Ṣaṭ Sandarbhas." },
  { name: "Śrīla Gopāla Bhaṭṭa Gosvāmī", desc: "Established the worship of Rādhā-Ramaṇa and compiled Hari-bhakti-vilāsa." },
  { name: "Śrīla Raghunātha Bhaṭṭa Gosvāmī", desc: "Known for his constant chanting of the Holy Name and recitation of Śrīmad-Bhāgavatam." },
];

export default function GaudiyaAcharyasPage() {
  return (
    <PageLayout title="Gauḍīya Vaiṣṇava Ācāryas" breadcrumbs={[{ label: "Gauḍīya Ācāryas", href: "/gaudia-acharyas" }]}>
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image src="/wp-content/uploads/2024/12/7-1.jpg" alt="Gauḍīya Ācāryas" fill className="object-cover" unoptimized sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <Card className="mb-3 border-[var(--color-border)]">
        <CardContent className="p-3">
          <p className="font-serif text-sm text-muted-foreground leading-relaxed">
            The Gauḍīya Vaiṣṇava ācāryas are the great spiritual masters of the lineage descending from Lord Caitanya Mahāprabhu. Bhanu Swami Maharaj's lectures illuminate the lives, teachings, and contributions of these exalted personalities.
          </p>
        </CardContent>
      </Card>

      <h2 className="font-serif text-base font-bold text-[var(--color-primary)] uppercase tracking-wide mb-3">Six Gosvāmīs of Vṛndāvana</h2>
      <Card className="mb-6 border-[var(--color-border)]">
        {acharyas.map((a, i) => (
          <div key={i}>
            <div className="flex items-start gap-3 px-4 py-4">
              <div className="w-11 h-11 rounded-full bg-[var(--color-gold)] shrink-0 flex items-center justify-center text-white font-serif text-lg">ॐ</div>
              <div>
                <p className="font-serif text-sm font-bold text-[var(--color-primary)] mb-1">{a.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </div>
            {i < acharyas.length - 1 && <Separator />}
          </div>
        ))}
      </Card>

      <h2 className="font-serif text-base font-bold text-[var(--color-primary)] uppercase tracking-wide mb-3">Lectures</h2>
      <Card className="border-[var(--color-border)]">
        {gaudiyaAcharyas.map((item: any, i: number) => (
          <div key={i}>
            <div className="px-3 py-1.5">
              <Link href={item.href} className="font-serif text-sm text-[var(--color-primary)] hover:text-[var(--color-maroon-dark)] leading-snug block mb-1">{item.title}</Link>
              {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
            </div>
            {i < gaudiyaAcharyas.length - 1 && <Separator />}
          </div>
        ))}
      </Card>
    </PageLayout>
  );
}
