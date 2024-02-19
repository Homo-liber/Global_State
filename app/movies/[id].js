import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { useLocalSearchParams } from "expo-router";

export default function MovieDetailPage() {
  const { id } = useLocalSearchParams();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Movie Detail Page</Text>
      <Text style={globalStyles.p}>{id}</Text>
      <Link style={globalStyles.link} href="movies">
        Movies
      </Link>
      <Link style={globalStyles.link} href="/">
        Homepage
      </Link>
    </View>
  );
}
