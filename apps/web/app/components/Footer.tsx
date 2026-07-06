import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/70 mt-12 border-t-[3px] border-[var(--color-maroon)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-[var(--color-gold)] font-serif text-lg font-bold mb-3">Bhanu Swami Archives</h3>
            <p className="text-xs leading-relaxed text-white/50">
              A comprehensive archive of lectures, seminars, and festival talks by His Holiness Bhanu Swami Maharaja on Śrīmad-Bhāgavatam, Bhagavad-gītā, and Vaiṣṇava philosophy.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Scriptures</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/sb" className="hover:text-[var(--color-gold)] transition-colors">Śrīmad-Bhāgavatam</Link></li>
              <li><Link href="/bg" className="hover:text-[var(--color-gold)] transition-colors">Bhagavad-gītā</Link></li>
              <li><Link href="/books" className="hover:text-[var(--color-gold)] transition-colors">Books</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Events</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/seminars" className="hover:text-[var(--color-gold)] transition-colors">Seminars</Link></li>
              <li><Link href="/festivals" className="hover:text-[var(--color-gold)] transition-colors">Festivals</Link></li>
              <li><Link href="/podcasts" className="hover:text-[var(--color-gold)] transition-colors">Podcasts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">More</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/gaudia-acharyas" className="hover:text-[var(--color-gold)] transition-colors">Glories of Ācāryas</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--color-gold)] transition-colors">Blog</Link></li>
              <li><Link href="/contact-us" className="hover:text-[var(--color-gold)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="bg-white/10 my-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bhanu Swami Archives. All rights reserved.</p>
          <p>Dedicated to the service of Śrīla Prabhupāda and the Vaiṣṇava community</p>
        </div>
      </div>
    </footer>
  );
}
