import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { navItems } from "../../src/content";
import { colors } from "../../src/theme";

const seminarNav = navItems.find((n) => n.href === "/seminars");

export default function SeminarsScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {seminarNav?.children?.map((year) => (
        <View key={year.href} style={styles.section}>
          <Text style={styles.year}>{year.label}</Text>
          <View style={styles.card}>
            {year.children?.length ? (
              year.children.map((seminar, i, arr) => (
                <TouchableOpacity
                  key={seminar.href}
                  style={[styles.item, i < arr.length - 1 && styles.itemBorder]}
                  onPress={() => router.push(seminar.href as any)}
                >
                  <Text style={styles.itemText}>{seminar.label}</Text>
                  <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
              ))
            ) : (
              <TouchableOpacity style={styles.item} onPress={() => router.push(year.href as any)}>
                <Text style={styles.itemText}>View {year.label} seminars</Text>
                <Text style={styles.arrow}>›</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, maxWidth: 900, width: "100%", alignSelf: "center" },
  section: { marginBottom: 20 },
  year: { fontSize: 17, fontWeight: "800", color: colors.maroon, marginBottom: 8 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  item: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12, paddingHorizontal: 14 },
  itemBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  itemText: { fontSize: 14, color: colors.foreground, flex: 1, paddingRight: 10 },
  arrow: { fontSize: 18, color: colors.gold },
});
