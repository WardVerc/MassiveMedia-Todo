import React from "react";
import Lists from "./components/Lists/Lists";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import ListDetails from "./components/ListDetails/ListDetails";
import { ListType } from "./hooks/useGetAllLists";

export type StackParamList = {
  Lists: undefined;
  "List details": { list: ListType };
};

const Stack = createNativeStackNavigator<StackParamList>();

export type ListsNavigationProps = NativeStackScreenProps<
  StackParamList,
  "Lists"
>;
export type ListDetailsNavigationProps = NativeStackScreenProps<
  StackParamList,
  "List details"
>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lists">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Lists"
          component={Lists}
        />
        <Stack.Screen name="List details" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
