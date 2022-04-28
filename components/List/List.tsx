import React from "react";
import { View, Text } from "react-native";
import { ListType } from "../../hooks/useGetAllLists";
import { styles } from "../List/List.styles";
import { ListsNavigationProps } from "../../App";

interface ListProps extends ListsNavigationProps {
  list: ListType;
}

const List: React.FC<ListProps> = ({ list, navigation }) => {
  const totalItemsMarked = () => {
    const itemsMarked = list.items.filter((item) => {
      return item.done === true;
    });

    return `(${itemsMarked.length}/${list.items.length})`;
  };

  return (
    <View
      style={styles.container}
      onTouchEnd={() => navigation.navigate("List details", { list: list })}
    >
      <View>
        <Text style={styles.title}>{list.title}</Text>
        <Text style={styles.description}>{list.description}</Text>
      </View>

      {list.items.length > 0 ? (
        <Text style={styles.itemsMarked}>{totalItemsMarked()}</Text>
      ) : undefined}
    </View>
  );
};

export default List;
