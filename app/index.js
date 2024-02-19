import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../styles/global";

export default function HomePage() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Homepage</Text>
      <Text style={globalStyles.p}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Text>
      <Link style={globalStyles.link} href="movies">
        Movies
      </Link>
    </View>
  );
}
