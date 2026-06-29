import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { navItems } from "@bhanuswami/content";

const seminarNav = navItems.find(n => n.href === "/seminars");

export default function SeminarsScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Seminars</Text>
      {seminarNav?.children?.map((year) => (
        <View key={year.href} style={styles.section}>
          <Text style={styles.year}>{year.label}</Text>
          {year.children?.map((seminar) => (
            <TouchableOpacity key={seminar.href} style={styles.item} onPress={() => router.push(seminar.href as any)}>
              <Text style={styles.itemText}>{seminar.label}</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2" },
  heading: { fontSize: 24, fontWeight: "bold", color: "#1a0a00", padding: 16 },
  section: { marginBottom: 16, paddingHorizontal: 16 },
  year: { fontSize: 16, fontWeight: "700", color: "#8b1a1a", marginBottom: 6 },
  item: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 11, borderBottomWidth: 1, borderBottomColor: "#e8e0d4" },
  itemText: { fontSize: 14, color: "#333" },
  arrow: { fontSize: 18, color: "#aaa" },
});
