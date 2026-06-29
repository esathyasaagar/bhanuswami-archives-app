import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { navItems } from "../../src/content";

const scriptures = navItems.filter(n => n.href === "/sb" || n.href === "/bg");

export default function ScripturesScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {scriptures.map((scripture) => (
        <View key={scripture.href} style={styles.section}>
          <Text style={styles.sectionTitle}>{scripture.label}</Text>
          {scripture.children?.map((child) => (
            <TouchableOpacity key={child.href} style={styles.item} onPress={() => router.push(child.href as any)}>
              <Text style={styles.itemText}>{child.label}</Text>
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
  section: { marginTop: 20, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#8b1a1a", marginBottom: 8 },
  item: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#e8e0d4" },
  itemText: { fontSize: 15, color: "#333" },
  arrow: { fontSize: 18, color: "#aaa" },
});
