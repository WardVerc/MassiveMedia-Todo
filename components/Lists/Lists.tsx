import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, Text, View } from "react-native";
import { styles } from "./Lists.styles";
import CreateListDialog from "../Dialog/CreateListDialog";
import Header from "../Header/Header";
import List from "../List/List";
import useGetAllLists from "../../hooks/useGetAllLists";
import { ListsNavigationProps } from "../../App";

const Lists: React.FC<ListsNavigationProps> = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const { lists, isLoading, error, getLists } = useGetAllLists();

  const handlePress = () => {
    setVisible(true);
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
        {/* user shouldnt need to restart app if error */}
        <Text>Please restart the app.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Header />
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
        </ScrollView>
        <Button title="Add a list man" onPress={() => handlePress()} />
      </View>
    </View>
  );
};

export default Lists;
