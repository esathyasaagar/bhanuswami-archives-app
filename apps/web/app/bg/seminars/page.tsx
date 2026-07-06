import PageLayout from "../../components/PageLayout";
import LectureList from "../../components/LectureList";

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
      <LectureList items={bgSeminars} />
    </PageLayout>
  );
}
