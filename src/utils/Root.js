//* REACT IMPORT //
import * as React from "react";

//* RN NAVIGATION IMPOORTS //
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

//* SCREEN IMPORTS //
import HomeScrn from "../screens/Home/HomeScrn";
import ProfileScrn from "../screens/Profile/ProfileScrn";
import CalendarScrn from "../screens/Calendar/CalendarScrn";

//* ROOT NAVIGATION CODE //
export function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScrn} />
        <Stack.Screen name="Profile" component={ProfileScrn} />
        <Stack.Screen name="Calendar" component={CalendarScrn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
