import PageLayout from "../components/PageLayout";

const posts = [
  { title: "Celebrating Śrīla Prabhupāda's Life & Legacy", date: "November 2025", href: "/podcasts/2025/sp-life-legacy", category: "Podcasts" },
  { title: "Bhakti-latā – Mādhurya Kādambinī Series (Japan 2025)", date: "2025", href: "/seminars/2025/japan/bhakti-lata-1", category: "Seminars" },
  { title: "World Holy Name Week – Multiple Sessions", date: "October 2025", href: "/festivals/2025/holynameweek", category: "Festivals" },
  { title: "Govardhan Pūjā – Illuminating Intricacies & Insights", date: "October 2025", href: "/festivals/2025/govardhan-puja", category: "Festivals" },
  { title: "Kīrtan Melā – Essential Ingredients of Śuddha Nāma Kīrtan", date: "June 2026", href: "/festivals/2026/addressing-mm-kirtaniyas", category: "Festivals 2026" },
  { title: "Transforming Dysfunctional Relationships (New Govardhana 2024)", date: "2024", href: "/seminars/2024/new-govardhana/transforming-dysfunctional-relationships", category: "Seminars" },
  { title: "Why Science and Scripture See Reality Differently", date: "2020", href: "/podcasts/2020/reality-view-in-science-spirituality", category: "Podcasts" },
];

const categoryColors: Record<string, string> = {
  Podcasts: "#1a6b8a",
  Seminars: "#8b1a1a",
  Festivals: "#5a1a8a",
  "Festivals 2026": "#5a1a8a",
};

export default function BlogPage() {
  return (
    <PageLayout title="Blog" breadcrumbs={[{ label: "Blog", href: "/blog" }]}>
      <div style={{ background: "white", border: "1px solid #ddd" }}>
        {posts.map((post, i) => (
          <div key={i} style={{ padding: "18px 16px", borderBottom: "1px solid #eee", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0, width: 56, height: 56, background: categoryColors[post.category] ?? "#8b1a1a", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontFamily: "Georgia", fontSize: 28, borderRadius: 2 }}>ॐ</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                <span style={{ background: categoryColors[post.category] ?? "#8b1a1a", color: "white", padding: "2px 8px", fontFamily: "Arial, sans-serif", fontSize: 10, fontWeight: "bold", borderRadius: 2 }}>{post.category}</span>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999" }}>{post.date}</span>
              </div>
              <a href={post.href} style={{ fontFamily: "Georgia, serif", fontSize: 16, color: "#8b1a1a", lineHeight: 1.4, display: "block" }}>{post.title}</a>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
