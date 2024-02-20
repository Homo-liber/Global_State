import { Stack } from "expo-router";
import { COLORS } from "../../styles/constants";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTitleStyle: {
          color: COLORS.grey,
        },
        headerBackTitleVisible: false,
        headerTintColor: COLORS.grey,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="modal" options={{ title: "Login" }} />
    </Stack>
  );
}
