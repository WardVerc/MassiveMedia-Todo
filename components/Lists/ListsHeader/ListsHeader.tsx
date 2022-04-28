import React from "react";
import { View, Text } from "react-native";
import { styles } from "./ListsHeader.styles";

const ListsHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hello, Massive Media!</Text>
    </View>
  );
};

export default ListsHeader;
