import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../screens/authScreens/OnBoarding/OnBoardingScreen";
import SignInScreen from "../screens/authScreens/SignIn/SignInScreen";
import SignUpScreen from "../screens/authScreens/SignUp/SignUpScreen";


const AuthStackNavigator = createStackNavigator();
export default function AuthStack() {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStackNavigator.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStackNavigator.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
          // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthStackNavigator.Navigator>
  );
}
