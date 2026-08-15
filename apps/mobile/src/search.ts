import { sitePages } from "./siteContent";

export type SearchHit = {
  href: string;
  title: string;
  snippet: string;
  /** Offsets of the match inside `snippet`, for highlighting. */
  matchStart: number;
  matchEnd: number;
  inTitle: boolean;
  hasVideo: boolean;
};

type IndexEntry = {
  href: string;
  title: string;
  /** Lowercased + diacritics stripped, so matching is cheap per keystroke. */
  titleKey: string;
  article: string;
  articleKey: string;
  hasVideo: boolean;
};

/**
 * The lowercase index is ~10 MB, so it's built once on first search rather
 * than at import time — that keeps app startup fast, and someone who never
 * searches never pays for it.
 */
let INDEX: IndexEntry[] | null = null;

/**
 * Lowercase + strip diacritics, so "Krsna" finds "Kṛṣṇa" and "Bhagavatam"
 * finds "Bhāgavatam". Folding is done once when the index is built — doing it
 * per keystroke would mean normalizing ~10 MB on every character typed.
 */
function fold(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/**
 * Fold a string while recording, for each folded character, the index it came
 * from in the original. Needed because folding shifts positions (one source
 * character can fold to zero, one, or several), so an offset found in the
 * folded text does not point at the same place in the original — which
 * otherwise puts the highlight on the wrong words.
 *
 * Only run for pages that actually matched, so the cost stays bounded.
 */
function foldWithMap(s: string): { folded: string; map: number[] } {
  const out: string[] = [];
  const map: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    // Fast path: plain ASCII is the overwhelming majority of the text and
    // needs no Unicode normalization.
    if (code < 128) {
      out.push(code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : s[i]);
      map.push(i);
      continue;
    }
    const decomposed = s[i].normalize("NFD");
    for (let k = 0; k < decomposed.length; k++) {
      const c = decomposed.charCodeAt(k);
      if (c >= 0x300 && c <= 0x36f) continue; // drop combining marks
      out.push(decomposed[k].toLowerCase());
      map.push(i);
    }
  }
  return { folded: out.join(""), map };
}

function getIndex(): IndexEntry[] {
  if (INDEX) return INDEX;
  INDEX = Object.entries(sitePages).map(([href, page]) => {
    const article = page.article ?? "";
    return {
      href,
      title: page.title,
      titleKey: fold(page.title),
      article,
      articleKey: fold(article),
      hasVideo: !!page.video,
    };
  });
  return INDEX;
}

const SNIPPET_BEFORE = 60;
const SNIPPET_AFTER = 160;

function buildSnippet(article: string, at: number, len: number) {
  let start = Math.max(0, at - SNIPPET_BEFORE);
  let end = Math.min(article.length, at + len + SNIPPET_AFTER);
  // Don't slice mid-word.
  if (start > 0) {
    const sp = article.indexOf(" ", start);
    if (sp !== -1 && sp < at) start = sp + 1;
  }
  if (end < article.length) {
    const sp = article.lastIndexOf(" ", end);
    if (sp > at + len) end = sp;
  }

  // Collapse whitespace per segment. Collapsing the whole slice at once would
  // change its length and drag the highlight off the matched words, since the
  // transcripts are full of paragraph breaks.
  const squash = (s: string) => s.replace(/\s+/g, " ");
  const lead = start > 0 ? "…" : "";
  const before = squash(article.slice(start, at)).replace(/^ /, "");
  const match = squash(article.slice(at, at + len));
  const after = squash(article.slice(at + len, end)).replace(/ $/, "");
  const tail = end < article.length ? "…" : "";

  return {
    snippet: lead + before + match + after + tail,
    matchStart: lead.length + before.length,
    matchEnd: lead.length + before.length + match.length,
  };
}

export function search(rawQuery: string, limit = 80): SearchHit[] {
  const q = fold(rawQuery.trim());
  if (q.length < 2) return [];

  // Pass 1 — cheap scan over the prefolded index to find which pages match.
  const titleMatches: IndexEntry[] = [];
  const bodyMatches: IndexEntry[] = [];
  for (const e of getIndex()) {
    if (e.titleKey.includes(q)) titleMatches.push(e);
    else if (e.articleKey.includes(q)) bodyMatches.push(e);
    if (titleMatches.length + bodyMatches.length >= limit) break;
  }

  // Pass 2 — build snippets only for the pages we're actually returning.
  // Title matches come first; they're usually what people mean.
  return [...titleMatches, ...bodyMatches].slice(0, limit).map((e) => {
    let snippet = "";
    let matchStart = -1;
    let matchEnd = -1;

    if (e.articleKey.includes(q)) {
      // Re-fold this one article with a position map so the highlight lands on
      // the real characters instead of a drifted offset.
      const { folded, map } = foldWithMap(e.article);
      const at = folded.indexOf(q);
      if (at !== -1) {
        const origStart = map[at];
        const origEnd = at + q.length < map.length ? map[at + q.length] : e.article.length;
        ({ snippet, matchStart, matchEnd } = buildSnippet(e.article, origStart, origEnd - origStart));
      }
    }
    if (!snippet) {
      snippet = e.article.slice(0, 180).replace(/\s+/g, " ").trim();
    }

    return {
      href: e.href,
      title: e.title,
      snippet,
      matchStart,
      matchEnd,
      inTitle: e.titleKey.includes(q),
      hasVideo: e.hasVideo,
    };
  });
}

/** Total pages available to search — shown as a hint in the empty state. */
export function searchableCount(): number {
  return Object.keys(sitePages).length;
}
