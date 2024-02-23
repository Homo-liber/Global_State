import { Text, ScrollView, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import { Typography } from "../../components/Typography";
import { StyledButton } from "../../components/StyledButton";

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
      <Typography tofu="sdjfh">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Typography>
      <StyledButton
        variant="primary"
        onPress={() => {
          alert("Hello from Homepage");
        }}
        onPressIn={() => {
          console.log("Outer Press in");
        }}
        onPressOut={() => {
          console.log("Outer Press out");
        }}
        xyz="abc"
      >
        Hello from Homepage
      </StyledButton>
      <StyledButton
        onPress={() => {
          alert("Don't click me again!");
        }}
      >
        Don't click me again!
      </StyledButton>
      {/* <StyledButton variant="secondary">Hallo</StyledButton> */}

      {/* <StyledButton>Hallo</StyledButton>
      <StyledButton
        onPress={() => {
          alert("Test");
        }}
        variant="secondary"
      >
        Hallo
      </StyledButton> */}

      <Link asChild style={globalStyles.link} href="movies">
        <Button color={COLORS.accent} title="Movies" />
      </Link>
      <Link asChild style={globalStyles.link} href="actors">
        <Button color={COLORS.accent} title="Actors" />
      </Link>
    </ScrollView>
  );
}
