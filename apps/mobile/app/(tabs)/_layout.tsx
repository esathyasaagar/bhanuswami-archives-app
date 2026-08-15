import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5c1a1a",
        tabBarInactiveTintColor: "#9a8f80",
        tabBarStyle: { backgroundColor: "#fff", borderTopColor: "#e6ddcf" },
        headerStyle: { backgroundColor: "#5c1a1a" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "800" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // The hero already names the archive — a "Home" bar above it is
          // redundant and eats vertical space.
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="search" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="podcasts"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ color }) => <Ionicons name="headset" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scriptures"
        options={{
          title: "Scriptures",
          tabBarIcon: ({ color }) => <Ionicons name="book" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="seminars"
        options={{
          title: "Seminars",
          tabBarIcon: ({ color }) => <Ionicons name="mic" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
