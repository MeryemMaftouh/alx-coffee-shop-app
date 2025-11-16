// styles/DetailStyles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FAFAFA",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  mainImage: {
    width: "100%",
    height: 280,
    borderRadius: 24,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  coffeeName: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },

  coffeeType: {
    color: "#9A9A9A",
    marginTop: 3,
  },

  featureRow: {
    flexDirection: "row",
    gap: 12,
  },

  featureBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  ratingText: {
    fontSize: 18,
    marginLeft: 6,
    marginRight: 4,
    fontWeight: "600",
  },

  ratingCount: {
    color: "#9A9A9A",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 18,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  description: {
    color: "#9A9A9A",
    fontSize: 15,
    lineHeight: 22,
  },

  readMore: {
    color: "#C67C4E",
    fontWeight: "600",
  },

  sizeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  sizeBox: {
    width: "30%",
    height: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  sizeBoxActive: {
    backgroundColor: "#FFF3EB",
    borderColor: "#C67C4E",
  },

  sizeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  sizeTextActive: {
    color: "#C67C4E",
  },

  buyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
  },

  priceLabel: {
    color: "#9A9A9A",
    fontSize: 15,
  },

  priceValue: {
    fontSize: 26,
    fontWeight: "700",
    color: "#C67C4E",
    marginTop: 4,
  },

  buyButton: {
    backgroundColor: "#C67C4E",
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 20,
  },

  buyButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  buyNowBtn: {
  backgroundColor: "#B16A41",   // <-- SAME COLOR AS OTHER BUTTONS
  paddingVertical: 12,
  paddingHorizontal: 28,
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
},

buyNowText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},


});
