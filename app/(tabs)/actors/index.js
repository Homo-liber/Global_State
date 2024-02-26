import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { actors } from "../../../data/actors";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { LanguageContext } from "../../../context/LanguageContext";
import { useState, useContext } from "react";

export default function ActorsPage() {
  const contextData = useContext(LanguageContext);
  console.log(contextData);
  const { language } = useContext(LanguageContext);
  console.log(language);
  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ paddingBottom: 32 }}>
        <Text style={globalStyles.h1}>Great actors</Text>
        <Text style={{ fontSize: 30, color: "pink", paddingBottom: 10 }}>
          {language}
        </Text>
        <View style={{ gap: 12 }}>
          {actors.map((actor) => {
            return (
              <Link
                key={actor.id}
                href={`actors/${actor.id}`}
                style={globalStyles.link}
                asChild
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    maxWidth: "100%",
                    gap: 12,
                  }}
                >
                  <AutoHeightImage
                    source={actor.image}
                    style={{ width: 120 }}
                    contentFit="contain"
                  />
                  <Text style={[globalStyles.h2, { flex: 1 }]}>
                    {actor.name}
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
