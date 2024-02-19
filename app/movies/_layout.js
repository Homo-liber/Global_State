import { Stack } from "expo-router";
import { COLORS } from "../../styles/constants";

export default function MoviesLayout() {
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
      <Stack.Screen name="index" options={{ title: "Movies" }} />
      <Stack.Screen name="[id]" options={{ title: "Details" }} />
    </Stack>
  );
}
