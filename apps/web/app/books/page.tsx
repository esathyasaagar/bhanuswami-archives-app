import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { books } from "../data/content";

const bookList = [
  { key: "nod", href: "/nod", color: "#1a5a2a" },
  { key: "hnc", href: "/hnc", color: "#5a1a1a" },
  { key: "brhad", href: "/brhad", color: "#1a3a5a" },
  { key: "vrajariti", href: "/vrajariti", color: "#3a1a5a" },
] as const;

export default function BooksPage() {
  return (
    <PageLayout title="Books & Texts" breadcrumbs={[{ label: "Books & Texts", href: "/books" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Bhanu Swami Maharaj's lectures on key Vaiṣṇava scriptures and devotional texts, providing deep insight into the philosophy and practice of bhakti-yoga.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {bookList.map(({ key, href, color }) => {
          const b = books[key];
          return (
            <Link key={key} href={href} style={{ textDecoration: "none" }}>
              <div style={{ background: "white", border: "1px solid #ddd", overflow: "hidden" }}>
                <div style={{ background: color, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 48, fontFamily: "Georgia, serif" }}>ॐ</span>
                </div>
                <div style={{ padding: 16 }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: "bold", color: "#8b1a1a", marginBottom: 4 }}>{b.title}</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#888", marginBottom: 8 }}>by {b.author}</div>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.5, margin: "0 0 10px" }}>{b.description.slice(0, 120)}…</p>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#8b1a1a", fontWeight: "bold" }}>{b.sections.length} parts available →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </PageLayout>
  );
}
