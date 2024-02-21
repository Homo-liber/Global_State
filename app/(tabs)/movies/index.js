import { ScrollView, View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { movies } from "../../../data/movies";
import { Image } from "expo-image";
import { AutoHeightImage } from "../../../components/AutoHeightImage";

export default function MoviePage() {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ paddingBottom: 32 }}>
        <Text style={globalStyles.h1}>All time favorites</Text>
        <View style={{ gap: 12 }}>
          {movies.map((movie) => {
            return (
              <Link
                key={movie.id}
                href={`movies/${movie.id}`}
                style={globalStyles.link}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <AutoHeightImage
                    source={movie.thumbnail}
                    style={{ width: 120 }}
                    contentFit="contain"
                  />
                  <Text style={globalStyles.h2}>{movie.title}</Text>
                </View>
              </Link>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
