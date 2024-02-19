import { ScrollView, View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { movies } from "../../data/movies";
import { Image } from "expo-image";

export default function MoviePage() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.h1}>Movie Page</Text>

      <Link style={globalStyles.link} href="/">
        Homepage
      </Link>

      {movies.map((movie) => {
        return (
          <Link
            key={movie.id}
            href={`movies/${movie.id}`}
            style={globalStyles.link}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Image
                source={movie.thumbnail}
                style={{ width: 70, height: 120 }}
                contentFit="contain"
              />
              <Text style={globalStyles.h2}>{movie.title}</Text>
            </View>
          </Link>
        );
      })}
    </ScrollView>
  );
}
