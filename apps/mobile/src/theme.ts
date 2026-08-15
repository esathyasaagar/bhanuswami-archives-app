// Shared library-aesthetic theme for the hybrid app (web + iOS + Android)

export const IMG_BASE = "https://bhanuswamiarchives.net/wp-content/uploads";

export const colors = {
  background: "#f7f3ec",   // warm linen
  card: "#ffffff",
  foreground: "#241a12",
  muted: "#7c7267",
  border: "#e6ddcf",
  maroon: "#5c1a1a",
  maroonDark: "#3f1010",
  gold: "#b8862f",
};

// Book-cover hues per section
export const cover = {
  sb: "#5c1a1a",
  bg: "#1a2d5c",
  seminars: "#1a4a2e",
  festivals: "#6b3c0a",
  nod: "#2e1a5c",
  hnc: "#5c1a3d",
  brhad: "#1a3d5c",
  vrajariti: "#3d1a5c",
  podcasts: "#0a3d4a",
  acharyas: "#4a2e0a",
  madhura: "#5c3a1a",
  shravana: "#1a1a4a",
  km: "#4a1a2e",
};

export type Section = {
  label: string;
  sub: string;
  href: string;
  color: string;
  image: string;
};

// The 13 top-level sections the original site publishes (its wp-sitemap
// "posts"). Counts and cover images are taken from the site itself — see
// tools/extract-site-content.py. Keep this list in step with the site.
export const COLLECTION: Section[] = [
  { label: "Śrīmad-Bhāgavatam", sub: "384 pages · 329 lectures", href: "/sb", color: cover.sb, image: `${IMG_BASE}/2024/10/sb-bs.jpg` },
  { label: "Bhagavad-gītā", sub: "Sārārtha Varṣiṇī Ṭīkā", href: "/bg", color: cover.bg, image: `${IMG_BASE}/2024/12/IMG-20241213-WA0022.jpg` },
  { label: "Seminars", sub: "2016 – 2026 · worldwide", href: "/seminars", color: cover.seminars, image: `${IMG_BASE}/2024/12/WhatsApp-Image-2024-12-23-at-9.12.57-AM.jpeg` },
  { label: "Festivals", sub: "2013 – 2026 · 26 lectures", href: "/festivals", color: cover.festivals, image: `${IMG_BASE}/2025/03/9.jpg` },
  { label: "Nectar of Devotion", sub: "Bhakti-rasāmṛta-sindhu", href: "/nod", color: cover.nod, image: `${IMG_BASE}/2024/12/Untitled-design-2.jpg` },
  { label: "Harināma Cintāmaṇi", sub: "Glories of the Holy Name", href: "/hnc", color: cover.hnc, image: `${IMG_BASE}/2024/12/hc-bs.jpg` },
  { label: "Bṛhad Bhāgavatāmṛta", sub: "Śrīla Sanātana Gosvāmī", href: "/brhad", color: cover.brhad, image: `${IMG_BASE}/2024/12/IMG-20241227-WA0005.jpg` },
  { label: "Vraja Rīti Cintāmaṇi", sub: "Pastimes of Vṛndāvana", href: "/vrajariti", color: cover.vrajariti, image: `${IMG_BASE}/2025/01/vc-bs.jpg` },
  { label: "Podcasts", sub: "Audio conversations", href: "/podcasts", color: cover.podcasts, image: `${IMG_BASE}/2025/11/Untitled-design.jpg` },
  { label: "Gauḍīya Ācāryas", sub: "Six Gosvāmīs & lineage", href: "/gaudia-acharyas", color: cover.acharyas, image: `${IMG_BASE}/2024/12/7-1.jpg` },
  { label: "Madhura Mahotsava", sub: "Festival of sweetness", href: "/madhura", color: cover.madhura, image: `${IMG_BASE}/2025/01/Untitled-design.jpg` },
  { label: "Śravaṇa Utsav", sub: "Festival of hearing", href: "/shravana-utsav", color: cover.shravana, image: `${IMG_BASE}/2025/02/Shravana-Utsav.jpg` },
  { label: "Kārttika Month", sub: "Dāmodara lecture series", href: "/km", color: cover.km, image: `${IMG_BASE}/2024/12/yasoda-bs.jpg` },
];

export const PORTRAIT = `${IMG_BASE}/2025/01/vc-bs.jpg`;
