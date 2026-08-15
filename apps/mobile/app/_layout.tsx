import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { COLLECTION, PORTRAIT } from "../src/theme";

export default function RootLayout() {
  useEffect(() => {
    // Warm the disk cache for the home screen's thumbnails so they're ready
    // by the time the user sees it — avoids the "blank on first launch"
    // race where the network stack isn't warmed up yet.
    Image.prefetch([PORTRAIT, ...COLLECTION.map((c) => c.image)], { cachePolicy: "disk" });
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
