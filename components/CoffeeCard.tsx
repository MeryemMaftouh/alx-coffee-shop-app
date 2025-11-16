// components/CoffeeCard.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  name: string;
  price: number;
  image: any;
  short?: string;
};

export default function CoffeeCard({ name, price, image, short }: Props) {
  return (
    <View className="bg-white rounded-2xl px-3 pt-3 pb-5 shadow shadow-black/10">
      {/* Image */}
      <Image source={image} className="w-full h-32 rounded-xl mb-3" />

      {/* Name */}
      <Text className="text-lg font-semibold text-coffee3">{name}</Text>

      {/* Short description */}
      {short && (
        <Text className="text-gray-400 text-sm mt-0.5">{short}</Text>
      )}

      {/* Price + Add Button row */}
      <View className="flex-row items-center justify-between mt-3">

        {/* Price */}
        <Text className="text-coffee1 font-semibold text-base">
          ${price.toFixed(2)}
        </Text>

        {/* Add button */}
        <Pressable className="w-9 h-9 bg-coffee1 rounded-xl items-center justify-center">
          <Ionicons name="add" size={20} color="#fff" />
        </Pressable>

      </View>
    </View>
  );
}
