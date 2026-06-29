import Link from "next/link";
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
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: "0 0 12px" }}>
          The Bhagavad-gītā As It Is by Śrīla Prabhupāda is the most widely read edition of the Gītā. Bhanu Swami Maharaj's lectures illuminate the philosophical depth of each verse, drawing on commentaries of the Gauḍīya Vaiṣṇava ācāryas.
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          <Link href="/bg/seminars" style={{ background: "#8b1a1a", color: "white", padding: "8px 16px", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, textDecoration: "none" }}>
            BG Seminars →
          </Link>
          <Link href="/bg/seminars/gj" style={{ background: "white", color: "#8b1a1a", padding: "8px 16px", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, textDecoration: "none", border: "1px solid #8b1a1a" }}>
            Gītā Jayantī →
          </Link>
        </div>
      </div>

      <h2 className="section-title" style={{ marginBottom: 0 }}>Selected Lectures</h2>
      <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none" }}>
        {bgContent.map((item, i) => (
          <div key={i} style={{ padding: "14px 16px", borderBottom: "1px solid #eee", display: "flex", gap: 12 }}>
            <div style={{ width: 32, height: 32, background: "#8b1a1a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, borderRadius: 2, marginTop: 2 }}>
              BG
            </div>
            <Link href={item.href} style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#8b1a1a", lineHeight: 1.4, display: "block", paddingTop: 6 }}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>

      <div style={{ background: "#fffbf0", border: "1px solid #c8a84b", padding: 16, marginTop: 20 }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#666", margin: 0 }}>
          <strong>Śravaṇa Utsav 2025</strong> featured an in-depth study of the Bhagavad-gītā using the <em>Sārārtha Varṣiṇī Ṭīkā</em> commentary by Śrīla Viśvanātha Cakravartī Ṭhākura.{" "}
          <Link href="/shravana-utsav/2025" style={{ color: "#8b1a1a" }}>View lectures →</Link>
        </p>
      </div>
    </PageLayout>
  );
}
