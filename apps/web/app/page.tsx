import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { featuredContent, festivals, seminars, sbCantos, recentPosts } from "./data/content";

function FeaturedCard({ item }: { item: typeof featuredContent[0] }) {
  return (
    <Link href={item.href} style={{ display: "block", textDecoration: "none", flex: "1 1 200px", minWidth: 180 }}>
      <div style={{ background: item.color, height: 150, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(0,0,0,0.28) 100%)" }} />
        <div style={{ color: "rgba(255,255,255,0.1)", fontSize: 72, fontFamily: "Georgia,serif", position: "absolute", bottom: -12, right: 8, lineHeight: 1 }}>ॐ</div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Arial,sans-serif", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>{item.category}</div>
          <div style={{ color: "white", fontFamily: "Georgia,serif", fontSize: 16, fontWeight: "bold", lineHeight: 1.3 }}>{item.title}</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Arial,sans-serif", fontSize: 11, marginTop: 3 }}>{item.date}</div>
        </div>
      </div>
      <div style={{ background: "white", padding: "10px 12px", border: "1px solid #ddd", borderTop: "none" }}>
        <p style={{ margin: 0, fontFamily: "Arial,sans-serif", fontSize: 11, color: "#555", lineHeight: 1.5 }}>{item.description}</p>
        <span style={{ display: "inline-block", marginTop: 6, fontFamily: "Arial,sans-serif", fontSize: 11, color: "#8b1a1a", fontWeight: "bold" }}>Read more →</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const festivalYear2026 = festivals["2026"] ?? [];
  const festivalYear2025 = festivals["2025"] ?? [];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 16px" }}>
      {/* Announcement bar */}
      <div className="breaking-bar" style={{ marginBottom: 20, padding: "8px 14px", display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ background: "#8b1a1a", color: "white", padding: "2px 8px", fontWeight: "bold", fontSize: 11, letterSpacing: 0.5, flexShrink: 0 }}>NEW</span>
        <span style={{ color: "#ccc" }}>
          Festivals 2026 lectures now available —{" "}
          <Link href="/festivals/2026" style={{ color: "#c8a84b" }}>listen now</Link>
        </span>
      </div>

      {/* Featured books / latest content */}
      <section style={{ marginBottom: 28 }}>
        <h2 className="section-title" style={{ marginBottom: 12 }}>Latest Books</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {featuredContent.map((item) => <FeaturedCard key={item.id} item={item} />)}
        </div>
      </section>

      {/* Main + Sidebar */}
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Recent posts */}
          <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Posts</h2>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none", marginBottom: 24 }}>
            {recentPosts.map((post, i) => (
              <div key={i} style={{ padding: "12px 16px", borderBottom: "1px solid #eee", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, background: "#8b1a1a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.35)", fontSize: 20, borderRadius: 2 }}>ॐ</div>
                <div>
                  <Link href={post.href} style={{ fontFamily: "Georgia,serif", fontSize: 14, color: "#8b1a1a", display: "block", marginBottom: 2 }}>{post.title}</Link>
                  <span style={{ fontFamily: "Arial,sans-serif", fontSize: 11, color: "#999" }}>{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Festivals 2026 */}
          <h2 className="section-title" style={{ marginBottom: 0 }}>Festivals – 2026</h2>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none", marginBottom: 24 }}>
            {festivalYear2026.map((f, i) => (
              <div key={i} style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
                <Link href={f.href} style={{ fontFamily: "Georgia,serif", fontSize: 14, color: "#8b1a1a", display: "block" }}>{f.title}</Link>
              </div>
            ))}
            <div style={{ padding: "10px 16px" }}>
              <Link href="/festivals/2026" style={{ fontFamily: "Arial,sans-serif", fontSize: 12, color: "#8b1a1a", fontWeight: "bold" }}>View all Festivals 2026 →</Link>
            </div>
          </div>

          {/* Festivals 2025 */}
          <h2 className="section-title" style={{ marginBottom: 0 }}>Festivals – 2025</h2>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none", marginBottom: 24 }}>
            {festivalYear2025.map((f, i) => (
              <div key={i} style={{ padding: "10px 16px", borderBottom: "1px solid #eee" }}>
                <Link href={f.href} style={{ fontFamily: "Georgia,serif", fontSize: 13, color: "#8b1a1a", display: "block", marginBottom: f.description ? 2 : 0 }}>{f.title}</Link>
                {f.description && <p style={{ margin: 0, fontFamily: "Arial,sans-serif", fontSize: 11, color: "#888" }}>{f.description}</p>}
              </div>
            ))}
            <div style={{ padding: "10px 16px" }}>
              <Link href="/festivals/2025" style={{ fontFamily: "Arial,sans-serif", fontSize: 12, color: "#8b1a1a", fontWeight: "bold" }}>View all Festivals 2025 →</Link>
            </div>
          </div>

          {/* Seminars grid */}
          <h2 className="section-title" style={{ marginBottom: 0 }}>Seminars Archive</h2>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none", padding: 14, marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
              {Object.entries(seminars).sort(([a], [b]) => Number(b) - Number(a)).map(([year, locations]) => (
                <Link key={year} href={`/seminars/${year}`} style={{ textDecoration: "none" }}>
                  <div style={{ border: "1px solid #ddd", padding: 12, background: "#fafafa" }}>
                    <div style={{ fontFamily: "Arial,sans-serif", fontSize: 20, fontWeight: "bold", color: "#8b1a1a", marginBottom: 3 }}>{year}</div>
                    <div style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "#888" }}>
                      {Object.keys(locations).map((l) => l.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())).join(" · ")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SB Cantos */}
          <h2 className="section-title" style={{ marginBottom: 0 }}>Śrīmad-Bhāgavatam – Cantos</h2>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none", padding: 14, marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 8 }}>
              {sbCantos.map((c) => (
                <Link key={c.canto} href={`/sb/${c.canto}`} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", border: "1px solid #eee", borderRadius: 2, textDecoration: "none", background: "#fafafa" }}>
                  <span style={{ background: "#8b1a1a", color: "white", width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial,sans-serif", fontSize: 11, fontWeight: "bold", flexShrink: 0 }}>{c.canto}</span>
                  <div>
                    <div style={{ fontFamily: "Arial,sans-serif", fontSize: 12, color: "#333" }}>Canto {c.canto}</div>
                    <div style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "#888" }}>{c.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Books quick links */}
          <h2 className="section-title" style={{ marginBottom: 0 }}>Books & Texts</h2>
          <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none", padding: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
              {[
                { label: "Nectar of Devotion", sub: "5 parts – Japan series", href: "/nod", color: "#1a5a2a" },
                { label: "Harināma Cintāmaṇi", sub: "8 parts – Japan & Australia", href: "/hnc", color: "#5a1a1a" },
                { label: "Bṛhad Bhāgavatāmṛta", sub: "4 parts – Japan series", href: "/brhad", color: "#1a3a5a" },
                { label: "Vraja Rīti Cintāmaṇi", sub: "5 parts – Śravaṇa Utsav 2024", href: "/vrajariti", color: "#3a1a5a" },
              ].map((b) => (
                <Link key={b.href} href={b.href} style={{ textDecoration: "none" }}>
                  <div style={{ borderLeft: `4px solid ${b.color}`, padding: "10px 12px", background: "#fafafa", border: "1px solid #eee" }}>
                    <div style={{ fontFamily: "Georgia,serif", fontSize: 13, color: b.color, fontWeight: "bold", marginBottom: 3 }}>{b.label}</div>
                    <div style={{ fontFamily: "Arial,sans-serif", fontSize: 11, color: "#888" }}>{b.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
