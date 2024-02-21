import {
  Platform,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { globalStyles } from "../styles/global";
import { COLORS } from "../styles/constants";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const showBackButton = router.canGoBack();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        globalStyles.container,
        { gap: 12, alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Text style={globalStyles.h1}>Login</Text>
      <TextInput
        placeholder="User name"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
        style={[globalStyles.input, { width: "60%" }]}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        secureTextEntry
        style={[globalStyles.input, { width: "60%" }]}
      />
      <Button
        onPress={() => {
          alert(`Username: ${name} Password: ${password}`);
        }}
        color={COLORS.accent}
        title="Submit"
      />
      {showBackButton && (
        <Button
          title="Cancel"
          color={COLORS.grey}
          onPress={() => {
            router.back();
          }}
        />
      )}
    </KeyboardAvoidingView>
  );
}
