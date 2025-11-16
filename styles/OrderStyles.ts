import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  backBtn: {
    padding: 5,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  // TOGGLE
  toggleWrapper: {
    flexDirection: "row",
    backgroundColor: "#F1EFEF",
    borderRadius: 12,
    padding: 5,
    marginBottom: 20,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  toggleActive: {
    backgroundColor: "#B16A41",
  },
  toggleText: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  toggleTextActive: {
    color: "#fff",
    fontWeight: "600",
  },

  // ADDRESS
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  addressTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  addressSubtitle: {
    color: "#777",
    fontSize: 14,
  },

  actionRow: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },

  actionBtn: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#CFCFCF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    gap: 5,
  },

  actionText: {
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#EFEFEF",
    marginVertical: 15,
  },

  // ITEM ROW
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemDesc: {
    fontSize: 14,
    color: "#777",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  qtyBtn: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyBtnText: {
    fontSize: 20,
    fontWeight: "500",
  },
  qtyNumber: {
    fontSize: 16,
    fontWeight: "600",
  },

  // DISCOUNT
  discountBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAF8F4",
    borderRadius: 12,
    padding: 15,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  discountText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500",
  },

  // PAYMENT SUMMARY
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#555",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  deliveryOriginal: {
    textDecorationLine: "line-through",
    color: "#777",
  },

  // WALLET
  walletBox: {
    backgroundColor: "#FAF8F4",
    borderRadius: 14,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  walletRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  walletLeft: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  walletLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  walletAmount: {
    fontSize: 16,
    color: "#B16A41",
    fontWeight: "600",
  },

  // ORDER BUTTON
  orderBtn: {
    backgroundColor: "#B16A41",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
  },
  orderBtnText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  pickupBox: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FAF8F4",
  padding: 15,
  borderRadius: 12,
  marginBottom: 15,
  gap: 12,
},

pickupTimeBox: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FAF8F4",
  padding: 15,
  borderRadius: 12,
  marginBottom: 20,
  gap: 12,
},

});
