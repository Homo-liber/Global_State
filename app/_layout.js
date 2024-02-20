import { Tabs, router } from "expo-router";
import { COLORS } from "../styles/constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  EBGaramond_400Regular,
  EBGaramond_700Bold,
} from "@expo-google-fonts/eb-garamond";
import { Button, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    EBGaramond_400Regular,
    EBGaramond_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

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
        headerRight: () => {
          return (
            <View style={{ paddingRight: 12 }}>
              <Button
                onPress={() => {
                  router.push("login");
                }}
                color={COLORS.accent}
                title="Login"
              />
            </View>
          );
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
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
