import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
import { colors } from "../src/theme";

type NavNode = { label: string; href: string; children?: NavNode[] };
type Row = { title: string; href?: string; description?: string };

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

function resolve(href: string): { title: string; rows: Row[]; description?: string } {
  // 1. Nav tree — section landing pages with sub-links
  const navNode = findNavNode(navItems as NavNode[], href);
  if (navNode?.children?.length) {
    return { title: navNode.label, rows: navNode.children.map((c) => ({ title: c.label, href: c.href })) };
  }

  const segments = href.split("/").filter(Boolean);

  // 2. Śrīmad-Bhāgavatam canto detail: /sb/<n>
  if (segments[0] === "sb" && segments[1]) {
    const canto = sbCantos.find((c) => String(c.canto) === segments[1]);
    if (canto) {
      return {
        title: `Canto ${canto.canto} – ${canto.title}`,
        rows: canto.chapters.map((ch) => ({ title: ch })),
      };
    }
  }

  // 3. Seminars: /seminars/<year>/<location>
  if (segments[0] === "seminars" && segments[1] && segments[2]) {
    const list = seminars[segments[1]]?.[segments[2]];
    if (list) {
      const locName = segments[2].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return { title: `${locName} – ${segments[1]}`, rows: list.map((l) => ({ title: l.title, description: l.description })) };
    }
  }

  // 4. Festivals: /festivals/<year>
  if (segments[0] === "festivals" && segments[1]) {
    const list = festivals[segments[1]];
    if (list) return { title: `Festivals – ${segments[1]}`, rows: list.map((l) => ({ title: l.title, description: l.description })) };
  }

  // 5. Books & Texts: /nod, /hnc, /brhad, /vrajariti
  if (segments.length === 1 && (books as any)[segments[0]]) {
    const b = (books as any)[segments[0]];
    return { title: b.title, description: `${b.author} — ${b.description}`, rows: b.sections.map((s: Row) => ({ title: s.title })) };
  }

  // 6. Special Events sub-sections
  if (segments[0] === "shravana-utsav" && segments[1] && shravanaUtsav[segments[1]]) {
    return { title: `Śravaṇa Utsav ${segments[1]}`, rows: shravanaUtsav[segments[1]].map((l: Row) => ({ title: l.title })) };
  }
  if (segments[0] === "madhura" && segments[1] && madhuraContent[segments[1]]) {
    return { title: `Madhura Mahotsava ${segments[1]}`, rows: madhuraContent[segments[1]].map((l: Row) => ({ title: l.title })) };
  }
  if (segments[0] === "km" && segments[1] && karthikMonth[segments[1]]) {
    return { title: `Kārttika Month ${segments[1]}`, rows: karthikMonth[segments[1]].map((l: Row) => ({ title: l.title })) };
  }

  // 7. Gauḍīya Ācāryas
  if (href === "/gaudia-acharyas") {
    return { title: "Gauḍīya Ācāryas", rows: gaudiyaAcharyas.map((a) => ({ title: a.title, description: a.description })) };
  }

  // 8. Fallback — content not yet organized
  const leafTitle = segments.length ? segments[segments.length - 1].replace(/-/g, " ") : "Page";
  return { title: leafTitle, rows: [], description: "Content for this page is being organized and will be available soon." };
}

export default function CatchAllScreen() {
  const { path } = useLocalSearchParams<{ path: string | string[] }>();
  const router = useRouter();
  const segments = Array.isArray(path) ? path : path ? [path] : [];
  const href = "/" + segments.join("/");
  const { title, rows, description } = resolve(href);

  return (
    <>
      <Stack.Screen options={{ title }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {rows.length > 0 && (
          <View style={styles.card}>
            {rows.map((row, i) => (
              <TouchableOpacity
                key={row.href ?? `${row.title}-${i}`}
                style={[styles.item, i < rows.length - 1 && styles.itemBorder]}
                disabled={!row.href}
                onPress={() => row.href && router.push(row.href as any)}
              >
                <View style={styles.itemBody}>
                  <Text style={styles.itemText}>{row.title}</Text>
                  {row.description && <Text style={styles.itemDesc}>{row.description}</Text>}
                </View>
                {row.href && <Text style={styles.arrow}>›</Text>}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, maxWidth: 900, width: "100%", alignSelf: "center" },
  title: { fontSize: 20, fontWeight: "800", color: colors.maroon, marginBottom: 8 },
  description: { fontSize: 13, color: colors.muted, lineHeight: 19, marginBottom: 16 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 13, paddingHorizontal: 14 },
  itemBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  itemBody: { flex: 1, paddingRight: 10 },
  itemText: { fontSize: 14, color: colors.foreground },
  itemDesc: { fontSize: 11, color: colors.muted, marginTop: 3, lineHeight: 15 },
  arrow: { fontSize: 18, color: colors.gold },
});
