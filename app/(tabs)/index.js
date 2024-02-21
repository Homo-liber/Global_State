import { Text, ScrollView, Button } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";

export default function HomePage() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={[globalStyles.h1]}>World of movies</Text>
      <Text style={globalStyles.p}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Text>
      <Link asChild style={globalStyles.link} href="movies">
        <Button color={COLORS.accent} title="Movies" />
      </Link>
      <Link asChild style={globalStyles.link} href="actors">
        <Button color={COLORS.accent} title="Actors" />
      </Link>
    </ScrollView>
  );
}
