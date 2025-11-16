// app/(home)/index.tsx

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import CoffeeCard from "../../components/CoffeeCard";
import PromoCard from "../../components/PromoCard";
import { SAMPLE_COFFEES } from "../../constants/data";
import { styles } from "../../styles/homeStyles";

const CATEGORIES = ["All Coffee", "Macchiato", "Latte", "Americano"];

export default function HomeScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All Coffee");

  const filtered =
    activeCategory === "All Coffee"
      ? SAMPLE_COFFEES
      : SAMPLE_COFFEES.filter((c) => c.category === activeCategory);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Black Header Background */}
      <View style={styles.headerBackground} />

      {/* Foreground Content */}
      <View style={styles.contentWrapper}>

        {/* Location */}
        <Text style={styles.locationLabel}>Location</Text>

        <View style={styles.locationRow}>
          <Text style={styles.locationText}>Tangier, Morocco</Text>
          <Ionicons name="chevron-down" size={18} color="#fff" />
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchInputWrapper}>
            <Ionicons name="search" size={20} color="#ccc" />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#ccc"
              style={styles.searchInput}
            />
          </View>

          <Pressable style={styles.filterBtn}>
            <Ionicons name="options" size={22} color="white" />
          </Pressable>
        </View>

        {/* Promo Card */}
        <View style={styles.promoWrapper}>
          <PromoCard />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          {CATEGORIES.map((cat) => {
            const active = cat === activeCategory;
            return (
              <Pressable
                key={cat}
                onPress={() => setActiveCategory(cat)}
                style={[
                  styles.categoryBtn,
                  active && styles.categoryBtnActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    active && styles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Coffee Grid */}
        <FlatList
          data={filtered}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{
            justifyContent: "space-between",
            overflow: "visible",
          }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
              router.push({
                pathname: "/(home)/detail",
                params: { id: item.id },
                })
              }
              style={[styles.coffeeItemWrapper, { overflow: "visible" }]}
            >
              <CoffeeCard {...item} />
            </Pressable>
          )}
        />

      </View>
    </ScrollView>
  );
}
