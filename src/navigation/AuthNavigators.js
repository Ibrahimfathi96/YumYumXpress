import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../screens/authScreens/OnBoarding/OnBoardingScreen";
import SignInScreen from "../screens/authScreens/SignIn/SignInScreen";
import SignUpScreen from "../screens/authScreens/SignUp/SignUpScreen";
import RestaurantsMapScreen from "../screens/RestaurantMap/RestaurantsMapScreen";
import AppDrawer from "./DrawerNavigation";

const AuthStackNavigator = createStackNavigator();
export default function AuthStack() {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          headerShown: false
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStackNavigator.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStackNavigator.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStackNavigator.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{
          headerShown: false
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStackNavigator.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthStackNavigator.Navigator>
  );
}
