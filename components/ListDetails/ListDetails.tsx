import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./ListDetails.styles";
import { ListDetailsNavigationProps } from "../../App";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DeleteListDialog from "../Dialog/DeleteListDialog";
import UpdateListDialog from "../Dialog/UpdateListDialog";
import useGetList from "../../hooks/useGetList";

const ListDetails: React.FC<ListDetailsNavigationProps> = ({
  navigation,
  route,
}) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const { list, getList, isLoading, error } = useGetList(
    route.params.list.listId
  );
  const { title, description, items } = list;

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
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{description}</Text>
        </View>
        <View style={styles.actionsContainer}>
          <MaterialIcons
            style={styles.icon}
            name="edit"
            size={30}
            onPress={() => setIsUpdateVisible(true)}
          />
          <MaterialIcons
            style={styles.icon}
            name="delete"
            size={30}
            onPress={() => setIsDeleteVisible(true)}
          />
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <Text>Item</Text>
        <Text>Item</Text>
      </View>
    </View>
  );
};

export default ListDetails;
