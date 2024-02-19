import { Tabs } from "expo-router";
import { COLORS } from "../styles/constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTitleStyle: {
          color: COLORS.grey,
        },
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        tabBarActiveTintColor: COLORS.accent,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home-outline" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: "Movies",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="movie-open-outline"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
