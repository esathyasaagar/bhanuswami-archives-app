import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { navItems } from "../../src/content";
import { colors } from "../../src/theme";

const scriptures = navItems.filter((n) => n.href === "/sb" || n.href === "/bg");

export default function ScripturesScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {scriptures.map((scripture) => (
        <View key={scripture.href} style={styles.section}>
          <Text style={styles.sectionTitle}>{scripture.label}</Text>
          <View style={styles.card}>
            {scripture.children?.map((child, i, arr) => (
              <TouchableOpacity
                key={child.href}
                style={[styles.item, i < arr.length - 1 && styles.itemBorder]}
                onPress={() => router.push(child.href as any)}
              >
                <Text style={styles.itemText}>{child.label}</Text>
                <Text style={styles.arrow}>›</Text>
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
  section: { marginBottom: 22 },
  sectionTitle: { fontSize: 18, fontWeight: "800", color: colors.maroon, marginBottom: 10 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  item: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 13, paddingHorizontal: 14 },
  itemBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  itemText: { fontSize: 14, color: colors.foreground, flex: 1, paddingRight: 10 },
  arrow: { fontSize: 18, color: colors.gold },
});
