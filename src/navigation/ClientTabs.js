import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import MyOrdersScreen from "../screens/MyOrders/MyOrdersScreen";
import MyProfile from "../screens/MyAccount/MyAccountScreen";
import { Icon } from "react-native-elements";
import { Colors } from "../global/styles";
import { SearchClientStack } from "./SearchClientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.PrimaryColor,
        headerShown: false,
        tabBarLabel:
          route.name === "HomeScreen"
            ? "Home"
            : route.name === "SearchClientStack"
              ? "Search"
              : route.name === "MyOrdersScreen" ? "My Orders" : "Profile",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = "home";
          } else if (route.name === "SearchClientStack") {
            iconName = "search";
          } else if (route.name === "MyOrdersScreen") {
            iconName = "view-list";
          } else {
            iconName = "person";
          }

          return (
            <Icon name={iconName} type="material" color={color} size={size} />
          );
        }
      })}
    >
      <ClientTabs.Screen name="HomeScreen" component={HomeScreen} />
      <ClientTabs.Screen
        name="SearchClientStack"
        component={SearchClientStack}
      />
      <ClientTabs.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
      <ClientTabs.Screen name="Profile" component={MyProfile} />
    </ClientTabs.Navigator>
  );
}
