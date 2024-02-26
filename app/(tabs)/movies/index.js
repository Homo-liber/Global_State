import { ScrollView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/global";
import { movies } from "../../../data/movies";
import { Image } from "expo-image";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { StyledButton } from "../../../components/StyledButton";
import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { LanguageContext } from "../../../context/LanguageContext";

export default function MoviePage() {
  const { logout } = useContext(UserContext);

  const contextData = useContext(LanguageContext);
  console.log(contextData);
  const { language } = useContext(LanguageContext);
  console.log(language);

  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ paddingBottom: 32 }}>
        <Text style={globalStyles.h1}>All time favorites</Text>

        <Text style={{ fontSize: 30, color: "pink", paddingBottom: 10 }}>
          {language}
        </Text>
        <View style={{ gap: 12 }}>
          {movies.map((movie) => {
            return (
              <Link
                key={movie.id}
                href={`movies/${movie.id}`}
                style={[globalStyles.link]}
                asChild
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    maxWidth: "100%",
                  }}
                >
                  <AutoHeightImage
                    source={movie.thumbnail}
                    style={{ width: 120 }}
                    contentFit="contain"
                  />
                  <Text style={[globalStyles.h2, { flex: 1 }]}>
                    {movie.title}
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
