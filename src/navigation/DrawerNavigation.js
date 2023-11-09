import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "../global/styles";
import { Icon } from "react-native-elements";
import RootClientTabs from "./ClientTabs";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen/BusinessConsoleScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300
        }
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: "Client",
          drawerIcon: ({ focused, size }) =>
            <Icon
              name="home"
              type="material-community"
              size={size}
              color={focused ? Colors.blue : Colors.grey2}
            />
        }}
      />
      <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: "Business Console",
          drawerIcon: ({ focused, size }) =>
            <Icon
              name="business"
              type="material"
              size={size}
              color={focused ? Colors.PrimaryColor : Colors.grey2}
            />
        }}
      />
    </Drawer.Navigator>
  );
}
