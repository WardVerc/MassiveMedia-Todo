import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome, Massive Media!</Text>
    </View>
  );
};

export default Header;
