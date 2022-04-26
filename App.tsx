import React from "react";
import Lists from "./components/Lists/Lists";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import ListDetails from "./components/ListDetails/ListDetails";

export type StackParamList = {
  Lists: undefined;
  ListDetails: { listId: number };
};

const Stack = createNativeStackNavigator<StackParamList>();

export type ListsNavigationProps = NativeStackScreenProps<
  StackParamList,
  "Lists"
>;
export type ListDetailsNavigationProps = NativeStackScreenProps<
  StackParamList,
  "ListDetails"
>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lists">
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
