import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";
import { sbCantos } from "../../data/content";

export default async function CantoPage({ params }: { params: Promise<{ canto: string }> }) {
  const { canto } = await params;
  const data = sbCantos.find((c) => c.canto === Number(canto));

  if (!data) {
    return (
      <PageLayout title={`Canto ${canto}`} breadcrumbs={[{ label: "Śrīmad-Bhāgavatam", href: "/sb" }, { label: `Canto ${canto}`, href: `/sb/${canto}` }]}>
        <div style={{ background: "white", border: "1px solid #ddd", padding: 24 }}>
          <p style={{ fontFamily: "Georgia, serif", color: "#666" }}>Content for this canto is being organized and will be available soon.</p>
        </div>
      </PageLayout>
    );
  }

  const items = data.chapters.map((ch) => ({
    title: ch,
    href: `/sb/${canto}/${ch.split(" ")[0].replace(/\./g, "/")}`,
  }));

  return (
    <PageLayout
      title={`Canto ${data.canto} – ${data.title}`}
      breadcrumbs={[{ label: "Śrīmad-Bhāgavatam", href: "/sb" }, { label: `Canto ${data.canto}`, href: `/sb/${canto}` }]}
    >
      <div style={{ background: "white", border: "1px solid #ddd", padding: 16, marginBottom: 16 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#555", lineHeight: 1.7, margin: 0 }}>
          Lectures on Canto {data.canto} of the Śrīmad-Bhāgavatam — <em>{data.title}</em> — by His Holiness Bhanu Swami Maharaj.
        </p>
      </div>
      <LectureList items={items} />

      <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        {sbCantos.map((c) => (
          <Link key={c.canto} href={`/sb/${c.canto}`} style={{
            padding: "6px 14px",
            background: c.canto === data.canto ? "#8b1a1a" : "white",
            color: c.canto === data.canto ? "white" : "#8b1a1a",
            border: "1px solid #8b1a1a",
            fontFamily: "Arial, sans-serif",
            fontSize: 12,
            borderRadius: 2,
            textDecoration: "none",
          }}>
            Canto {c.canto}
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
