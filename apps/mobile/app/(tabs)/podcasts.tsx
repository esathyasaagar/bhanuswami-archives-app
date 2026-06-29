import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default function PodcastsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Podcasts</Text>
      <Text style={styles.subtitle}>Audio lectures by HH Bhanu Swami Maharaja</Text>
      {/* Audio player powered by expo-av — content loaded from @bhanuswami/content */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>🎧 Podcast episodes load here</Text>
        <Text style={styles.placeholderNote}>Background playback supported</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#1a0a00" },
  subtitle: { color: "#666", marginTop: 4, marginBottom: 20 },
  placeholder: { flex: 1, alignItems: "center", justifyContent: "center" },
  placeholderText: { fontSize: 18, color: "#888" },
  placeholderNote: { color: "#aaa", marginTop: 8 },
});
