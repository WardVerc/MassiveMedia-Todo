import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ListDetails.styles";
import { ListDetailsNavigationProps } from "../../App";

const ListDetails: React.FC<ListDetailsNavigationProps> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>ListDetails of listId: {route.params.listId}</Text>
    </View>
  );
};

export default ListDetails;
