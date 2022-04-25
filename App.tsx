import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { styles } from "./App.styles";
import CreateListDialog from "./components/Dialog/CreateListDialog";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import useGetAllLists from "./hooks/useGetAllLists";

export default function App() {
  const [visible, setVisible] = useState(false);
  const { lists, isLoading, getLists } = useGetAllLists();

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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <CreateListDialog
        visible={visible}
        setVisible={setVisible}
        getLists={getLists}
      />
      <ScrollView contentContainerStyle={styles.listsContainer}>
        {lists.map((list) => {
          return <List list={list} key={list.listId} />;
        })}
      </ScrollView>
      <Button title="Add a list man" onPress={() => handlePress()} />
    </View>
  );
}
