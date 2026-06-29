import Link from "next/link";
import Sidebar from "../components/Sidebar";

const pageContent: Record<string, { title: string; description: string; items?: string[] }> = {
  "srimad-bhagavatam": {
    title: "Śrīmad-Bhāgavatam",
    description: "The Śrīmad-Bhāgavatam (Bhāgavata Purāṇa) is the ripened fruit of the tree of Vedic literature. Bhanu Swami Maharaj's extensive lecture series covers all twelve cantos.",
    items: Array.from({ length: 12 }, (_, i) => `Canto ${i + 1}`),
  },
  "bhagavad-gita": {
    title: "Bhagavad-gītā As It Is",
    description: "The Bhagavad-gītā As It Is by Śrīla Prabhupāda is the most widely read edition of the Gītā in the world. This lecture series by Bhanu Swami covers all 18 chapters.",
    items: Array.from({ length: 18 }, (_, i) => `Chapter ${i + 1}`),
  },
  "seminars": {
    title: "Seminars Archive",
    description: "A comprehensive collection of seminars by Bhanu Swami Maharaj conducted across the world from 2016 to 2025.",
    items: ["2025 – Japan, Australia, Italy, Macedonia, Bulgaria, Serbia, Mayapur", "2024 – Japan, New Govardhana", "2023 Archives", "2022 Archives", "2021 Archives", "2020 Archives", "2019 Archives", "2018 Archives", "2017 Archives", "2016 Archives"],
  },
  "festivals": {
    title: "Festivals",
    description: "Festival lectures delivered by Bhanu Swami Maharaj at Vaiṣṇava festivals around the world.",
    items: ["Festivals 2026", "Festivals 2025", "Festivals 2017", "Festivals 2013"],
  },
  "books": {
    title: "Books & Texts",
    description: "Lectures on key Vaiṣṇava texts and books, providing deep insights into the philosophy and practice of bhakti-yoga.",
    items: ["Nectar of Devotion", "Harināma Cintāmaṇi", "Bṛhad Bhāgavatāmṛta", "Vraja Rīti Cintāmaṇi"],
  },
  "podcasts": {
    title: "Podcasts",
    description: "Listen to the latest podcast episodes by Bhanu Swami Maharaj covering a wide range of spiritual topics.",
  },
  "special-events": {
    title: "Special Events",
    description: "Recordings from special annual events including Madhura Mahotsava, Shravana Utsav, and Karthik Month lectures.",
    items: ["Madhura Mahotsava", "Shravana Utsav", "Karthik Month Lectures"],
  },
  "blog": {
    title: "Blog",
    description: "Articles, news, and updates from the Bhanu Swami Archives.",
  },
  "contact": {
    title: "Contact Us",
    description: "Get in touch with the volunteer devotees who maintain this archive.",
  },
  "about": {
    title: "About Bhanu Swami",
    description: "His Holiness Bhanu Swami Maharaj is a senior disciple of Śrīla Prabhupāda and a distinguished scholar of Vaiṣṇava philosophy and Sanskrit literature. He has authored numerous books and translations, and travels extensively delivering lectures on Bhāgavata philosophy.",
  },
};

export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug[0];
  const page = pageContent[key] ?? {
    title: slug.map((s) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())).join(" – "),
    description: "Content for this section is being organized and will be available soon.",
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 16px" }}>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Breadcrumb */}
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#888", marginBottom: 16 }}>
            <Link href="/" style={{ color: "#8b1a1a" }}>Home</Link>
            {slug.map((s, i) => (
              <span key={i}>
                {" "}/{" "}
                <Link href={"/" + slug.slice(0, i + 1).join("/")} style={{ color: "#8b1a1a" }}>
                  {s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              </span>
            ))}
          </div>

          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 26, color: "#1a1a1a", marginBottom: 4, borderBottom: "3px solid #8b1a1a", paddingBottom: 10 }}>
            {page.title}
          </h1>

          <div style={{ background: "white", border: "1px solid #ddd", padding: 24, marginTop: 16 }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, marginTop: 0 }}>{page.description}</p>

            {page.items && (
              <div style={{ marginTop: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                  {page.items.map((item, i) => (
                    <div key={i} style={{ border: "1px solid #eee", padding: "12px 14px", background: "#fafafa", borderLeft: "3px solid #8b1a1a" }}>
                      <span style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#333" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {key === "contact" && (
              <div style={{ marginTop: 20 }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#8b1a1a", marginBottom: 16 }}>Get In Touch</h3>
                <form style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 500 }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 4, color: "#555" }}>Your Name</label>
                    <input type="text" style={{ width: "100%", padding: "9px 12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 4, color: "#555" }}>Email Address</label>
                    <input type="email" style={{ width: "100%", padding: "9px 12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 4, color: "#555" }}>Message</label>
                    <textarea rows={5} style={{ width: "100%", padding: "9px 12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, boxSizing: "border-box", resize: "vertical" }} />
                  </div>
                  <button type="submit" style={{ background: "#8b1a1a", color: "white", border: "none", padding: "10px 20px", fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: "bold", borderRadius: 2, cursor: "pointer", alignSelf: "flex-start" }}>
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
