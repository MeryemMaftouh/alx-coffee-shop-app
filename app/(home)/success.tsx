import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function PickupSuccess() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Ionicons name="checkmark-circle" size={90} color="#4CAF50" />

      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Order Confirmed!
      </Text>

      <Text
        style={{
          color: "#666",
          textAlign: "center",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        Your pickup order is being prepared.  
        We’ll notify you when it’s ready.
      </Text>

      <Pressable
        onPress={() => router.push("/(home)")}
        style={{
          marginTop: 40,
          backgroundColor: "#B16A41",
          paddingVertical: 14,
          paddingHorizontal: 35,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "600" }}>
          Back to Home
        </Text>
      </Pressable>
    </View>
  );
}
