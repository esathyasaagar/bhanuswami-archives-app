import { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { search, searchableCount, type SearchHit } from "../../src/search";
import { colors } from "../../src/theme";

const SUGGESTIONS = ["Holy Name", "Bhakti", "Kṛṣṇa", "Guru", "Prema", "Karma", "Vṛndāvana"];

function Snippet({ hit }: { hit: SearchHit }) {
  if (hit.matchStart < 0 || hit.matchEnd <= hit.matchStart) {
    return (
      <Text style={styles.snippet} numberOfLines={3}>
        {hit.snippet}
      </Text>
    );
  }
  return (
    <Text style={styles.snippet} numberOfLines={3}>
      {hit.snippet.slice(0, hit.matchStart)}
      <Text style={styles.mark}>{hit.snippet.slice(hit.matchStart, hit.matchEnd)}</Text>
      {hit.snippet.slice(hit.matchEnd)}
    </Text>
  );
}

export default function SearchScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<TextInput>(null);

  // Debounce so we're not scanning the whole archive on every keystroke.
  useEffect(() => {
    if (query.trim().length >= 2) setBusy(true);
    const t = setTimeout(() => {
      setDebounced(query);
      setBusy(false);
    }, 220);
    return () => clearTimeout(t);
  }, [query]);

  const results = useMemo(() => search(debounced), [debounced]);
  const trimmed = debounced.trim();
  const showEmptyState = trimmed.length < 2;
  const noResults = !showEmptyState && !busy && results.length === 0;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={colors.muted} />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search all lectures and transcripts"
          placeholderTextColor={colors.muted}
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          onSubmitEditing={Keyboard.dismiss}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")} hitSlop={10}>
            <Ionicons name="close-circle" size={18} color={colors.muted} />
          </TouchableOpacity>
        )}
      </View>

      {!showEmptyState && (
        <Text style={styles.count}>
          {busy ? "Searching…" : `${results.length}${results.length === 80 ? "+" : ""} result${results.length === 1 ? "" : "s"}`}
        </Text>
      )}

      {showEmptyState ? (
        <View style={styles.empty}>
          <Ionicons name="search" size={40} color={colors.border} />
          <Text style={styles.emptyTitle}>Search the whole archive</Text>
          <Text style={styles.emptyText}>
            Looks inside every lecture title and full transcript across {searchableCount()} pages.
          </Text>
          <View style={styles.chips}>
            {SUGGESTIONS.map((s) => (
              <TouchableOpacity key={s} style={styles.chip} onPress={() => setQuery(s)}>
                <Text style={styles.chipText}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : busy ? (
        <View style={styles.empty}>
          <ActivityIndicator color={colors.maroon} />
        </View>
      ) : noResults ? (
        <View style={styles.empty}>
          <Ionicons name="document-text-outline" size={40} color={colors.border} />
          <Text style={styles.emptyTitle}>No matches for “{trimmed}”</Text>
          <Text style={styles.emptyText}>Try a shorter word, or a different spelling.</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(h) => h.href}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.list}
          initialNumToRender={12}
          windowSize={7}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.hit}
              activeOpacity={0.7}
              onPress={() => {
                Keyboard.dismiss();
                router.push(item.href as any);
              }}
            >
              <View style={styles.hitHead}>
                <Ionicons
                  name={item.hasVideo ? "play-circle" : "document-text-outline"}
                  size={16}
                  color={item.hasVideo ? colors.maroon : colors.gold}
                />
                <Text style={styles.hitTitle} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
              {!!item.snippet && <Snippet hit={item} />}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.card,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: { flex: 1, fontSize: 15, color: colors.foreground, padding: 0 },
  count: { fontSize: 12, color: colors.muted, paddingHorizontal: 18, paddingVertical: 8 },

  list: { paddingHorizontal: 16, paddingBottom: 28 },
  hit: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 13,
    marginBottom: 10,
  },
  hitHead: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  hitTitle: { flex: 1, fontSize: 14, fontWeight: "700", color: colors.foreground, lineHeight: 19 },
  snippet: { fontSize: 12.5, color: colors.muted, lineHeight: 19, marginTop: 7 },
  mark: { backgroundColor: "#f6e3b8", color: colors.foreground, fontWeight: "700" },

  empty: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 40, gap: 10 },
  emptyTitle: { fontSize: 16, fontWeight: "800", color: colors.foreground, textAlign: "center" },
  emptyText: { fontSize: 13, color: colors.muted, textAlign: "center", lineHeight: 19 },
  chips: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 8, marginTop: 8 },
  chip: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 7,
  },
  chipText: { fontSize: 13, color: colors.maroon, fontWeight: "600" },
});
