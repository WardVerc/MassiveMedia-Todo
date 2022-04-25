import React from "react";
import { View, Text } from "react-native";
import { ListType } from "../../hooks/useGetAllLists";
import { styles } from "../List/List.styles";

interface ListProps {
  list: ListType;
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <View style={styles.container}>
      <Text>{list.title}</Text>
      <Text>{list.description}</Text>
    </View>
  );
};

export default List;
