import Link from "next/link";
import Sidebar from "./Sidebar";

type Crumb = { label: string; href: string };

export default function PageLayout({
  title,
  breadcrumbs = [],
  children,
}: {
  title: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 16px" }}>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Breadcrumb */}
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#888", marginBottom: 12 }}>
            <Link href="/" style={{ color: "#8b1a1a" }}>Home</Link>
            {breadcrumbs.map((b) => (
              <span key={b.href}>
                {" "}/{" "}
                <Link href={b.href} style={{ color: "#8b1a1a" }}>{b.label}</Link>
              </span>
            ))}
          </div>

          {/* Page title */}
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: 24,
            color: "#1a1a1a",
            margin: "0 0 16px",
            paddingBottom: 10,
            borderBottom: "3px solid #8b1a1a",
          }}>
            {title}
          </h1>

          {children}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
