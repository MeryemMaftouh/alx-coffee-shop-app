import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  mapImage: {
    width: "100%",
    height: 420,
  },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
  },

  bottomSheet: {
    backgroundColor: "#fff",
    marginTop: -30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  sheetIndicatorWrapper: {
    alignItems: "center",
  },

  sheetIndicator: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },

  timeText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },

  deliveryToText: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },

  deliveryBold: {
    fontWeight: "600",
  },

  statusBox: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  statusIconBox: {
    backgroundColor: "#FFF1E6",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },

  statusTitle: {
    fontWeight: "700",
    fontSize: 16,
  },

  statusSubtitle: {
    color: "#666",
  },

  driverRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  driverImg: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 15,
  },

  driverName: {
    fontSize: 17,
    fontWeight: "700",
  },

  driverRole: {
    color: "#666",
  },

  callBtn: {
    backgroundColor: "#F3F3F3",
    padding: 12,
    borderRadius: 12,
  },
});
