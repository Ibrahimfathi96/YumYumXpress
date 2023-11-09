import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./RestaurantHomeScreen.styles";
import RestaurantHeader from "../../components/RestaurantHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { restaurantsData, restaurantTabs, menuTabs } from "../../global/data";
import { Icon } from "react-native-elements";
import { Colors } from "../../global/styles";
import { TabView, TabBar } from "react-native-tab-view";
import MenuScreen from "../RestaurantTabs/MenuScreen/MenuScreen";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = SCREEN_WIDTH;
const RestaurantHomeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, restaurant } = route.params;
  const [routes] = useState(restaurantTabs);
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

  const menuPressed = () => {
    navigation.navigate("MenuDetailsScreen");
  };

  const updateRoute1 = () => {
    return <View />;
  };

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={1}>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />

          {restaurantsData[id].discount &&
            <View style={styles.discountView}>
              <Text style={styles.discountText}>
                GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL
              </Text>
            </View>}

          <View style={styles.restaurantDataMainView}>
            <View style={styles.restaurantDataView}>
              <Text style={styles.restaurantNameText}>
                {restaurantsData[id].restaurantName}
              </Text>
              <Text style={styles.foodTypeText}>
                {restaurantsData[id].foodType}
              </Text>
              <View style={styles.starIconView}>
                <Icon
                  name="star"
                  type="material-community"
                  color={Colors.grey3}
                  size={16}
                />
                <Text style={styles.reviewText}>
                  {restaurantsData[id].averageReview}
                </Text>
                <Text style={styles.reviewText}>
                  ({restaurantsData[id].numberOfReview}+)
                </Text>
                <Icon
                  name="map-marker"
                  type="material-community"
                  color={Colors.grey3}
                  size={16}
                />
                <Text style={styles.reviewText}>
                  {restaurantsData[id].farAway}m away
                </Text>
              </View>
            </View>
            <View style={styles.deliveryAndCollectView}>
              <Text style={styles.deliveryAndCollectText}>Collect</Text>
              <View style={styles.collectAndDeliveryTimerView}>
                <Text style={styles.timeText}>
                  {restaurantsData[id].collectTime}
                </Text>
                <Text style={styles.minuteText}>min</Text>
              </View>
            </View>
            <View style={styles.deliveryAndCollectView}>
              <Text style={styles.deliveryAndCollectText}>Delivery</Text>
              <View
                style={[
                  styles.collectAndDeliveryTimerView,
                  { backgroundColor: Colors.PrimaryColor }
                ]}
              >
                <Text style={[styles.timeText, { color: "white" }]}>
                  {restaurantsData[id].deliveryTime}
                </Text>
                <Text style={[styles.minuteText, { color: "white" }]}>min</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.TabsView}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={updateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        {index === 0 && <MenuScreen onPress={menuPressed} />}
      </ScrollView>

      <TouchableOpacity>
        <View style={styles.bottomCartView}>
          <View style={styles.bottomCartWrapper}>
            <Text style={styles.cartText}>View Cart</Text>
            <View style={styles.cartNumberView}>
              <Text style={styles.cartText}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantHomeScreen;
