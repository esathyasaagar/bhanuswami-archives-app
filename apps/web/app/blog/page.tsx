import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PageLayout from "../components/PageLayout";

const posts = [
  { title: "Celebrating Śrīla Prabhupāda's Life & Legacy", date: "November 2025", href: "/podcasts/2025/sp-life-legacy", category: "Podcasts", color: "#1a6b8a" },
  { title: "Bhakti-latā – Mādhurya Kādambinī Series (Japan 2025)", date: "2025", href: "/seminars/2025/japan/bhakti-lata-1", category: "Seminars", color: "#8b1a1a" },
  { title: "World Holy Name Week – Multiple Sessions", date: "October 2025", href: "/festivals/2025/holynameweek", category: "Festivals", color: "#5a1a8a" },
  { title: "Govardhan Pūjā – Illuminating Intricacies & Insights", date: "October 2025", href: "/festivals/2025/govardhan-puja", category: "Festivals", color: "#5a1a8a" },
  { title: "Kīrtan Melā – Essential Ingredients of Śuddha Nāma Kīrtan", date: "June 2026", href: "/festivals/2026/addressing-mm-kirtaniyas", category: "Festivals 2026", color: "#5a1a8a" },
  { title: "Transforming Dysfunctional Relationships (New Govardhana 2024)", date: "2024", href: "/seminars/2024/new-govardhana/transforming-dysfunctional-relationships", category: "Seminars", color: "#8b1a1a" },
  { title: "Why Science and Scripture See Reality Differently", date: "2020", href: "/podcasts/2020/reality-view-in-science-spirituality", category: "Podcasts", color: "#1a6b8a" },
];

export default function BlogPage() {
  return (
    <PageLayout title="Blog" breadcrumbs={[{ label: "Blog", href: "/blog" }]}>
      <Card className="border-[var(--color-border)]">
        {posts.map((post, i) => (
          <div key={i}>
            <div className="flex items-start gap-3 px-4 py-4">
              <div className="w-12 h-12 rounded shrink-0 flex items-center justify-center text-white/30 font-serif text-2xl" style={{ background: post.color }}>ॐ</div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <Badge className="text-[10px] text-white" style={{ background: post.color }}>{post.category}</Badge>
                  <span className="text-[10px] text-muted-foreground">{post.date}</span>
                </div>
                <Link href={post.href} className="font-serif text-sm text-[var(--color-primary)] hover:text-[var(--color-maroon-dark)] leading-snug block">
                  {post.title}
                </Link>
              </div>
            </div>
            {i < posts.length - 1 && <Separator />}
          </div>
        ))}
      </Card>
    </PageLayout>
  );
}
