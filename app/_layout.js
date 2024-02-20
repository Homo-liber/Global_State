import { Stack } from "expo-router";
import {
  useFonts,
  EBGaramond_400Regular,
  EBGaramond_700Bold,
} from "@expo-google-fonts/eb-garamond";

export default function MainStack() {
  const [fontsLoaded, fontError] = useFonts({
    EBGaramond_400Regular,
    EBGaramond_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="login"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
