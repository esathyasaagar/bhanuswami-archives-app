import PageLayout from "../components/PageLayout";
import LectureList from "../components/LectureList";
import { books } from "../data/content";

export default function BrhadPage() {
  const { brhad } = books;
  return (
    <PageLayout title={brhad.title} breadcrumbs={[{ label: "Books & Texts", href: "/books" }, { label: "Bṛhad Bhāgavatāmṛta", href: "/brhad" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div style={{ width: 80, height: 110, background: "linear-gradient(135deg, #1a3a5a, #2a5a8a)", borderRadius: 3, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 32 }}>📖</span>
          </div>
          <div>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>By {brhad.author}</div>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#444", lineHeight: 1.8, margin: 0 }}>{brhad.description}</p>
          </div>
        </div>
      </div>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Japan Series (4 Parts)</h2>
      <LectureList items={brhad.sections} />
    </PageLayout>
  );
}
