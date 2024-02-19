import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { movies } from "../../data/movies";
import { Image } from "expo-image";

export default function MovieDetailPage() {
  const { id } = useLocalSearchParams();

  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>{movie.title}</Text>
      <Text style={globalStyles.h2}>{movie.tagline}</Text>
      <Image
        source={movie.image}
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <Link style={globalStyles.link} href="movies">
        Movies
      </Link>
      <Link style={globalStyles.link} href="/">
        Homepage
      </Link>
    </View>
  );
}
