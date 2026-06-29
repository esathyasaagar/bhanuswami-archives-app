import Link from "next/link";
import { sidebarCategories, recentPosts } from "../data/content";

export default function Sidebar() {
  return (
    <aside style={{ width: 260, flexShrink: 0 }}>
      {/* Search */}
      <div className="sidebar-widget">
        <div className="sidebar-widget-title">Search</div>
        <div className="sidebar-widget-body">
          <form style={{ display: "flex", gap: 4 }}>
            <input
              type="text"
              placeholder="Search lectures..."
              style={{
                flex: 1,
                padding: "7px 10px",
                border: "1px solid #ddd",
                fontFamily: "Arial, sans-serif",
                fontSize: 12,
                borderRadius: 2,
              }}
            />
            <button
              type="submit"
              style={{
                background: "#8b1a1a",
                color: "white",
                border: "none",
                padding: "7px 12px",
                fontFamily: "Arial, sans-serif",
                fontSize: 12,
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Categories */}
      <div className="sidebar-widget">
        <div className="sidebar-widget-title">Categories</div>
        <div className="sidebar-widget-body" style={{ padding: 0 }}>
          {sidebarCategories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="sidebar-link" style={{ padding: "8px 12px", display: "flex", justifyContent: "space-between" }}>
              <span>{cat.label}</span>
              <span style={{ color: "#999", fontSize: 11 }}>({cat.count})</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="sidebar-widget">
        <div className="sidebar-widget-title">Recent Posts</div>
        <div className="sidebar-widget-body" style={{ padding: 0 }}>
          {recentPosts.map((post) => (
            <div key={post.href} style={{ padding: "10px 12px", borderBottom: "1px solid #eee" }}>
              <Link href={post.href} style={{ display: "block", fontFamily: "Georgia, serif", fontSize: 13, color: "#8b1a1a", lineHeight: 1.4, marginBottom: 3 }}>
                {post.title}
              </Link>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999" }}>{post.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Bhanu Swami */}
      <div className="sidebar-widget">
        <div className="sidebar-widget-title">About Bhanu Swami</div>
        <div className="sidebar-widget-body">
          <div style={{
            background: "linear-gradient(135deg, #8b1a1a 0%, #c8a84b 100%)",
            height: 80,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}>
            <span style={{ color: "white", fontFamily: "Georgia, serif", fontSize: 22, opacity: 0.8 }}>ॐ</span>
          </div>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#555", lineHeight: 1.6, margin: 0 }}>
            His Holiness Bhanu Swami Maharaj is a senior disciple of Śrīla Prabhupāda and a distinguished scholar of Vaiṣṇava philosophy and Sanskrit literature.
          </p>
          <Link href="/about" style={{ display: "block", marginTop: 10, fontFamily: "Arial, sans-serif", fontSize: 12, color: "#8b1a1a" }}>
            Read more →
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="sidebar-widget">
        <div className="sidebar-widget-title">Quick Links</div>
        <div className="sidebar-widget-body" style={{ padding: 0 }}>
          {[
            { label: "Latest Seminars", href: "/seminars/2025" },
            { label: "Upcoming Festivals 2026", href: "/festivals/2026" },
            { label: "Podcast Episodes", href: "/podcasts" },
            { label: "Madhura Mahotsava", href: "/special-events/madhura-mahotsava" },
            { label: "Shravana Utsav", href: "/special-events/shravana-utsav" },
            { label: "Karthik Month", href: "/special-events/karthik-month" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="sidebar-link" style={{ padding: "8px 12px" }}>
              → {l.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
