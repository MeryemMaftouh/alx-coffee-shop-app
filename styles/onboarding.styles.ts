import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.58;

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  imageWrapper: {
    height: IMAGE_HEIGHT,
  },

  image: {
    flex: 1,
    width: "100%",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    textAlign: "center",
    opacity: 0.8,
    marginBottom: 32,
  },
});
