//* REACT IMPORT //
import * as React from "react";

//* RN NAVIGATION IMPOORTS //
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

//* SCREEN IMPORTS //
import HomeScrn from "../screens/Home/HomeScrn";

//* ROOT NAVIGATION CODE //
export function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
