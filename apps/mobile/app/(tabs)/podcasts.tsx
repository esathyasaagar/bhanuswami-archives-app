import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { podcasts } from "../../src/content";
import { colors, IMG_BASE } from "../../src/theme";

const THUMB = `${IMG_BASE}/2025/11/Untitled-design.jpg`;

export default function PodcastsScreen() {
  const router = useRouter();
  const years = Object.keys(podcasts).sort((a, b) => Number(b) - Number(a));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>Audio lectures by HH Bhanu Swami Maharaja · background playback supported</Text>
      {years.map((year) => (
        <View key={year} style={styles.section}>
          <Text style={styles.year}>{year}</Text>
          <View style={styles.card}>
            {podcasts[year].map((ep, i, arr) => (
              <TouchableOpacity
                key={ep.href}
                style={[styles.item, i < arr.length - 1 && styles.itemBorder]}
                onPress={() => router.push(ep.href as any)}
              >
                <Image source={{ uri: ep.image ?? THUMB }} style={styles.thumb} />
                <View style={styles.itemBody}>
                  <Text style={styles.itemText}>{ep.title}</Text>
                  <Text style={styles.date}>{ep.date}</Text>
                </View>
                <Text style={styles.play}>▶</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, maxWidth: 900, width: "100%", alignSelf: "center" },
  subtitle: { color: colors.muted, fontSize: 13, marginBottom: 18, lineHeight: 18 },
  section: { marginBottom: 20 },
  year: { fontSize: 17, fontWeight: "800", color: colors.maroon, marginBottom: 8 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 10, paddingHorizontal: 12, gap: 12 },
  itemBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  thumb: { width: 48, height: 48, borderRadius: 8, backgroundColor: colors.border },
  itemBody: { flex: 1 },
  itemText: { fontSize: 14, color: colors.foreground, fontWeight: "600" },
  date: { fontSize: 11, color: colors.muted, marginTop: 2 },
  play: { fontSize: 15, color: colors.maroon },
});
