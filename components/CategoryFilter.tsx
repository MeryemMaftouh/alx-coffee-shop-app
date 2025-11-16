import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
};

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <View className="flex-row mt-6 mb-4">
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => onChange(cat)}
          className={`mr-4 px-4 py-2 rounded-full ${
            active === cat ? "bg-[#C67C4E]" : "bg-gray-200"
          }`}
        >
          <Text
            className={`font-sora ${
              active === cat ? "text-white" : "text-gray-800"
            }`}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
