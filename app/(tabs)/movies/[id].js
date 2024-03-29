import { ScrollView, View, Text, Pressable } from "react-native";
import { globalStyles } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { movies } from "../../../data/movies";
import { actors } from "../../../data/actors";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { COLORS, FONTS } from "../../../styles/constants";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";

export default function MovieDetailPage() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <ScrollView style={[globalStyles.container]}>
      <View style={{ paddingBottom: 32 }}>
        <View>
          <Text style={globalStyles.h1}>{movie.title}</Text>
          <Text style={globalStyles.h2}>{movie.tagline}</Text>
        </View>
        <AutoHeightImage
          source={movie.image}
          style={{
            width: "100%",
            marginTop: 12,
          }}
        />
        <View style={{ marginTop: 20 }}>
          {movie.cast.map((castMember) => {
            const actor = actors.find((actor) => castMember.id === actor.id);
            return (
              <View
                key={castMember.id}
                style={{ flexDirection: "row", width: "100%", gap: 12 }}
              >
                <Text style={[globalStyles.p, { flex: 1 }]}>
                  {castMember.character}
                </Text>
                <Pressable
                  style={[
                    {
                      flex: 1,
                    },
                  ]}
                  onPress={() => {
                    navigation.navigate("actors", {
                      screen: "[id]",
                      params: { id: actor.id },
                      initial: false,
                    });
                  }}
                >
                  <Text
                    style={[
                      globalStyles.p,
                      {
                        color: COLORS.grey,
                        textDecorationLine: "underline",
                      },
                    ]}
                  >
                    {actor?.name}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
