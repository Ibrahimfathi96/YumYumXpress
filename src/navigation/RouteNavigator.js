import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthNavigators";
import AppStack from "./AppStack";
import { SignInContext } from "../contexts/AuthContext";

export default function RouteNavigator() {
  const { signedIn } = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signedIn.userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
