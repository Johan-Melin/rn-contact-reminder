import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function AppTabs() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#0a7ea4", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name="home" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name="settings" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
