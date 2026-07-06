import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { sidebarCategories, recentPosts } from "../data/content";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-56 shrink-0 space-y-3">
      {/* About */}
      <Card className="overflow-hidden border-[var(--color-border)]">
        <div className="relative h-32 bg-gradient-to-br from-[var(--color-maroon)] to-[var(--color-gold)]">
          <Image
            src="/images/bhanu-swami.jpg"
            alt="His Holiness Bhanu Swami Maharaja"
            fill
            className="object-cover object-top"
            sizes="256px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <p className="text-white font-serif text-sm font-bold leading-tight">His Holiness Bhanu Swami Maharaja</p>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Senior disciple of Śrīla Prabhupāda and distinguished scholar of Vaiṣṇava philosophy, author, and spiritual teacher.
          </p>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-[var(--color-border)]">
        <CardHeader className="py-2 px-3 bg-[var(--color-maroon)] rounded-t-lg">
          <CardTitle className="text-white text-xs uppercase tracking-wider font-semibold">Categories</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {sidebarCategories.map((cat, i) => (
            <div key={cat.href}>
              <Link href={cat.href}
                className="flex items-center justify-between px-3 py-1.5 text-xs text-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-colors">
                <span>{cat.label}</span>
                <Badge variant="secondary" className="text-[10px] h-4">{cat.count}</Badge>
              </Link>
              {i < sidebarCategories.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="border-[var(--color-border)]">
        <CardHeader className="py-2 px-3 bg-[var(--color-maroon)] rounded-t-lg">
          <CardTitle className="text-white text-xs uppercase tracking-wider font-semibold">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {recentPosts.map((post, i) => (
            <div key={post.href}>
              <div className="px-3 py-1.5">
                <Link href={post.href}
                  className="font-serif text-xs text-[var(--color-primary)] hover:text-[var(--color-maroon-dark)] leading-snug block mb-1">
                  {post.title}
                </Link>
                <span className="text-[10px] text-muted-foreground">{post.date}</span>
              </div>
              {i < recentPosts.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="border-[var(--color-border)]">
        <CardHeader className="py-2 px-3 bg-[var(--color-maroon)] rounded-t-lg">
          <CardTitle className="text-white text-xs uppercase tracking-wider font-semibold">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {[
            { label: "Latest Seminars", href: "/seminars/2025" },
            { label: "Festivals 2026", href: "/festivals/2026" },
            { label: "Podcast Episodes", href: "/podcasts" },
            { label: "Shravana Utsav", href: "/shravana-utsav/2025" },
          ].map((l, i, arr) => (
            <div key={l.href}>
              <Link href={l.href}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-colors">
                <span className="text-[var(--color-gold)]">›</span>
                {l.label}
              </Link>
              {i < arr.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
