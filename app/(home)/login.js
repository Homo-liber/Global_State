import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[globalStyles.container, { gap: 12, alignItems: "center" }]}>
      <Text style={globalStyles.h1}>Login</Text>
      <TextInput
        onChangeText={(text) => {
          console.log("onTextChange");
          setName(text);
        }}
        value={name}
        style={[globalStyles.input, { width: "60%" }]}
      />
      <TextInput
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        secureTextEntry
        style={[globalStyles.input, { width: "60%" }]}
      />
      <Button
        onPress={() => {
          alert(`Username: ${name} Password: ?${password}`);
        }}
        color={COLORS.accent}
        title="Submit"
      />
    </View>
  );
}
