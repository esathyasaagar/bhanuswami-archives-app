import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { navItems } from "@bhanuswami/content";

const SECTIONS = [
  { label: "Śrīmad-Bhāgavatam", href: "/sb", color: "#8b1a1a", icon: "📖" },
  { label: "Bhagavad-gītā", href: "/bg", color: "#1a4a8b", icon: "🕉️" },
  { label: "Seminars", href: "/seminars", color: "#2d6a2d", icon: "🎙️" },
  { label: "Podcasts", href: "/podcasts", color: "#6a2d6a", icon: "🎧" },
  { label: "Festivals", href: "/festivals", color: "#8b5a1a", icon: "🪔" },
  { label: "Glories of Ācāryas", href: "/gaudia-acharyas", color: "#1a6a6a", icon: "🙏" },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bhanu Swami Archives</Text>
        <Text style={styles.headerSubtitle}>His Holiness Bhanu Swami Maharaja</Text>
      </View>
      <View style={styles.grid}>
        {SECTIONS.map((section) => (
          <TouchableOpacity
            key={section.href}
            style={[styles.card, { backgroundColor: section.color }]}
            onPress={() => router.push(section.href as any)}
          >
            <Text style={styles.cardIcon}>{section.icon}</Text>
            <Text style={styles.cardLabel}>{section.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2" },
  header: { backgroundColor: "#1a0a00", padding: 24, paddingTop: 40 },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  headerSubtitle: { color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 4 },
  grid: { flexDirection: "row", flexWrap: "wrap", padding: 12, gap: 12 },
  card: {
    width: "47%",
    aspectRatio: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  cardIcon: { fontSize: 36, marginBottom: 8 },
  cardLabel: { color: "#fff", fontSize: 13, fontWeight: "600", textAlign: "center" },
});
