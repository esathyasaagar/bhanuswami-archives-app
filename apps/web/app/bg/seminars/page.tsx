import Link from "next/link";
import PageLayout from "../../components/PageLayout";

const bgSeminars = [
  { title: "Gītā Jayantī", href: "/bg/seminars/gj", description: "Annual celebration of the day the Bhagavad-gītā was spoken by Lord Kṛṣṇa on the battlefield of Kurukṣetra." },
  { title: "Śravaṇa Utsav 2025 – Sārārtha Varṣiṇī Ṭīkā Study", href: "/shravana-utsav/2025/bg", description: "In-depth study of BG Chapters 12 and 18 using Viśvanātha Cakravartī Ṭhākura's famous commentary." },
  { title: "BG 4.34 – Approaching a Spiritual Master", href: "/bg/4/34" },
  { title: "BG 12.8–12.12 – Comparative Analysis of Spiritual Processes", href: "/bg/12/8-12" },
  { title: "BG 18.50–18.57 – Reaching Brahman by One's Actions", href: "/bg/18/50-57" },
  { title: "BG 18.66 – Abandon All Varieties of Religion and Just Surrender", href: "/bg/18/66" },
];

export default function BGSeminarsPage() {
  return (
    <PageLayout
      title="Bhagavad-gītā – Seminars"
      breadcrumbs={[{ label: "Bhagavad-gītā", href: "/bg" }, { label: "Seminars", href: "/bg/seminars" }]}
    >
      <div style={{ background: "white", border: "1px solid #ddd" }}>
        {bgSeminars.map((item, i) => (
          <div key={i} style={{ padding: "14px 16px", borderBottom: "1px solid #eee", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 32, height: 32, background: "#8b1a1a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 10, fontFamily: "Arial", borderRadius: 2, marginTop: 2 }}>BG</div>
            <div>
              <Link href={item.href} style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#8b1a1a", lineHeight: 1.4, display: "block", marginBottom: 4 }}>{item.title}</Link>
              {item.description && <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
