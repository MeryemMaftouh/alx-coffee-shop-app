import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { getCoffeeById } from "../../constants/data";
import { styles } from "../../styles/DetailStyles";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const item = getCoffeeById(id as string);

  const [expanded, setExpanded] = useState(false);
  const [size, setSize] = useState("M");

  // ADD THIS — because your Buy Now button needs qty
  const [selectedQty] = useState(1);

  if (!item) return <Text style={{ padding: 20 }}>Item not found.</Text>;

  const isLong = item.description.length > 120;
  const preview = item.description.substring(0, 120);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </Pressable>

        <Text style={styles.headerTitle}>Detail</Text>

        <Pressable style={styles.iconBtn}>
          <Ionicons name="heart-outline" size={22} color="#000" />
        </Pressable>
      </View>

      {/* IMAGE */}
      <Image source={item.image} style={styles.mainImage} />

      {/* NAME + TYPE */}
      <View style={styles.titleRow}>
        <View>
          <Text style={styles.coffeeName}>{item.name}</Text>
          <Text style={styles.coffeeType}>{item.short}</Text>
        </View>
      </View>

      {/* RATING */}
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={22} color="#FBBE21" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>

      <View style={styles.divider} />

      {/* DESCRIPTION */}
      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        {expanded || !isLong ? item.description : `${preview}...`}
      </Text>

      {isLong && (
        <Text style={styles.readMore} onPress={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
        </Text>
      )}

      {/* SIZE */}
      <Text style={styles.sectionTitle}>Size</Text>

      <View style={styles.sizeRow}>
        {["S", "M", "L"].map((s) => (
          <Pressable
            key={s}
            onPress={() => setSize(s)}
            style={[styles.sizeBox, size === s && styles.sizeBoxActive]}
          >
            <Text
              style={[
                styles.sizeText,
                size === s && styles.sizeTextActive,
              ]}
            >
              {s}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* PRICE + BUY NOW */}
      <View style={styles.buyRow}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>${item.price.toFixed(2)}</Text>
        </View>

        {/* 🔥 REPLACED BUTTON — USING YOUR VERSION */}
        <Pressable
          style={styles.buyNowBtn}
          onPress={() =>
            router.push({
              pathname: "/(home)/order",
              params: { id: item.id, qty: selectedQty }
            })
          }
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}
