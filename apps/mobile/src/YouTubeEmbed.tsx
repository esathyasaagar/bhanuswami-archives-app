import { Image, Linking, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "./theme";

export default function YouTubeEmbed({ videoId, title }: { videoId: string; title?: string }) {
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <TouchableOpacity
      style={styles.wrap}
      activeOpacity={0.85}
      onPress={() => Linking.openURL(watchUrl)}
      accessibilityRole="link"
      accessibilityLabel={title ? `Watch ${title} on YouTube` : "Watch on YouTube"}
    >
      <Image source={{ uri: thumbnail }} style={styles.thumb} resizeMode="cover" />
      <View style={styles.overlay} />
      <View style={styles.playButton}>
        <View style={styles.playTriangle} />
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>▶ Watch on YouTube</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 14,
    backgroundColor: colors.border,
  },
  thumb: { ...StyleSheet.absoluteFillObject, width: "100%", height: "100%" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.15)" },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 64,
    height: 64,
    marginTop: -32,
    marginLeft: -32,
    borderRadius: 32,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  playTriangle: {
    width: 0,
    height: 0,
    marginLeft: 5,
    borderTopWidth: 12,
    borderBottomWidth: 12,
    borderLeftWidth: 20,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "#fff",
  },
  badge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },
});
