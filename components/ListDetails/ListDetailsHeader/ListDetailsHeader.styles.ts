import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 2,
  },
  headerText: {
    fontSize: 20,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "25%",
  },
  icon: {
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 3,
    borderRadius: 5,
  },
});
