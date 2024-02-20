import { View, Text } from "react-native";
import { globalStyles } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { movies } from "../../../data/movies";
import { AutoHeightImage } from "../../../components/AutoHeightImage";

export default function MovieDetailPage() {
  const { id } = useLocalSearchParams();

  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>{movie.title}</Text>
      <Text style={globalStyles.h2}>{movie.tagline}</Text>
      <AutoHeightImage
        source={movie.image}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
}
