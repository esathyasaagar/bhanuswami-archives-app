import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import {
  navItems,
  sbCantos,
  seminars,
  festivals,
  books,
  shravanaUtsav,
  madhuraContent,
  karthikMonth,
  gaudiyaAcharyas,
} from "../src/content";
import { sitePages } from "../src/siteContent";
import { siteLinks } from "../src/siteLinks";
import { colors } from "../src/theme";
import YouTubeEmbed from "../src/YouTubeEmbed";

type NavNode = { label: string; href: string; children?: NavNode[] };
type Row = { title: string; href?: string; description?: string; image?: string };
type Resolved = {
  title: string;
  rows: Row[];
  description?: string;
  heroImage?: string;
  video?: string;
  article?: string;
};

function findNavNode(nodes: NavNode[], href: string): NavNode | null {
  for (const node of nodes) {
    if (node.href === href) return node;
    if (node.children) {
      const found = findNavNode(node.children, href);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Every page in the database that sits directly beneath `href`.
 * This guarantees a page always exposes its sub-pages even when the original
 * site never linked to them from here.
 */
const ALL_PATHS = Object.keys(sitePages);

/** Readable label for a path level that has no page of its own. */
function labelForPath(parts: string[], depth: number): string {
  const seg = parts[depth - 1];
  if (parts[0] === "sb") {
    if (depth === 2) return `Canto ${seg}`;
    if (depth === 3) return `Chapter ${seg}`;
    if (depth === 4) return `Text ${seg.replace(/-/g, "–")}`;
  }
  return seg.replace(/[-_]/g, " ");
}
function childrenByPrefix(href: string): { title: string; href: string }[] {
  const prefix = href === "/" ? "/" : href + "/";
  const depth = href === "/" ? 1 : href.split("/").filter(Boolean).length + 1;
  const out = new Map<string, string>();
  for (const p of ALL_PATHS) {
    if (!p.startsWith(prefix)) continue;
    const parts = p.split("/").filter(Boolean);
    // The direct child on the way to `p` — may be an intermediate level that
    // has no page of its own (e.g. /sb/3/22 above /sb/3/22/12).
    const childPath = "/" + parts.slice(0, depth).join("/");
    if (out.has(childPath)) continue;
    out.set(childPath, sitePages[childPath]?.title ?? labelForPath(parts, depth));
  }
  return [...out.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
    .map(([p, title]) => ({ title, href: p }));
}

/**
 * Merge curated rows (which carry images/descriptions) with the child links the
 * original site had on this page, plus any sub-pages found by path, so nothing
 * the site published is unreachable.
 */
function mergeRows(curated: Row[], href: string): Row[] {
  const seen = new Set(curated.map((r) => r.href).filter(Boolean) as string[]);
  const out = [...curated];
  const candidates: { title: string; href: string }[] = [
    ...(siteLinks[href] ?? []),
    ...childrenByPrefix(href),
  ];
  for (const l of candidates) {
    if (!seen.has(l.href)) {
      seen.add(l.href);
      out.push(l);
    }
  }
  return out;
}

function resolve(href: string): Resolved {
  const segments = href.split("/").filter(Boolean);

  // 1. Nav tree — section landing pages with sub-links. These are pure
  //    navigation: no article/video, since the original site's landing-page
  //    text is just the same list of children restated as plain text.
  const navNode = findNavNode(navItems as NavNode[], href);
  if (navNode?.children?.length) {
    const curated = navNode.children.map((c) => ({ title: c.label, href: c.href }));
    return { title: navNode.label, rows: mergeRows(curated, href) };
  }

  // 2. Śrīmad-Bhāgavatam canto: /sb/<canto>
  if (segments.length === 2 && segments[0] === "sb") {
    const canto = sbCantos.find((c) => String(c.canto) === segments[1]);
    if (canto) {
      const curated = canto.chapters.map((ch) => ({
        title: ch,
        href: `/sb/${ch.split(" ")[0].replace(/\./g, "/")}`,
      }));
      return { title: `Canto ${canto.canto} – ${canto.title}`, rows: mergeRows(curated, href) };
    }
  }

  // 3. Seminars: /seminars/<year>/<location>
  if (segments.length === 3 && segments[0] === "seminars") {
    const list = seminars[segments[1]]?.[segments[2]];
    if (list) {
      const locName = segments[2].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const curated = list.map((l) => ({ title: l.title, href: l.href, description: l.description, image: l.image }));
      return { title: `${locName} – ${segments[1]}`, rows: mergeRows(curated, href) };
    }
  }

  // 4. Festivals: /festivals/<year>
  if (segments.length === 2 && segments[0] === "festivals") {
    const list = festivals[segments[1]];
    if (list) {
      const curated = list.map((l) => ({ title: l.title, href: l.href, description: l.description, image: l.image }));
      return { title: `Festivals – ${segments[1]}`, rows: mergeRows(curated, href) };
    }
  }

  // 5. Books & Texts: /nod, /hnc, /brhad, /vrajariti
  if (segments.length === 1 && (books as any)[segments[0]]) {
    const b = (books as any)[segments[0]];
    const curated = b.sections.map((s: Row) => ({ title: s.title, href: s.href, image: s.image }));
    return { title: b.title, description: `${b.author} — ${b.description}`, rows: mergeRows(curated, href) };
  }

  // 6. Special Events sub-sections
  if (segments.length === 2 && segments[0] === "shravana-utsav" && shravanaUtsav[segments[1]]) {
    const curated = shravanaUtsav[segments[1]].map((l: Row) => ({ title: l.title, href: l.href, image: l.image }));
    return { title: `Śravaṇa Utsav ${segments[1]}`, rows: mergeRows(curated, href) };
  }
  if (segments.length === 2 && segments[0] === "madhura" && madhuraContent[segments[1]]) {
    const curated = madhuraContent[segments[1]].map((l: Row) => ({ title: l.title, href: l.href, image: l.image }));
    return { title: `Madhura Mahotsava ${segments[1]}`, rows: mergeRows(curated, href) };
  }
  if (segments.length === 2 && segments[0] === "km" && karthikMonth[segments[1]]) {
    const curated = karthikMonth[segments[1]].map((l: Row) => ({ title: l.title, href: l.href, image: l.image }));
    return { title: `Kārttika Month ${segments[1]}`, rows: mergeRows(curated, href) };
  }

  // 7. Gauḍīya Ācāryas
  if (href === "/gaudia-acharyas") {
    const curated = gaudiyaAcharyas.map((a) => ({ title: a.title, href: a.href, description: a.description }));
    return { title: "Gauḍīya Ācāryas", rows: mergeRows(curated, href) };
  }

  // 7b. Blog — a complete A–Z index of every page in the archive, so nothing is
  //     unreachable even if the original site never linked to it from anywhere.
  if (href === "/blog") {
    const all = ALL_PATHS.filter((p) => sitePages[p].video || sitePages[p].article)
      .map((p) => ({ title: sitePages[p].title, href: p }))
      .sort((a, b) => a.title.localeCompare(b.title));
    return { title: "All Lectures & Articles", description: `${all.length} pages in the archive`, rows: all };
  }

  // 8. UNIVERSAL FALLBACK — every page the original site has, with its real
  //    title, video and full text, plus every page beneath or linked from it.
  //    When a page has real navigable children it's a listing/landing page —
  //    its "article" text on the original site is just that same list of
  //    children restated as plain text, so we drop it to avoid duplication.
  if (sitePages[href]) {
    const page = sitePages[href];
    const rows = mergeRows([], href);
    return {
      title: page.title,
      video: page.video,
      article: rows.length === 0 ? page.article : undefined,
      rows,
    };
  }

  // 9. Path with no page of its own but real sub-pages beneath it
  //    (e.g. /sb/2/4 exists only as a parent of /sb/2/4/1).
  const children = mergeRows([], href);
  const leafTitle = segments.length ? segments[segments.length - 1].replace(/-/g, " ") : "Page";
  if (children.length) {
    const canto = segments[0] === "sb" && segments.length === 3
      ? sbCantos.find((c) => String(c.canto) === segments[1])
      : undefined;
    const chapterTitle = canto?.chapters.find((ch) => ch.split(" ")[0] === `${segments[1]}.${segments[2]}`);
    return { title: chapterTitle ?? leafTitle, rows: children };
  }

  return { title: leafTitle, rows: [] };
}

export default function CatchAllScreen() {
  const { path } = useLocalSearchParams<{ path: string | string[] }>();
  const router = useRouter();
  const segments = Array.isArray(path) ? path : path ? [path] : [];
  const href = "/" + segments.join("/");
  const { title, rows, description, heroImage, video, article } = resolve(href);
  const nothingToShow = !video && !heroImage && !article && !description && rows.length === 0;

  return (
    <>
      <Stack.Screen options={{ title }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {video ? (
          <YouTubeEmbed videoId={video} title={title} />
        ) : (
          heroImage && <Image source={{ uri: heroImage }} style={styles.hero} />
        )}
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {nothingToShow && <Text style={styles.description}>This content is not yet available.</Text>}
        {rows.length > 0 && (
          <View style={styles.card}>
            {rows.map((row, i) => (
              <TouchableOpacity
                key={row.href ?? `${row.title}-${i}`}
                style={[styles.item, i < rows.length - 1 && styles.itemBorder]}
                disabled={!row.href}
                onPress={() => row.href && router.push(row.href as any)}
              >
                {row.image && <Image source={{ uri: row.image }} style={styles.thumb} />}
                <View style={styles.itemBody}>
                  <Text style={styles.itemText}>{row.title}</Text>
                  {row.description && <Text style={styles.itemDesc}>{row.description}</Text>}
                </View>
                {row.href && <Text style={styles.arrow}>›</Text>}
              </TouchableOpacity>
            ))}
          </View>
        )}
        {article && (
          <Text style={styles.article} selectable>
            {article}
          </Text>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, maxWidth: 900, width: "100%", alignSelf: "center" },
  hero: { width: "100%", aspectRatio: 16 / 9, borderRadius: 12, marginBottom: 14, backgroundColor: colors.border },
  title: { fontSize: 20, fontWeight: "800", color: colors.maroon, marginBottom: 8 },
  description: { fontSize: 13, color: colors.muted, lineHeight: 19, marginBottom: 16 },
  article: { fontSize: 14, color: colors.foreground, lineHeight: 22, marginTop: 16, marginBottom: 20 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 10, paddingHorizontal: 14, gap: 12 },
  itemBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  thumb: { width: 44, height: 44, borderRadius: 8, backgroundColor: colors.border },
  itemBody: { flex: 1, paddingRight: 10 },
  itemText: { fontSize: 14, color: colors.foreground },
  itemDesc: { fontSize: 11, color: colors.muted, marginTop: 3, lineHeight: 15 },
  arrow: { fontSize: 18, color: colors.gold },
});
