import React from "react";
import { View, Text } from "react-native";
import { styles } from "./AddListButton.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface AddListButtonProps {
  createList: () => void;
}

const AddListButton: React.FC<AddListButtonProps> = ({ createList }) => {
  return (
    <View style={styles.container} onTouchEnd={() => createList()}>
      <MaterialIcons name="add" size={70} />
    </View>
  );
};

export default AddListButton;
