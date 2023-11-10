import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsMapScreen from "../screens/RestaurantMap/RestaurantsMapScreen";
import AppDrawer from "./DrawerNavigation";

const AppStackNavigator = createStackNavigator();

export default function AppStack() {
  return (
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{
          headerShown: false,
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AppStackNavigator.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AppStackNavigator.Navigator>
  );
}
