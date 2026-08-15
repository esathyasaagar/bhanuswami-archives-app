import { ScrollView, View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLLECTION, PORTRAIT, colors, type Section } from "../../src/theme";

function BookCover({ item, width }: { item: Section; width: number }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.coverWrap, { width }]}
      onPress={() => router.push(item.href as any)}
    >
      <View style={[styles.cover, { backgroundColor: item.color }]}>
        <Image
          source={{ uri: item.image }}
          style={styles.coverImg}
          contentFit="cover"
          cachePolicy="disk"
          recyclingKey={item.image}
          transition={150}
        />
        <View style={[StyleSheet.absoluteFill, { backgroundColor: item.color, opacity: 0.32 }]} />
        <View style={styles.spine} />
        <View style={styles.coverTitleWrap}>
          <Text style={styles.coverTitle} numberOfLines={2}>{item.label}</Text>
        </View>
      </View>
      <Text style={styles.coverLabel} numberOfLines={1}>{item.label}</Text>
      <Text style={styles.coverSub} numberOfLines={1}>{item.sub}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width: screenW } = useWindowDimensions();
  const maxW = Math.min(screenW, 900);
  const cols = maxW >= 700 ? 4 : 2;
  const gap = 14;
  const horizontalPad = 16;
  const cardW = (maxW - horizontalPad * 2 - gap * (cols - 1)) / cols;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero — runs under the status bar, so the maroon reaches the top edge */}
      <View style={[styles.hero, { paddingTop: insets.top + 22 }]}>
        <View style={styles.heroRow}>
          <Image
            source={{ uri: PORTRAIT }}
            style={styles.heroImg}
            contentFit="cover"
            cachePolicy="disk"
            transition={150}
          />
          <View style={styles.heroText}>
            <Text style={styles.heroKicker}>HIS HOLINESS</Text>
            <Text style={styles.heroTitle}>Bhanu Swami Maharaja</Text>
            <Text style={styles.heroSub} numberOfLines={2}>
              Senior disciple of Śrīla Prabhupāda · Scholar of Vaiṣṇava philosophy
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.searchCta}
          activeOpacity={0.8}
          onPress={() => router.push("/search")}
          accessibilityRole="search"
          accessibilityLabel="Search all lectures and transcripts"
        >
          <Ionicons name="search" size={16} color="rgba(255,255,255,0.85)" />
          <Text style={styles.searchCtaText}>Search lectures & transcripts</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.grid, { paddingHorizontal: horizontalPad, gap }]}>
        {COLLECTION.map((item) => (
          <BookCover key={item.href} item={item} width={cardW} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { alignItems: "center", paddingBottom: 32 },

  hero: {
    width: "100%",
    backgroundColor: colors.maroon,
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  heroRow: { flexDirection: "row", alignItems: "center", gap: 16 },
  heroImg: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: colors.maroonDark,
  },
  heroText: { flex: 1 },
  heroKicker: { color: "rgba(255,255,255,0.6)", fontSize: 10, letterSpacing: 2, marginBottom: 2 },
  heroTitle: { color: "#fff", fontSize: 20, fontWeight: "800", marginBottom: 4 },
  heroSub: { color: "rgba(255,255,255,0.75)", fontSize: 12, lineHeight: 17 },

  searchCta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginTop: 16,
    backgroundColor: "rgba(255,255,255,0.13)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    borderRadius: 11,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  searchCtaText: { color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: "500" },

  grid: { width: "100%", maxWidth: 900, flexDirection: "row", flexWrap: "wrap", marginTop: 20 },
  coverWrap: { marginBottom: 6 },
  cover: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  coverImg: { ...StyleSheet.absoluteFillObject, width: "100%", height: "100%" },
  spine: { position: "absolute", left: 0, top: 0, bottom: 0, width: 6, backgroundColor: "rgba(0,0,0,0.22)" },
  coverTitleWrap: { padding: 10, backgroundColor: "rgba(0,0,0,0.35)" },
  coverTitle: { color: "#fff", fontWeight: "800", fontSize: 13 },
  coverLabel: { marginTop: 6, fontSize: 12, fontWeight: "600", color: colors.foreground },
  coverSub: { fontSize: 10, color: colors.muted, marginTop: 1 },
});
