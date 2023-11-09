import React, { useState } from "react";
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8
} from "../MenuTab/MenuTab";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./MenuDetails.styles";
import { menuTabs } from "../../global/data";
import { TabView, TabBar } from "react-native-tab-view";
import { Colors } from "../../global/styles";
import { Icon } from "react-native-elements";
import initialLayout from "./MenuDetails.styles";

const MenuDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [routes] = useState(menuTabs);
  const [index, setIndex] = useState(0);

  const renderTabBar = props =>
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.cardBackground }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />;

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return <Route1 name={navigation} />;
      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuHeaderView}>
        <Icon
          name="arrow-left"
          type="material-community"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.menuHeaderText}>Menu</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default MenuDetails;
