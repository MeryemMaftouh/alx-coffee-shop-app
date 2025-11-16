import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onboardingStyles } from "../styles/onboarding.styles";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={onboardingStyles.container}>
      {/* Image Section */}
      <View style={onboardingStyles.imageWrapper}>
        <ImageBackground
          source={require("../assets/images/hero.png")}
          style={onboardingStyles.image}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "black"]}
            style={onboardingStyles.gradient}
          />
        </ImageBackground>
      </View>

      {/* Text + Button Section */}
      <View style={onboardingStyles.contentWrapper}>
        <Text className="text-white text-3xl font-sora" style={onboardingStyles.title}>
          Fall in Love with{"\n"}Coffee in Blissful Delight!
        </Text>

        <Text className="text-white text-sm font-sora" style={onboardingStyles.subtitle}>
          Welcome to our cozy coffee corner, where{"\n"}every cup is a delightful for you.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/(home)")}
          className="bg-coffee1 py-4 rounded-xl w-full items-center"
        >
          <Text className="text-white font-sora text-base">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
