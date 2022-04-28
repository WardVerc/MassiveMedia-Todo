import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./Item.styles";
import { ItemType } from "../../hooks/item/useAddItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useDeleteItem from "../../hooks/item/useDeleteItem";
import UpdateItemDialog from "../Dialog/UpdateItemDialog";
import useMarkAsDone from "../../hooks/item/useMarkAsDone";

interface ItemProps {
  item: ItemType;
  listId: number;
  getList: (listId: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, listId, getList }) => {
  const [visible, setVisible] = useState(false);
  const {
    deleteItem,
    isLoading: deleteLoading,
    error: deleteError,
  } = useDeleteItem();
  const {
    markAsDone,
    markAsNotDone,
    isLoading: markIsLoading,
    error: markError,
  } = useMarkAsDone();

  const isLoading = deleteLoading || markIsLoading;
  const error = deleteError || markError;

  const handleDelete = async () => {
    await deleteItem(item.itemId, listId);
    getList(listId);
  };

  const handleMarkAsDone = async () => {
    await markAsDone(item.itemId, listId);
    getList(listId);
  };

  const handleMarkAsNotDone = async () => {
    await markAsNotDone(item.itemId, listId);
    getList(listId);
  };

  const handleTouchEnd = () => {
    item.done ? handleMarkAsNotDone() : handleMarkAsDone();
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading ...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An error has occurred. Please try again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemTextContainer} onTouchEnd={handleTouchEnd}>
        <Text
          style={item.done ? { textDecorationLine: "line-through" } : undefined}
        >
          {item.description}
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <UpdateItemDialog
          listId={listId}
          itemId={item.itemId}
          originalDescription={item.description}
          visible={visible}
          setVisible={setVisible}
          getList={getList}
        />
        <MaterialIcons
          style={styles.icon}
          name="edit"
          size={20}
          onPress={() => setVisible(true)}
        />
        <MaterialIcons
          style={styles.icon}
          name="delete"
          size={20}
          onPress={handleDelete}
        />
      </View>
    </View>
  );
};

export default Item;
