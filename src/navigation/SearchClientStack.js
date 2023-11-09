import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/Search/SearchScreen";
import SearchResultScreen from "../screens/SearchResult/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen/RestaurantHomeScreen";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute
} from "@react-navigation/native";
import MenuDetails from "../screens/MenuDetails/MenuDetails";

const SearchClient = createStackNavigator();

export function SearchClientStack() {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(
    () => {
      const routeName = getFocusedRouteNameFromRoute(route);
      if (
        routeName == "RestaurantHomeScreen" ||
        routeName == "MenuDetailsScreen"
      ) {
        navigation.setOptions({
          tabBarStyle: { display: "none" },
          tabBarVisible: false
        });
      } else {
        navigation.setOptions({ tabBarVisible: true });
      }
    },
    [navigation, route]
  );
  return (
    <SearchClient.Navigator>
      <SearchClient.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false
        })}
      />
      <SearchClient.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false
        })}
      />
      <SearchClient.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={() => ({
          headerShown: false
        })}
      />
      <SearchClient.Screen
        name="MenuDetailsScreen"
        component={MenuDetails}
        options={() => ({
          headerShown: false
        })}
      />
    </SearchClient.Navigator>
  );
}
