// app/(home)/styles/homeStyles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 240,
    backgroundColor: "black",
    zIndex: 0,
  },

  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 48,
    zIndex: 10,
  },

  // Location
  locationLabel: {
    color: "#aaa",
    fontSize: 12,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  locationText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    marginRight: 4,
  },

  // Search
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "white",
    fontSize: 16,
  },

  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#C67C4E", // coffee1
    alignItems: "center",
    justifyContent: "center",
  },

  // Promo
  promoWrapper: {
    marginTop: 24,
  },

  // Categories
  categoriesScroll: {
    marginTop: 24,
  },
  categoryBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#f3f3f3",
    marginRight: 12,
  },
  categoryBtnActive: {
    backgroundColor: "#C67C4E",
  },
  categoryText: {
    fontSize: 16,
    color: "#666",
  },
  categoryTextActive: {
    color: "white",
    fontWeight: "600",
  },

  // Coffee Grid
  coffeeColumn: {
    justifyContent: "space-between",
  },
  coffeeItemWrapper: {
    width: "48%",
    marginTop: 24,
    overflow: "visible",
  },
});
