/**
 * Crawl the app's whole navigation graph and report:
 *   - dead ends       : pages a user can reach that show nothing
 *   - unreachable     : content pages that exist but nothing links to
 *
 * This mirrors the resolve() logic in apps/mobile/app/[...path].tsx. If you
 * change that resolver, mirror the change here — this audit is the only thing
 * that reliably catches "some pages are empty" regressions, which repeatedly
 * slipped through manual spot-checking.
 *
 * Usage (from repo root):
 *   cd apps/mobile
 *   npx esbuild src/content.ts     --bundle --format=cjs --platform=node --outfile=/tmp/c.js
 *   npx esbuild src/siteContent.ts --bundle --format=cjs --platform=node --outfile=/tmp/sc.js
 *   npx esbuild src/siteLinks.ts   --bundle --format=cjs --platform=node --outfile=/tmp/sl.js
 *   node ../../tools/audit-coverage.js
 *
 * Expected healthy output: ~567 reachable, 1 dead end (/telugu-transcripts,
 * which is empty on the original site too), 0 unreachable.
 */
const {
  navItems, sbCantos, seminars, festivals, books,
  shravanaUtsav, madhuraContent, karthikMonth, gaudiyaAcharyas,
} = require("/tmp/c.js");
const { sitePages } = require("/tmp/sc.js");
const { siteLinks } = require("/tmp/sl.js");

const ALL = Object.keys(sitePages);

function findNavNode(nodes, href) {
  for (const n of nodes) {
    if (n.href === href) return n;
    if (n.children) { const f = findNavNode(n.children, href); if (f) return f; }
  }
  return null;
}

function labelForPath(parts, depth) {
  const seg = parts[depth - 1];
  if (parts[0] === "sb") {
    if (depth === 2) return `Canto ${seg}`;
    if (depth === 3) return `Chapter ${seg}`;
    if (depth === 4) return `Text ${seg.replace(/-/g, "–")}`;
  }
  return seg.replace(/[-_]/g, " ");
}

function childrenByPrefix(href) {
  const prefix = href === "/" ? "/" : href + "/";
  const depth = href === "/" ? 1 : href.split("/").filter(Boolean).length + 1;
  const out = new Map();
  for (const p of ALL) {
    if (!p.startsWith(prefix)) continue;
    const parts = p.split("/").filter(Boolean);
    const child = "/" + parts.slice(0, depth).join("/");
    if (out.has(child)) continue;
    out.set(child, (sitePages[child] && sitePages[child].title) || labelForPath(parts, depth));
  }
  return [...out.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
    .map(([href, title]) => ({ title, href }));
}

function mergeRows(curated, href) {
  const seen = new Set(curated.map((r) => r.href).filter(Boolean));
  const out = [...curated];
  for (const l of [...(siteLinks[href] ?? []), ...childrenByPrefix(href)]) {
    if (!seen.has(l.href)) { seen.add(l.href); out.push(l); }
  }
  return out;
}

function resolve(href) {
  const seg = href.split("/").filter(Boolean);

  const nav = findNavNode(navItems, href);
  if (nav && nav.children && nav.children.length) {
    return { rows: mergeRows(nav.children.map((c) => ({ title: c.label, href: c.href })), href), kind: "nav" };
  }
  if (seg.length === 2 && seg[0] === "sb") {
    const c = sbCantos.find((c) => String(c.canto) === seg[1]);
    if (c) return { rows: mergeRows(c.chapters.map((ch) => ({ title: ch, href: `/sb/${ch.split(" ")[0].replace(/\./g, "/")}` })), href), kind: "list" };
  }
  if (seg.length === 3 && seg[0] === "seminars") {
    const l = seminars[seg[1]] && seminars[seg[1]][seg[2]];
    if (l) return { rows: mergeRows(l.map((x) => ({ title: x.title, href: x.href })), href), kind: "list" };
  }
  if (seg.length === 2 && seg[0] === "festivals") {
    const l = festivals[seg[1]];
    if (l) return { rows: mergeRows(l.map((x) => ({ title: x.title, href: x.href })), href), kind: "list" };
  }
  if (seg.length === 1 && books[seg[0]]) {
    const b = books[seg[0]];
    return { rows: mergeRows(b.sections.map((s) => ({ title: s.title, href: s.href })), href), description: b.description, kind: "list" };
  }
  if (seg.length === 2 && seg[0] === "shravana-utsav" && shravanaUtsav[seg[1]])
    return { rows: mergeRows(shravanaUtsav[seg[1]].map((x) => ({ title: x.title, href: x.href })), href), kind: "list" };
  if (seg.length === 2 && seg[0] === "madhura" && madhuraContent[seg[1]])
    return { rows: mergeRows(madhuraContent[seg[1]].map((x) => ({ title: x.title, href: x.href })), href), kind: "list" };
  if (seg.length === 2 && seg[0] === "km" && karthikMonth[seg[1]])
    return { rows: mergeRows(karthikMonth[seg[1]].map((x) => ({ title: x.title, href: x.href })), href), kind: "list" };
  if (href === "/gaudia-acharyas")
    return { rows: mergeRows(gaudiyaAcharyas.map((a) => ({ title: a.title, href: a.href })), href), kind: "list" };

  if (href === "/blog") {
    return {
      rows: ALL.filter((p) => sitePages[p].video || sitePages[p].article).map((p) => ({ title: sitePages[p].title, href: p })),
      kind: "index",
    };
  }

  if (sitePages[href]) {
    const p = sitePages[href];
    const rows = mergeRows([], href);
    // Listing pages suppress their article text (it's just the child list restated).
    return { video: p.video, article: rows.length === 0 ? p.article : undefined, rows, kind: "site" };
  }

  const kids = mergeRows([], href);
  if (kids.length) return { rows: kids, kind: "derived" };
  return { rows: [], kind: "unknown" };
}

const seeds = [];
(function collect(nodes) { for (const n of nodes) { seeds.push(n.href); if (n.children) collect(n.children); } })(navItems);

const visited = new Set();
const dead = [];
const queue = [...seeds];
while (queue.length) {
  const href = queue.shift();
  if (visited.has(href)) continue;
  visited.add(href);
  const r = resolve(href);
  for (const row of r.rows || []) if (row.href) queue.push(row.href);
  if (!(r.video || r.article || r.rows.length || r.description)) dead.push({ href, kind: r.kind });
}

console.log("reachable pages:", visited.size);
console.log("dead ends:", dead.length);
for (const d of dead) console.log("  ", d.kind.padEnd(8), d.href);

const unreachable = ALL.filter((p) => !visited.has(p));
console.log("\ncontent pages NOT reachable by tapping through:", unreachable.length);
for (const u of unreachable.slice(0, 40)) console.log("  ", u);
if (unreachable.length > 40) console.log("   ...and", unreachable.length - 40, "more");
