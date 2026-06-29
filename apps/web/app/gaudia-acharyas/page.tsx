import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { gaudiyaAcharyas } from "../data/content";

const acharyas = [
  { name: "Śrīla Rūpa Gosvāmī", desc: "Author of Bhakti-rasāmṛta-sindhu, Ujjvala-nīlamaṇi, and many other foundational Gauḍīya texts." },
  { name: "Śrīla Sanātana Gosvāmī", desc: "Elder brother of Rūpa Gosvāmī; author of Bṛhad Bhāgavatāmṛta and Hari-bhakti-vilāsa." },
  { name: "Śrīla Raghunātha Dāsa Gosvāmī", desc: "Renowned for his intense renunciation and deep absorption in the pastimes of Rādhā-Kṛṣṇa at Rādhā-kuṇḍa." },
  { name: "Śrīla Jīva Gosvāmī", desc: "The foremost philosopher among the Six Gosvāmīs; author of the Ṣaṭ Sandarbhas." },
  { name: "Śrīla Gopāla Bhaṭṭa Gosvāmī", desc: "Established the worship of Rādhā-Ramaṇa and compiled Hari-bhakti-vilāsa." },
  { name: "Śrīla Raghunātha Bhaṭṭa Gosvāmī", desc: "Known for his constant chanting of the Holy Name and recitation of Śrīmad-Bhāgavatam." },
];

export default function GaudiyaAcharyasPage() {
  return (
    <PageLayout title="Gauḍīya Vaiṣṇava Ācāryas" breadcrumbs={[{ label: "Gauḍīya Ācāryas", href: "/gaudia-acharyas" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          The Gauḍīya Vaiṣṇava ācāryas are the great spiritual masters of the lineage descending from Lord Caitanya Mahāprabhu. Bhanu Swami Maharaj's lectures illuminate the lives, teachings, and contributions of these exalted personalities.
        </p>
      </div>

      <h2 className="section-title" style={{ marginBottom: 0 }}>Six Gosvāmīs of Vṛndāvana</h2>
      <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none" }}>
        {acharyas.map((a, i) => (
          <div key={i} style={{ padding: "16px", borderBottom: "1px solid #eee", display: "flex", gap: 14 }}>
            <div style={{ width: 44, height: 44, background: "#c8a84b", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "Georgia", fontSize: 18 }}>ॐ</div>
            <div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: "bold", color: "#8b1a1a", marginBottom: 4 }}>{a.name}</div>
              <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Lectures</h2>
        <div style={{ background: "white", border: "1px solid #ddd", borderTop: "none" }}>
          {gaudiyaAcharyas.map((item, i) => (
            <div key={i} style={{ padding: "14px 16px", borderBottom: "1px solid #eee" }}>
              <Link href={item.href} style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#8b1a1a", display: "block", marginBottom: 4 }}>{item.title}</Link>
              <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
