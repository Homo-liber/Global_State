import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.dark,
  },
  p: {
    color: COLORS.light,
    marginBottom: 8,
  },
  h1: {
    fontSize: 42,
    color: COLORS.accent,
    marginBottom: 12,
    fontFamily: FONTS.serifBold,
  },
  h2: {
    fontSize: 20,
    color: COLORS.light,
    marginBottom: 8,
  },
  link: {
    fontSize: 18,
    color: COLORS.accent,
  },
});
