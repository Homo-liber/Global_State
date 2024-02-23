import { Text, ScrollView, Button } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import { Typography } from "../../components/Typography";

export default function HomePage() {
  return (
    <ScrollView style={globalStyles.container}>
      <Typography
        onPress={() => {
          alert("Typography");
        }}
        variant="heading"
        style={{ color: "green" }}
      >
        World of movies
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Typography>

      <Link asChild style={globalStyles.link} href="movies">
        <Button color={COLORS.accent} title="Movies" />
      </Link>
      <Link asChild style={globalStyles.link} href="actors">
        <Button color={COLORS.accent} title="Actors" />
      </Link>
    </ScrollView>
  );
}
