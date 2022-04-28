import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  header: {
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 2,
  },
  itemsContainer: {
    padding: 10,
    alignItems: "center",
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
