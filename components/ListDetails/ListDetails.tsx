import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ListDetails.styles";
import { ListDetailsNavigationProps } from "../../App";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ListDetails: React.FC<ListDetailsNavigationProps> = ({ route }) => {
  const { title, description, listId, items } = route.params.list;

  const handleDelete = () => {
    console.log("Delete was pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.actionsContainer}>
          <MaterialIcons style={styles.icon} name="edit" size={30} />
          <MaterialIcons
            style={styles.icon}
            name="delete"
            size={30}
            onPress={handleDelete}
          />
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <Text>Items of listId: {listId}</Text>
      </View>
    </View>
  );
};

export default ListDetails;
