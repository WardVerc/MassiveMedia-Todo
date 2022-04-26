import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./ListDetails.styles";
import { ListDetailsNavigationProps } from "../../App";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DeleteListDialog from "../Dialog/DeleteListDialog";

const ListDetails: React.FC<ListDetailsNavigationProps> = ({
  navigation,
  route,
}) => {
  const [visible, setVisible] = useState(false);
  const { title, description, listId, items } = route.params.list;

  const handlePressDelete = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <DeleteListDialog
        visible={visible}
        setVisible={setVisible}
        listId={listId}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.actionsContainer}>
          <MaterialIcons style={styles.icon} name="edit" size={30} />
          <MaterialIcons
            style={styles.icon}
            name="delete"
            size={30}
            onPress={handlePressDelete}
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
