import React from "react";
import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./ListDetailsHeader.styles";

interface ListDetailsHeaderProps {
  title: string;
  description: string;
  setIsUpdateVisible: (bool: boolean) => void;
  setIsDeleteVisible: (bool: boolean) => void;
}

const ListDetailsHeader: React.FC<ListDetailsHeaderProps> = ({
  title,
  description,
  setIsUpdateVisible,
  setIsDeleteVisible,
}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <MaterialIcons
          name="edit"
          size={30}
          onPress={() => setIsUpdateVisible(true)}
        />
        <MaterialIcons
          name="delete"
          size={30}
          onPress={() => setIsDeleteVisible(true)}
        />
      </View>
    </View>
  );
};

export default ListDetailsHeader;
