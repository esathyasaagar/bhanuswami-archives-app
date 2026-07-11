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
  books: "#2e1a5c",
  podcasts: "#0a3d4a",
  acharyas: "#4a2e0a",
  events: "#1a1a4a",
};

export type Section = {
  label: string;
  sub: string;
  href: string;
  color: string;
  image: string;
};

export const COLLECTION: Section[] = [
  { label: "Śrīmad-Bhāgavatam", sub: "9 Cantos · 248 lectures", href: "/sb", color: cover.sb, image: `${IMG_BASE}/2024/10/sb-bs.jpg` },
  { label: "Bhagavad-gītā", sub: "Complete series · 112 lectures", href: "/bg", color: cover.bg, image: `${IMG_BASE}/2024/12/IMG-20241213-WA0022.jpg` },
  { label: "Seminars", sub: "2016 – 2025 · worldwide", href: "/seminars", color: cover.seminars, image: `${IMG_BASE}/2025/11/Untitled-design.jpg` },
  { label: "Festivals", sub: "2013 – 2026 · 34 programmes", href: "/festivals", color: cover.festivals, image: `${IMG_BASE}/2025/03/9.jpg` },
  { label: "Books & Texts", sub: "NOD · HNC · Bṛhad · Vraja", href: "/books", color: cover.books, image: `${IMG_BASE}/2024/12/Untitled-design-2.jpg` },
  { label: "Podcasts", sub: "2020 – 2026 · 12 episodes", href: "/podcasts", color: cover.podcasts, image: `${IMG_BASE}/2024/12/hc-bs.jpg` },
  { label: "Gauḍīya Ācāryas", sub: "Six Gosvāmīs & lineage", href: "/gaudia-acharyas", color: cover.acharyas, image: `${IMG_BASE}/2024/12/7-1.jpg` },
  { label: "Special Events", sub: "Śravaṇa Utsav · Madhura", href: "/special-events", color: cover.events, image: `${IMG_BASE}/2025/02/Shravana-Utsav.jpg` },
];

export const PORTRAIT = `${IMG_BASE}/2025/01/vc-bs.jpg`;
