import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { COLLECTION } from "../src/theme";

export default function RootLayout() {
  useEffect(() => {
    // Warm the disk cache for the home screen's covers so they're ready by the
    // time the user sees them — avoids the "blank on first launch" race where
    // the network stack isn't warmed up yet. The portraits are bundled assets
    // and need no prefetching.
    Image.prefetch(COLLECTION.map((c) => c.image), { cachePolicy: "disk" });
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#5c1a1a" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#f7f3ec" },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
