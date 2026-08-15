# Bhanu Swami Archives — Working Notes

Context for picking this up in a fresh session. Written 2026-08-12.

## What this is

A **hybrid app** — one Expo/React Native codebase in `apps/mobile` that runs as
an Android app, an iOS app, and a web app. It's an offline archive of HH Bhanu
Swami Maharaja's lectures, built from a scrape of the original WordPress site.

There is also `apps/web` (a separate Next.js site, the original books-library
redesign). **The APK does not come from `apps/web`** — all mobile work happens
in `apps/mobile`. `apps/web` is not currently the focus.

- Branch: `hybrid` (pushed, in sync with `origin/hybrid`)
- Repo: `github.com/esathyasaagar/bhanuswami-archives-app`

## Architecture — read this before changing content behaviour

The app bundles the **entire original site offline**. No page ever links out to
bhanuswamiarchives.net (this was an explicit requirement — the user rejected an
earlier "View on website" button approach).

| File | Role |
|---|---|
| `apps/mobile/src/siteContent.ts` | **Generated, ~10 MB.** All 541 pages: title, YouTube video id, full article/transcript text. |
| `apps/mobile/src/siteLinks.ts` | **Generated.** Child links each page had on the original site. |
| `apps/mobile/src/content.ts` | **Hand-maintained.** Nav tree + curated lists that carry thumbnails/descriptions/ordering for the nice browse UI. |
| `apps/mobile/app/[...path].tsx` | The catch-all resolver. Everything below flows through here. |

### How `resolve()` works (in `app/[...path].tsx`)

Ordered branches: nav tree → SB cantos → seminars → festivals → books →
special events → ācāryas → `/blog` index → **universal fallback** → derived.

Three rules make coverage complete. Removing any one reintroduces bugs that
took many rounds to find:

1. **Universal fallback** — any href not matched by a curated branch resolves
   against `sitePages`. Before this existed, only hand-scraped URL patterns
   worked and everything else showed "not yet available".
2. **`childrenByPrefix()`** — a page lists every page beneath it by path, and
   *synthesizes intermediate levels that have no page of their own* (e.g.
   `/sb/3/22` exists only as a parent of `/sb/3/22/12`). This is why 0 pages
   are unreachable.
3. **Article suppression** — if a page has navigable children, its `article`
   text is dropped. The original WordPress landing pages restate their child
   list as plain unlinked text; showing both rendered as duplicated junk under
   every list page.

## Commands

```bash
# Regenerate the offline content DB from the site mirror
python3 tools/extract-site-content.py
# (mirror lives at ../site-mirror/bhanuswamiarchives.net, 574 index.html files)

# Coverage audit — THE regression check for "pages are empty"
cd apps/mobile
npx esbuild src/content.ts     --bundle --format=cjs --platform=node --outfile=/tmp/c.js
npx esbuild src/siteContent.ts --bundle --format=cjs --platform=node --outfile=/tmp/sc.js
npx esbuild src/siteLinks.ts   --bundle --format=cjs --platform=node --outfile=/tmp/sl.js
node ../../tools/audit-coverage.js
# healthy: 567 reachable, 1 dead end (/telugu-transcripts), 0 unreachable

npx tsc --noEmit          # always run before building

# Build the APK (~2 min once NDK/SDK are warm)
cd apps/mobile
npx expo prebuild --platform android --clean
cd android
echo "sdk.dir=$HOME/Library/Android/sdk" > local.properties
./gradlew assembleRelease --no-daemon
# → android/app/build/outputs/apk/release/app-release.apk  (~95 MB)
```

Web preview: `.claude/launch.json` has a `mobile-web` entry
(`npx expo start --web`). The web preview is the fastest way to verify content
changes — but see the caveat below about it not catching native crashes.

## Traps — all of these actually bit us

- **Do NOT use Expo DOM Components (`"use dom"`) for the video player.** An
  inline YouTube iframe via DOM Components worked perfectly in web preview and
  **crashed every video page on Android**. It needs a native WebView bridge
  that `expo prebuild` + `gradlew` doesn't wire up. Video is now a thumbnail
  that opens YouTube via `Linking` (`src/YouTubeEmbed.tsx`). If revisiting
  inline playback, it must be tested on a real device/emulator, not web.
- **Do NOT install `react-native-webview`.** Installing it shifted a pnpm peer
  hash for the `expo` package itself and blanked the whole app (Metro couldn't
  resolve `expo`). Required `rm -rf node_modules && pnpm install` to recover.
  `expo-image` was safe (first-party) — verify `node_modules/expo` symlink hash
  is unchanged after adding any native dep.
- **Web preview passing ≠ native working.** Both the crash above and image
  loading behaved differently. Native-only issues need a real build.
- **The user's phone caching stale APKs caused several false "still broken"
  reports.** Always give the exact byte size and tell them to *uninstall first*,
  not reinstall over.
- **Use `expo-image`, not RN's core `Image`,** for remote thumbnails — core
  `Image` has no retry and no disk cache, so first-launch cold starts showed
  blank covers. `app/_layout.tsx` also prefetches home covers on startup.
- **Don't regex-edit the generated `.ts` data files.** A dedup regex once
  corrupted `articles.ts` mid-template-literal. Always regenerate from source.

## State / known gaps

- Coverage: 567 reachable pages, **0 unreachable**, 1 dead end —
  `/telugu-transcripts`, which is genuinely empty on the original site too.
- `/sb/1/16` and `/festivals/2025/gundicha-marjan` were removed from
  `content.ts` — they 404 on the live site.
- The APK is **debug-signed**. Fine for sideloading; needs a real keystore
  (or EAS Build) before any Play Store submission.
- The `origin` remote URL has a GitHub PAT embedded in it. Worth rotating and
  switching to SSH or a credential helper.
- iOS has never been built — no Xcode on this machine (`attach` to the iOS
  simulator fails; needs full Xcode + `xcode-select`). The code is
  platform-agnostic but iOS is unverified.

## User preferences

- **Always ask before `git push`.**
- Wants everything served in-app; no redirects to the original website.
- Doesn't want an Android emulator launched on their machine.
