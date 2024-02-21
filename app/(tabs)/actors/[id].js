import { Text, ScrollView, View } from "react-native";
import { globalStyles } from "../../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { actors } from "../../../data/actors";
import { AutoHeightImage } from "../../../components/AutoHeightImage";

export default function ActorDetailPage() {
  const { id } = useLocalSearchParams();

  const actor = actors.find((actor) => actor.id === Number(id));

  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ paddingBottom: 32 }}>
        <Text style={globalStyles.h1}>{actor.name}</Text>
        <AutoHeightImage
          source={actor.image}
          style={{
            width: "100%",
          }}
        />
      </View>
    </ScrollView>
  );
}
