import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { recentPosts, sbCantos, seminars } from "./data/content";

/* ── Book cover cards for each section ── */
const COLLECTION = [
  {
    label: "Śrīmad-Bhāgavatam",
    sub: "9 Cantos · 248 lectures",
    href: "/sb",
    bg: "var(--cover-sb)",
    pattern: "SB",
    image: "/wp-content/uploads/2024/10/sb-bs.jpg",
  },
  {
    label: "Bhagavad-gītā",
    sub: "Complete series · 112 lectures",
    href: "/bg",
    bg: "var(--cover-bg)",
    pattern: "BG",
    image: "/wp-content/uploads/2024/12/IMG-20241213-WA0022.jpg",
  },
  {
    label: "Seminars",
    sub: "2016 – 2025 · worldwide",
    href: "/seminars",
    bg: "var(--cover-seminars)",
    pattern: "SEM",
    image: "/wp-content/uploads/2025/11/Untitled-design.jpg",
  },
  {
    label: "Festivals",
    sub: "2013 – 2026 · 34 programmes",
    href: "/festivals",
    bg: "var(--cover-festivals)",
    pattern: "FEST",
    image: "/wp-content/uploads/2025/03/9.jpg",
  },
  {
    label: "Books & Texts",
    sub: "NOD · HNC · Bṛhad · Vraja",
    href: "/books",
    bg: "var(--cover-books)",
    pattern: "TEXT",
    image: "/wp-content/uploads/2024/12/Untitled-design-2.jpg",
  },
  {
    label: "Podcasts",
    sub: "2020 – 2026 · 12 episodes",
    href: "/podcasts",
    bg: "var(--cover-podcasts)",
    pattern: "POD",
    image: "/images/hnc-bhanu-swami.jpg",
  },
  {
    label: "Gauḍīya Ācāryas",
    sub: "Six Gosvāmīs & lineage",
    href: "/gaudia-acharyas",
    bg: "var(--cover-acharyas)",
    pattern: "ĀC",
    image: "/wp-content/uploads/2024/12/7-1.jpg",
  },
  {
    label: "Special Events",
    sub: "Śravaṇa Utsav · Madhura",
    href: "/special-events",
    bg: "var(--cover-events)",
    pattern: "EVT",
    image: "/wp-content/uploads/2025/02/Shravana-Utsav.jpg",
  },
];

function BookCover({ item }: { item: typeof COLLECTION[0] }) {
  return (
    <Link href={item.href} className="group flex flex-col gap-2">
      {/* The "book cover" */}
      <div
        className="relative rounded-lg overflow-hidden aspect-[3/4] shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1"
        style={{ background: item.bg }}
      >
        {/* Real photo */}
        <Image
          src={item.image}
          alt={item.label}
          fill
          unoptimized
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        />
        {/* Light color tint so each section keeps its hue but the photo stays visible */}
        <div className="absolute inset-0 mix-blend-multiply opacity-30" style={{ background: item.bg }} />
        {/* Decorative spine line */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/25" />
        {/* Abbreviation */}
        <div className="absolute top-4 left-5 font-mono text-white/40 text-xs tracking-widest uppercase">{item.pattern}</div>
        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <p className="font-serif text-white text-sm font-bold leading-snug drop-shadow">{item.label}</p>
        </div>
      </div>
      {/* Below cover */}
      <div>
        <p className="text-[11px] font-medium text-foreground leading-tight line-clamp-1">{item.label}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">{item.sub}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const recentSeminars = Object.entries(seminars)
    .sort(([a], [b]) => Number(b) - Number(a))
    .slice(0, 1)
    .flatMap(([year, locs]) =>
      Object.entries(locs).slice(0, 3).map(([loc, lectures]) => ({
        year,
        loc: loc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        count: lectures.length,
        href: `/seminars/${year}/${loc}`,
      }))
    );

  return (
    <div className="min-h-screen">
      {/* ── Hero banner ── */}
      <div className="bg-[var(--cover-sb)] relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)"
          }}
        />
        <div className="absolute bottom-0 right-0 font-serif text-white/5 text-[180px] leading-none select-none pr-8">ॐ</div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-xl">
            <Image src="/images/bhanu-swami.jpg" alt="Bhanu Swami Maharaja" fill className="object-cover object-top" sizes="128px" />
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">His Holiness</p>
            <h1 className="font-serif text-white text-2xl sm:text-3xl font-bold leading-tight mb-2">
              Bhanu Swami Maharaja
            </h1>
            <p className="text-white/70 text-sm leading-relaxed max-w-lg">
              Senior disciple of Śrīla Prabhupāda · Scholar of Vaiṣṇava philosophy · Author · Spiritual teacher
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge className="bg-white/15 text-white border-0 text-[10px] hover:bg-white/25">248 SB Lectures</Badge>
              <Badge className="bg-white/15 text-white border-0 text-[10px] hover:bg-white/25">89 Seminars</Badge>
              <Badge className="bg-white/15 text-white border-0 text-[10px] hover:bg-white/25">34 Festivals</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">

        {/* ── Announcement strip ── */}
        <div className="flex items-center gap-3 rounded-lg border border-[var(--color-gold-light)] bg-[oklch(0.97_0.015_72)] px-3 py-1.5 mb-8 text-sm">
          <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold bg-[var(--color-maroon)] text-white shrink-0">NEW</span>
          <span className="text-foreground/80">
            Festivals 2026 lectures now available —{" "}
            <Link href="/festivals/2026" className="font-semibold text-[var(--color-maroon)] hover:underline">listen now</Link>
          </span>
        </div>

        {/* ── Collection grid ── */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-serif text-xl font-bold text-foreground">The Collection</h2>
            <Link href="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Browse all →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
            {COLLECTION.map((item) => (
              <BookCover key={item.href} item={item} />
            ))}
          </div>
        </section>

        <Separator className="mb-8" />

        {/* ── Two-column lower section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Latest posts */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-lg font-bold text-foreground mb-4">Latest Lectures</h2>
            <div className="space-y-0 rounded-xl border border-border bg-card overflow-hidden shadow-sm">
              {recentPosts.map((post, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 p-3 hover:bg-muted/40 transition-colors">
                    <div className="relative w-14 h-14 rounded-md overflow-hidden shrink-0 bg-muted">
                      <Image src={post.image} alt={post.title} fill unoptimized className="object-cover" sizes="56px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link href={post.href}
                        className="font-serif text-sm font-semibold text-foreground hover:text-[var(--color-maroon)] leading-snug block mb-1">
                        {post.title}
                      </Link>
                      <span className="text-[10px] text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                  {i < recentPosts.length - 1 && <Separator />}
                </div>
              ))}
            </div>

            {/* Cantos grid */}
            <h2 className="font-serif text-lg font-bold text-foreground mt-8 mb-4">Śrīmad-Bhāgavatam Cantos</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {sbCantos.map((c) => (
                <Link key={c.canto} href={`/sb/${c.canto}`}
                  className="group rounded-lg border border-border bg-card p-3 text-center hover:border-[var(--color-maroon)] hover:shadow-sm transition-all">
                  <p className="font-serif text-lg font-bold text-[var(--color-maroon)]">{c.canto}</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 line-clamp-2">{c.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About */}
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="relative h-40">
                <Image src="/images/sb-bhanu-swami.jpg" alt="Bhanu Swami" fill className="object-cover object-center" sizes="320px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <p className="absolute bottom-3 left-3 font-serif text-white text-sm font-semibold">His Holiness Bhanu Swami Maharaja</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A comprehensive archive of lectures, seminars, and festival talks — curated for devotees worldwide.
                </p>
              </div>
            </div>

            {/* Recent seminars */}
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="px-3 py-1.5 border-b border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recent Seminars</p>
              </div>
              {recentSeminars.map((s, i) => (
                <div key={i}>
                  <Link href={s.href} className="flex items-center justify-between px-3 py-1.5 hover:bg-muted/40 transition-colors">
                    <div>
                      <p className="text-xs font-medium text-foreground">{s.loc}</p>
                      <p className="text-[10px] text-muted-foreground">{s.year} · {s.count} seminar{s.count !== 1 ? "s" : ""}</p>
                    </div>
                    <span className="text-muted-foreground text-xs">→</span>
                  </Link>
                  {i < recentSeminars.length - 1 && <Separator />}
                </div>
              ))}
              <div className="px-3 py-1.5 border-t border-border">
                <Link href="/seminars" className="text-xs font-medium text-[var(--color-maroon)] hover:underline">View all seminars →</Link>
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="px-3 py-1.5 border-b border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</p>
              </div>
              {[
                { label: "Festivals 2026", href: "/festivals/2026" },
                { label: "Japan Seminars 2025", href: "/seminars/2025/japan" },
                { label: "Śravaṇa Utsav 2025", href: "/shravana-utsav/2025" },
                { label: "Podcast Episodes", href: "/podcasts" },
                { label: "Gauḍīya Ācāryas", href: "/gaudia-acharyas" },
              ].map((l, i, arr) => (
                <div key={l.href}>
                  <Link href={l.href} className="flex items-center gap-2 px-3 py-1.5 hover:bg-muted/40 transition-colors text-xs text-foreground hover:text-[var(--color-maroon)]">
                    <span className="text-[var(--color-maroon)] opacity-60">›</span>
                    {l.label}
                  </Link>
                  {i < arr.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
