import { Stack } from "expo-router";
import { COLORS } from "../../styles/constants";
import { View, Button } from "react-native";
import { router } from "expo-router";

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
      <Stack.Screen name="index" options={{ title: "Movies" }} />
      <Stack.Screen name="[id]" options={{ title: "Details" }} />
    </Stack>
  );
}
