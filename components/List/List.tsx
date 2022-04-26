import React from "react";
import { View, Text } from "react-native";
import { ListType } from "../../hooks/useGetAllLists";
import { styles } from "../List/List.styles";
import { ListsNavigationProps } from "../../App";

interface ListProps extends ListsNavigationProps {
  list: ListType;
}

const List: React.FC<ListProps> = ({ list, navigation }) => {
  return (
    <View
      style={styles.container}
      onTouchEnd={() => navigation.navigate("ListDetails", { list: list })}
    >
      <Text>{list.title}</Text>
      <Text>{list.description}</Text>
      <Text>{list.listId}</Text>
    </View>
  );
};

export default List;
