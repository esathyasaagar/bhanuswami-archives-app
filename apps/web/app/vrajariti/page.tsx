import PageLayout from "../components/PageLayout";
import LectureList from "../components/LectureList";
import { books } from "../data/content";

export default function VrajaRitiPage() {
  const { vrajariti } = books;
  return (
    <PageLayout title={vrajariti.title} breadcrumbs={[{ label: "Books & Texts", href: "/books" }, { label: "Vraja Rīti Cintāmaṇi", href: "/vrajariti" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div style={{ width: 80, height: 110, background: "linear-gradient(135deg, #3a1a5a, #6a2a8a)", borderRadius: 3, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 32 }}>📖</span>
          </div>
          <div>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>By {vrajariti.author}</div>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#444", lineHeight: 1.8, margin: 0 }}>{vrajariti.description}</p>
            <div style={{ marginTop: 10, padding: "8px 12px", background: "#fffbf0", border: "1px solid #c8a84b", borderRadius: 2 }}>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666" }}>Delivered during <strong>Śravaṇa Utsav 2024</strong></span>
            </div>
          </div>
        </div>
      </div>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Five-Part Series</h2>
      <LectureList items={vrajariti.sections} />
    </PageLayout>
  );
}
