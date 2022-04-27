import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Item.styles";
import { ItemType } from "../../hooks/item/useAddItem";

interface ItemProps {
  item: ItemType;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{item.description}</Text>
      <Text>{item.done}</Text>
    </View>
  );
};

export default Item;
