#!/usr/bin/env python3
"""
Regenerate apps/mobile/src/siteContent.ts and siteLinks.ts from the scraped
copy of the original WordPress site.

The mobile app bundles the ENTIRE archive offline. Every page the original
site published — title, YouTube video id, and full article/transcript text —
lives in siteContent.ts, and the child links each page had live in
siteLinks.ts. The app's catch-all route resolves any href against these.

Usage:
    python3 tools/extract-site-content.py [path-to-site-mirror]

Default mirror path: ../site-mirror/bhanuswamiarchives.net (relative to repo root)

Re-run this whenever the site mirror is refreshed, then rebuild the app.
"""
import re, os, sys, json, html as htmllib

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_MIRROR = os.path.join(os.path.dirname(REPO), "site-mirror", "bhanuswamiarchives.net")
MIRROR = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_MIRROR
OUT = os.path.join(REPO, "apps", "mobile", "src")

# Archive/pagination/taxonomy noise — not real content pages.
SKIP_PARTS = ("/feed/", "/comments/", "/page/", "/wp-content/", "/wp-json/",
              "/category/", "/tag/", "/author/", "/embed/")

# WordPress page-builder artifacts and duplicate homepages.
JUNK_PREFIXES = ("/elementor-", "/homenew", "/homepage", "/https/", "/bhanu-swami-archives")


def is_junk(path):
    return path == "/" or any(path.startswith(p) for p in JUNK_PREFIXES)


def clean_text(raw):
    """HTML fragment -> readable plain text, preserving paragraph/list breaks."""
    raw = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", raw, flags=re.S)
    # Drop the embedded YouTube figure — the video is surfaced separately.
    raw = re.sub(r"<figure[^>]*wp-block-embed[^>]*>.*?</figure>", "", raw, flags=re.S)
    raw = re.sub(r"<h[1-6][^>]*>", "\n\n", raw)
    raw = re.sub(r"</h[1-6]>", "\n\n", raw)
    raw = re.sub(r"</p>", "\n\n", raw)
    raw = re.sub(r"<br\s*/?>", "\n", raw)
    raw = re.sub(r"<li[^>]*>", "\n• ", raw)
    text = re.sub(r"<[^>]+>", "", raw)
    text = htmllib.unescape(text).replace("\xa0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def normalize_link(link, page_dir):
    """Resolve any href found on a page into a canonical site path.

    The site links to the same content three different ways depending on when
    the post was published: absolute (/sb/1/10/3/), relative to the page
    (../../../sb-1-11-3/index.html), and same-dir (18-19.html). All three must
    collapse to one canonical path or content silently goes missing.
    """
    if not link or link.startswith(("#", "mailto:", "tel:", "javascript:")):
        return None
    link = re.sub(r"^https?://(www\.)?bhanuswamiarchives\.net", "", link)
    if link.startswith("http"):
        return None  # genuinely external
    if any(p in link for p in ("/wp-content/", "/wp-json/", "/feed", "#")):
        return None
    if link.startswith("/"):
        path = link
    else:
        path = os.path.normpath(os.path.join(page_dir, link))
        if not path.startswith("/"):
            path = "/" + path
    path = re.sub(r"/index\.html$", "", path)
    path = re.sub(r"\.html$", "", path)
    path = "/" + path.strip("/")
    return path if path != "/" else None


def main():
    if not os.path.isdir(MIRROR):
        sys.exit(f"Site mirror not found: {MIRROR}")
    os.chdir(MIRROR)

    pages, links_map = {}, {}

    for dirpath, _dirnames, filenames in os.walk("."):
        if "index.html" not in filenames:
            continue
        rel = dirpath[1:] or "/"                     # './sb/1/10' -> '/sb/1/10'
        if any(p in rel + "/" for p in SKIP_PARTS):
            continue

        try:
            doc = open(os.path.join(dirpath, "index.html"), errors="ignore").read()
        except OSError:
            continue

        tm = re.search(r"<title>(.*?)</title>", doc, re.S)
        title = (
            htmllib.unescape(tm.group(1))
            .replace("– Bhanu Swami Archives", "")
            .replace("&#8211; Bhanu Swami Archives", "")
            .strip(" –|")
            if tm else rel.strip("/").split("/")[-1]
        )

        vm = re.search(r"youtube\.com/embed/([A-Za-z0-9_-]+)", doc)
        video = vm.group(1) if vm else None

        cm = re.search(r'<div class="entry-content[^>]*>(.*?)<footer', doc, re.S)
        body_html = cm.group(1) if cm else ""
        article = clean_text(body_html) if body_html else ""

        found, seen = [], set()
        for href, label in re.findall(r'<a\s+href="([^"]+)"[^>]*>(.*?)</a>', body_html, re.S):
            lbl = clean_text(label)
            if not lbl:
                continue
            norm = normalize_link(href, rel)
            if not norm or norm == rel or norm in seen:
                continue
            seen.add(norm)
            found.append({"title": lbl, "href": norm})

        pages[rel] = {"title": title, "video": video, "article": article}
        if found:
            links_map[rel] = found

    print(f"pages extracted:        {len(pages)}")
    print(f"  with video:           {sum(1 for p in pages.values() if p['video'])}")
    print(f"  with article text:    {sum(1 for p in pages.values() if p['article'])}")
    print(f"  with child links:     {len(links_map)}")

    def esc(s):
        return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

    with open(os.path.join(OUT, "siteContent.ts"), "w") as f:
        f.write("// GENERATED by tools/extract-site-content.py — do not edit by hand.\n")
        f.write("// Complete offline copy of the original site: every page, keyed by path.\n")
        f.write("export type SitePage = { title: string; video?: string; article?: string };\n\n")
        f.write("export const sitePages: Record<string, SitePage> = {\n")
        n = 0
        for path, p in sorted(pages.items()):
            if is_junk(path):
                continue
            parts = [f"title: {json.dumps(p['title'] or path.strip('/').split('/')[-1])}"]
            if p["video"]:
                parts.append(f"video: {json.dumps(p['video'])}")
            if p["article"]:
                parts.append(f"article: `{esc(p['article'])}`")
            f.write(f"  {json.dumps(path)}: {{ {', '.join(parts)} }},\n")
            n += 1
        f.write("};\n")
    print(f"wrote siteContent.ts:   {n} pages")

    with open(os.path.join(OUT, "siteLinks.ts"), "w") as f:
        f.write("// GENERATED by tools/extract-site-content.py — do not edit by hand.\n")
        f.write("// Child links found inside each page's content on the original site.\n")
        f.write("export const siteLinks: Record<string, { title: string; href: string }[]> = {\n")
        m = 0
        for path, items in sorted(links_map.items()):
            if is_junk(path):
                continue
            kept = [i for i in items if i["href"] in pages and not is_junk(i["href"])]
            if not kept:
                continue
            f.write(f"  {json.dumps(path)}: [\n")
            for i in kept:
                f.write(f"    {{ title: {json.dumps(i['title'])}, href: {json.dumps(i['href'])} }},\n")
            f.write("  ],\n")
            m += 1
        f.write("};\n")
    print(f"wrote siteLinks.ts:     {m} pages with children")


if __name__ == "__main__":
    main()
