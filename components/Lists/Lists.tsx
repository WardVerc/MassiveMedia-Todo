import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./Lists.styles";
import CreateListDialog from "../Dialog/CreateListDialog";
import ListsHeader from "./ListsHeader/ListsHeader";
import List from "../List/List";
import useGetAllLists from "../../hooks/useGetAllLists";
import { ListsNavigationProps } from "../../App";
import AddListButton from "../List/AddListButton/AddListButton";

const Lists: React.FC<ListsNavigationProps> = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const { lists, isLoading, error, getLists } = useGetAllLists();

  const handlePress = () => {
    setVisible(true);
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      getLists();
    });
  }, [navigation]);

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
      <StatusBar style="auto" />
      <View>
        <ListsHeader />
        <CreateListDialog
          visible={visible}
          setVisible={setVisible}
          getLists={getLists}
        />
        <ScrollView contentContainerStyle={styles.listsContainer}>
          {lists.map((list) => {
            return (
              <List
                list={list}
                key={list.listId}
                navigation={navigation}
                route={route}
              />
            );
          })}
          <AddListButton createList={handlePress} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Lists;
