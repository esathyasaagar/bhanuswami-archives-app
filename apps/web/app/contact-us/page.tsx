import PageLayout from "../components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us" breadcrumbs={[{ label: "Contact Us", href: "/contact-us" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 24, marginBottom: 20 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, marginTop: 0 }}>
          This archive is maintained by volunteer devotees. If you have questions about the archive, wish to report a broken link, or would like to contribute to this service, please use the form below.
        </p>
        <form style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 520 }}>
          <div>
            <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 5, color: "#555" }}>Your Name *</label>
            <input type="text" style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 5, color: "#555" }}>Email Address *</label>
            <input type="email" style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 5, color: "#555" }}>Subject</label>
            <select style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, boxSizing: "border-box", background: "white" }}>
              <option>General Inquiry</option>
              <option>Report a Broken Link</option>
              <option>Contribute to the Archive</option>
              <option>Request a Lecture</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 5, color: "#555" }}>Message *</label>
            <textarea rows={6} style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", fontFamily: "Arial, sans-serif", fontSize: 13, borderRadius: 2, boxSizing: "border-box", resize: "vertical" }} />
          </div>
          <button type="submit" style={{ background: "#8b1a1a", color: "white", border: "none", padding: "10px 24px", fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: "bold", borderRadius: 2, cursor: "pointer", alignSelf: "flex-start" }}>
            Send Message
          </button>
        </form>
      </div>

      <div style={{ background: "#fffbf0", border: "1px solid #c8a84b", padding: 16 }}>
        <h3 style={{ fontFamily: "Arial, sans-serif", fontSize: 13, fontWeight: "bold", textTransform: "uppercase", color: "#8b6914", margin: "0 0 8px" }}>About This Archive</h3>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>
          Bhanu Swami Archives is a free service maintained by volunteer devotees for the benefit of the Vaiṣṇava community worldwide. All content belongs to Bhanu Swami Media. This archive is offered as a service of devotion (sevā).
        </p>
      </div>
    </PageLayout>
  );
}
