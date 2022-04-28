import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./ListDetails.styles";
import { ListDetailsNavigationProps } from "../../App";
import DeleteListDialog from "../Dialog/DeleteListDialog";
import UpdateListDialog from "../Dialog/UpdateListDialog";
import useGetList from "../../hooks/list/useGetList";
import AddItemDialog from "../Dialog/AddItemDialog";
import Item from "../Item/Item";
import ListDetailsHeader from "./ListDetailsHeader/ListDetailsHeader";
import AddItemButton from "../Item/AddItemButton/AddItemButton";

const ListDetails: React.FC<ListDetailsNavigationProps> = ({
  navigation,
  route,
}) => {
  const [isAddItemVisible, setIsAddItemVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const { list, getList, isLoading, error } = useGetList(
    route.params.list.listId
  );
  const { title, description, items } = list;

  const handlePress = () => {
    setIsAddItemVisible(true);
  };

  const renderDialogs = () => {
    return (
      <>
        <UpdateListDialog
          visible={isUpdateVisible}
          setVisible={setIsUpdateVisible}
          listId={route.params.list.listId}
          originalTitle={route.params.list.title}
          originalDescription={route.params.list.description}
          getList={getList}
        />
        <DeleteListDialog
          visible={isDeleteVisible}
          setVisible={setIsDeleteVisible}
          listId={route.params.list.listId}
          navigateToLists={() => navigation.navigate("Lists")}
        />
        <AddItemDialog
          visible={isAddItemVisible}
          setVisible={setIsAddItemVisible}
          listId={route.params.list.listId}
          getList={getList}
        />
      </>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>The following error has occured:</Text>
        <Text>{error}</Text>
        <Text>Please try again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderDialogs()}
      <ListDetailsHeader
        title={title}
        description={description}
        setIsDeleteVisible={setIsDeleteVisible}
        setIsUpdateVisible={setIsUpdateVisible}
      />
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.itemId}
              listId={route.params.list.listId}
              getList={getList}
            />
          );
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AddItemButton createList={handlePress} />
      </View>
    </View>
  );
};

export default ListDetails;
