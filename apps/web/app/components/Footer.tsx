import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", borderTop: "3px solid #8b1a1a", marginTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
          <div>
            <h3 style={{ color: "#c8a84b", fontFamily: "Georgia, serif", fontSize: 18, marginBottom: 12 }}>Bhanu Swami Archives</h3>
            <p style={{ color: "#aaa", fontFamily: "Arial, sans-serif", fontSize: 12, lineHeight: 1.7 }}>
              A comprehensive archive of lectures, seminars, and festival talks by His Holiness Bhanu Swami Maharaj on the teachings of Śrīla Prabhupāda and Gauḍīya Vaiṣṇavism.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#c8a84b", fontFamily: "Arial, sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Scriptures</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Śrīmad-Bhāgavatam", "Bhagavad-gītā As It Is", "Nectar of Devotion", "Harināma Cintāmaṇi", "Bṛhad Bhāgavatāmṛta"].map((t) => (
                <li key={t} style={{ marginBottom: 6 }}>
                  <Link href="/books" style={{ color: "#999", fontFamily: "Arial, sans-serif", fontSize: 12 }}>{t}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#c8a84b", fontFamily: "Arial, sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Content</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Seminars", href: "/seminars" },
                { label: "Festivals", href: "/festivals" },
                { label: "Podcasts", href: "/podcasts" },
                { label: "Special Events", href: "/special-events" },
                { label: "Blog", href: "/blog" },
              ].map((l) => (
                <li key={l.href} style={{ marginBottom: 6 }}>
                  <Link href={l.href} style={{ color: "#999", fontFamily: "Arial, sans-serif", fontSize: 12 }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#c8a84b", fontFamily: "Arial, sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Connect</h4>
            <p style={{ color: "#aaa", fontFamily: "Arial, sans-serif", fontSize: 12, lineHeight: 1.7 }}>
              Are you interested in contributing or have questions about the archive?
            </p>
            <Link href="/contact" style={{ display: "inline-block", marginTop: 10, background: "#8b1a1a", color: "white", padding: "7px 14px", fontFamily: "Arial, sans-serif", fontSize: 12, borderRadius: 2 }}>
              Contact Volunteer Devotees
            </Link>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #333", marginTop: 28, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "#666", fontFamily: "Arial, sans-serif", fontSize: 11, margin: 0 }}>
            © {new Date().getFullYear()} Bhanu Swami Media. All rights reserved.
          </p>
          <p style={{ color: "#555", fontFamily: "Arial, sans-serif", fontSize: 11, margin: 0 }}>
            Dedicated to the service of Śrīla Prabhupāda and the Vaiṣṇava community
          </p>
        </div>
      </div>
    </footer>
  );
}
