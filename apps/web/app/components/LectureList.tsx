import Link from "next/link";

type Item = { title: string; href: string; description?: string; date?: string };

export default function LectureList({ items }: { items: Item[] }) {
  return (
    <div style={{ background: "white", border: "1px solid #ddd" }}>
      {items.map((item, i) => (
        <div key={i} style={{ padding: "14px 16px", borderBottom: "1px solid #eee", display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 32, height: 32, background: "#8b1a1a", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "rgba(255,255,255,0.6)", fontSize: 14, borderRadius: 2, marginTop: 2,
          }}>
            {i + 1}
          </div>
          <div>
            <Link href={item.href} style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#8b1a1a", lineHeight: 1.4, display: "block", marginBottom: 4 }}>
              {item.title}
            </Link>
            {item.description && (
              <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.description}</p>
            )}
            {item.date && (
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999" }}>{item.date}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
