import React from "react";
import { View } from "react-native";
import { styles } from "./AddItemButton.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface AddListButtonProps {
  createList: () => void;
}

const AddItemButton: React.FC<AddListButtonProps> = ({ createList }) => {
  return (
    <View style={styles.container} onTouchEnd={() => createList()}>
      <MaterialIcons name="add" size={50} color="white" />
    </View>
  );
};

export default AddItemButton;
