import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8b1a1a",
        tabBarStyle: { backgroundColor: "#fff" },
        headerStyle: { backgroundColor: "#1a0a00" },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
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
