import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 7,
  },
  itemTextContainer: {
    width: "80%",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "15%",
  },
  icon: {
    textAlignVertical: "center",
    textAlign: "center",
    padding: 5,
  },
});
