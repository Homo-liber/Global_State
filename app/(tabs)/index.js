import { Text, ScrollView, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import { Typography } from "../../components/Typography";
import { StyledButton } from "../../components/StyledButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function HomePage() {
  const { user } = useContext(UserContext);
  console.log("user", user);
  return (
    <ScrollView style={globalStyles.container}>
      <Typography
        onPress={() => {
          alert("Typography");
        }}
        variant="heading"
      >
        World of movies
      </Typography>
      <Typography style={{ color: "green" }}>
        {/* {user ? user.name : "Not logged in"} */}
        {user?.name}
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
