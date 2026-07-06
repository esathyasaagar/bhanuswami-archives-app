import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Item = { title: string; href: string; description?: string; date?: string; image?: string };

export default function LectureList({ items }: { items: Item[] }) {
  return (
    <Card className="border-[var(--color-border)] overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <div className="flex items-start gap-3 px-3 py-2">
            {item.image && (
              <div className="relative w-16 h-16 rounded overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="64px"
                />
              </div>
            )}
            <div className="w-6 h-6 rounded bg-[var(--color-maroon)] shrink-0 flex items-center justify-center text-white/70 text-[10px] font-semibold mt-0.5">
              {i + 1}
            </div>
            <div className="min-w-0">
              <Link href={item.href}
                className="font-serif text-sm text-[var(--color-primary)] hover:text-[var(--color-maroon-dark)] leading-snug block">
                {item.title}
              </Link>
              {item.description && (
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              )}
              {item.date && (
                <span className="text-[10px] text-muted-foreground">{item.date}</span>
              )}
            </div>
          </div>
          {i < items.length - 1 && <Separator />}
        </div>
      ))}
    </Card>
  );
}
