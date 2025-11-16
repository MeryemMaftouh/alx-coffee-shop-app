// components/PromoCard.tsx
import React from "react";
import { Image, Text, View } from "react-native";

export default function PromoCard() {
  return (
    <View className="w-full bg-coffee1 rounded-2xl p-5 flex-row items-center justify-between">
      {/* TEXT */}
      <View className="flex-1 mr-3">
        <Text className="text-white text-xl font-semibold leading-tight">
          Special Offer
        </Text>
        <Text className="text-coffee2 text-sm mt-1 w-36">
          Get your favorite coffee with a discount today.
        </Text>
      </View>

      {/* DECORATIVE IMAGE (use any of your Coffee1-5 images) */}
      <Image
        source={require("../assets/images/Coffee1.png")}
        className="w-20 h-20 rounded-xl"
        resizeMode="cover"
      />
    </View>
  );
}
