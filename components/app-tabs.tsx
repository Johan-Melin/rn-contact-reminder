import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

export default function AppTabs() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#0a7ea4", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Reminders",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="bell-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="card-account-details-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="history" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
