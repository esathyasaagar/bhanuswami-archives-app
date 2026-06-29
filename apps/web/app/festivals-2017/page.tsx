import PageLayout from "../components/PageLayout";
import LectureList from "../components/LectureList";

const items = [
  { title: "Festivals 2017 – Lecture Archive", href: "/festivals-2017" },
];

export default function Festivals2017Page() {
  return (
    <PageLayout title="Festivals – 2017" breadcrumbs={[{ label: "Festivals", href: "/festivals" }, { label: "2017", href: "/festivals-2017" }]}>
      <div style={{ background: "white", border: "1px solid #ddd", padding: 24 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
          Festival lectures from 2017. Content is being organized and individual recordings will be listed here.
        </p>
      </div>
    </PageLayout>
  );
}
