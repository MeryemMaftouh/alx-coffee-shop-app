import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../../styles/DeliveryStyles";

export default function DeliveryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* MAP IMAGE */}
      <Image
        source={require("../../assets/images/Maps.png")}
        style={styles.mapImage}
        resizeMode="cover"
      />

      {/* BACK BUTTON */}
      <Pressable onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </Pressable>

      {/* BOTTOM SHEET */}
      <View style={styles.bottomSheet}>
        <View style={styles.sheetIndicatorWrapper}>
          <View style={styles.sheetIndicator} />
        </View>

        <Text style={styles.timeText}>10 minutes left</Text>
        <Text style={styles.deliveryToText}>
          Delivery to <Text style={styles.deliveryBold}>Massira 2, Tangier, Morocco</Text>
        </Text>

        {/* STATUS */}
        <View style={styles.statusBox}>
          <View style={styles.statusIconBox}>
            <Ionicons name="bicycle-outline" size={22} color="#B16A41" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.statusTitle}>Delivering your order</Text>
            <Text style={styles.statusSubtitle}>
              Your courier is on the way to your address.
            </Text>
          </View>
        </View>

        {/* DRIVER */}
        <View style={styles.driverRow}>
          <Image
            source={require("../../assets/images/Driver.png")}
            style={styles.driverImg}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.driverName}>Brooklyn Simmons</Text>
            <Text style={styles.driverRole}>Personal Courier</Text>
          </View>

          <Pressable style={styles.callBtn}>
            <Ionicons name="call-outline" size={22} color="#000" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
