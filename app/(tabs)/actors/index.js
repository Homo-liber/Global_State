import { ScrollView, View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { actors } from "../../../data/actors";
import { AutoHeightImage } from "../../../components/AutoHeightImage";

export default function ActorsPage() {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={globalStyles.h1}>Great actors</Text>
        <View style={{ gap: 12 }}>
          {actors.map((actor) => {
            return (
              <Link
                key={actor.id}
                href={`actors/${actor.id}`}
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
                    source={actor.image}
                    style={{ width: 120 }}
                    contentFit="contain"
                  />
                  <Text style={globalStyles.h2}>{actor.name}</Text>
                </View>
              </Link>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
