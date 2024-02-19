import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";

export default function MoviePage() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Movie Page</Text>
      <Link style={globalStyles.link} href="/">
        Homepage
      </Link>
      <Link style={globalStyles.link} href="movies/234">
        Der Pate
      </Link>
      <Link style={globalStyles.link} href="movies/123">
        Titanic
      </Link>
      <Link style={globalStyles.link} href="movies/abcdexyz">
        Test
      </Link>
    </View>
  );
}
