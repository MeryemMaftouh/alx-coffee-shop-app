import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { getCoffeeById } from "../../constants/data";
import { styles } from "../../styles/OrderStyles";

export default function OrderScreen() {
  const router = useRouter();
  const { id, qty } = useLocalSearchParams();

  const item = getCoffeeById(id as string);
  const [quantity, setQuantity] = useState(Number(qty) || 1);
  const [deliveryType, setDeliveryType] = useState("deliver");

  if (!item) return <Text style={{ padding: 20 }}>Item not found.</Text>;

  const price = item.price * quantity;
  const deliveryFee = 1.0;
  const walletAmount = 5.53;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Order</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* DELIVERY / PICK UP TOGGLE */}
      <View style={styles.toggleWrapper}>
        <Pressable
          onPress={() => setDeliveryType("deliver")}
          style={[
            styles.toggleBtn,
            deliveryType === "deliver" && styles.toggleActive,
          ]}
        >
          <Text
            style={[
              styles.toggleText,
              deliveryType === "deliver" && styles.toggleTextActive,
            ]}
          >
            Deliver
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setDeliveryType("pickup")}
          style={[
            styles.toggleBtn,
            deliveryType === "pickup" && styles.toggleActive,
          ]}
        >
          <Text
            style={[
              styles.toggleText,
              deliveryType === "pickup" && styles.toggleTextActive,
            ]}
          >
            Pick Up
          </Text>
        </Pressable>
      </View>

      {/* =============================== */}
      {/*   DELIVERY OR PICKUP SECTION    */}
      {/* =============================== */}

      {deliveryType === "deliver" ? (
        <>
          {/* DELIVERY ADDRESS */}
          <Text style={styles.sectionTitle}>Delivery Address</Text>

          <View style={{ marginBottom: 10 }}>
            <Text style={styles.addressTitle}>Massira 2</Text>
            <Text style={styles.addressSubtitle}>
              Massira 2, Tangier, Morocco
            </Text>
          </View>

          <View style={styles.actionRow}>
            <Pressable style={styles.actionBtn}>
              <Ionicons name="create-outline" size={16} color="#000" />
              <Text style={styles.actionText}>Edit Address</Text>
            </Pressable>

            <Pressable style={styles.actionBtn}>
              <Ionicons name="document-text-outline" size={16} color="#000" />
              <Text style={styles.actionText}>Add Note</Text>
            </Pressable>
          </View>

          <View style={styles.divider} />
        </>
      ) : (
        <>
          {/* PICKUP LOCATION */}
          <Text style={styles.sectionTitle}>Pickup Location</Text>

          <View style={styles.pickupBox}>
            <Ionicons name="location-outline" size={22} color="#B16A41" />
            <View style={{ flex: 1 }}>
              <Text style={styles.addressTitle}>Coffee Shop - Main Branch</Text>
              <Text style={styles.addressSubtitle}>
                123 Main St, Tangier, Morocco
              </Text>
            </View>
          </View>

          {/* PICKUP TIME */}
          <View style={styles.pickupTimeBox}>
            <Ionicons name="time-outline" size={22} color="#B16A41" />

            <View style={{ flex: 1 }}>
              <Text style={styles.addressTitle}>Pickup Time</Text>
              <Text style={styles.addressSubtitle}>Ready in 10–15 minutes</Text>
            </View>
          </View>

          <View style={styles.divider} />
        </>
      )}

      {/* ITEM PREVIEW */}
      <View style={styles.itemRow}>
        <Image source={item.image} style={styles.itemImage} />

        <View style={{ flex: 1 }}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDesc}>{item.short}</Text>
        </View>

        <View style={styles.qtyRow}>
          <Pressable
            onPress={() => quantity > 1 && setQuantity(quantity - 1)}
            style={styles.qtyBtn}
          >
            <Text style={styles.qtyBtnText}>−</Text>
          </Pressable>

          <Text style={styles.qtyNumber}>{quantity}</Text>

          <Pressable
            onPress={() => setQuantity(quantity + 1)}
            style={styles.qtyBtn}
          >
            <Text style={styles.qtyBtnText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.divider} />

      {/* DISCOUNT (only for DELIVERY) */}
      {deliveryType === "deliver" && (
        <Pressable style={styles.discountBox}>
          <Ionicons name="pricetag-outline" size={20} color="#B16A41" />
          <Text style={styles.discountText}>1 Discount is Applied</Text>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </Pressable>
      )}

      {/* PAYMENT SUMMARY */}
      <Text style={styles.sectionTitle}>Payment Summary</Text>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Price</Text>
        <Text style={styles.summaryValue}>${price.toFixed(2)}</Text>
      </View>

      {/* Delivery fee only when Deliver */}
      {deliveryType === "deliver" && (
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text style={styles.deliveryOriginal}>$2.0</Text>
            <Text style={styles.summaryValue}>${deliveryFee.toFixed(1)}</Text>
          </View>
        </View>
      )}

      {/* WALLET */}
      <View style={styles.walletBox}>
        <View style={styles.walletRow}>
          <View style={styles.walletLeft}>
            <Ionicons name="wallet-outline" size={20} color="#B16A41" />
            <Text style={styles.walletLabel}>Cash/Wallet</Text>
          </View>

          <Text style={styles.walletAmount}>${walletAmount.toFixed(2)}</Text>

          <Ionicons name="chevron-down" size={20} color="#000" />
        </View>
      </View>

      {/* ORDER BUTTON */}
      <Pressable
        style={styles.orderBtn}
        onPress={() => {
          if (deliveryType === "deliver") {
            router.push("/(home)/delivery");
          } else {
            router.push("/(home)/success");
          }
        }}
      >
  <Text style={styles.orderBtnText}>Order</Text>
</Pressable>

    </ScrollView>
  );
}
