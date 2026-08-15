#!/usr/bin/env python3
"""
Sync the local site mirror against the live site's sitemap.

The mirror goes stale as new lectures are published. This fetches the
authoritative page list from wp-sitemap.xml and downloads anything missing
into the mirror, so tools/extract-site-content.py picks it up.

Usage:
    python3 tools/sync-mirror.py            # fetch missing pages
    python3 tools/sync-mirror.py --dry-run  # just report what's missing
"""
import os, re, sys, time, urllib.request

SITE = "https://bhanuswamiarchives.net"
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MIRROR = os.path.join(os.path.dirname(REPO), "site-mirror", "bhanuswamiarchives.net")
DRY = "--dry-run" in sys.argv

# Page-builder artifacts / duplicate homepages — never real content.
JUNK = ("/elementor-", "/homenew", "/homepage", "/https/", "/bhanu-swami-archives")

UA = {"User-Agent": "Mozilla/5.0 (archive-sync; offline app content sync)"}


def fetch(url, timeout=30):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", errors="ignore")


def sitemap_paths():
    index = fetch(f"{SITE}/wp-sitemap.xml")
    subs = re.findall(r"<loc>(.*?)</loc>", index)
    paths = set()
    for sub in subs:
        if "users" in sub or "taxonomies" in sub:
            continue
        for loc in re.findall(r"<loc>(.*?)</loc>", fetch(sub)):
            p = "/" + loc.replace(SITE, "").strip("/")
            if p != "/" and not any(p.startswith(j) for j in JUNK):
                paths.add(p)
    return sorted(paths)


def main():
    if not os.path.isdir(MIRROR):
        sys.exit(f"Mirror not found: {MIRROR}")

    live = sitemap_paths()
    missing = [p for p in live if not os.path.exists(os.path.join(MIRROR, p.strip("/"), "index.html"))]

    print(f"live pages (sitemap): {len(live)}")
    print(f"missing locally:      {len(missing)}")
    for p in missing:
        print("  ", p)
    if DRY or not missing:
        return

    print("\nfetching...")
    ok = fail = 0
    for i, p in enumerate(missing, 1):
        dest_dir = os.path.join(MIRROR, p.strip("/"))
        try:
            html = fetch(f"{SITE}{p}/")
            os.makedirs(dest_dir, exist_ok=True)
            with open(os.path.join(dest_dir, "index.html"), "w") as f:
                f.write(html)
            ok += 1
            print(f"  [{i}/{len(missing)}] ok   {p}")
        except Exception as e:
            fail += 1
            print(f"  [{i}/{len(missing)}] FAIL {p}  ({e})")
        time.sleep(0.4)  # be polite to the server

    print(f"\nfetched {ok}, failed {fail}")
    print("Now run: python3 tools/extract-site-content.py")


if __name__ == "__main__":
    main()
