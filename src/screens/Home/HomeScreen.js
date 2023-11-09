import {
  View,
  Pressable,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./HomeScreen.styles";
import HomeHeader from "../../components/HomeHeader";
import { Colors } from "../../global/styles";
import { Icon } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import { filterData, restaurantsData } from "../../global/data";
import FoodCard from "../../components/FoodCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function HomeScreen({ navigation }) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={styles.deliverAndPickUpWrapper}>
          <View style={styles.deliverAndPickUpView}>
            <Pressable
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery
                    ? Colors.PrimaryColor
                    : Colors.grey4,
                }}
              >
                <Text style={styles.deliveryButtonText}>Delivery</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                setDelivery(false);
                navigation.navigate("RestaurantsMapScreen");
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery
                    ? Colors.grey4
                    : Colors.PrimaryColor,
                }}
              >
                <Text style={styles.deliveryButtonText}>PickUp</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={{ backgroundColor: Colors.cardBackground }}>
          <View style={styles.filterRowView}>
            <View style={styles.addressAndClock}>
              <View style={styles.style1}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={Colors.grey1}
                  size={26}
                />
                <Text style={{ marginLeft: 6 }}>10th Ibrahim El-attar</Text>
              </View>
              <View style={styles.clockView}>
                <Icon
                  type="material-community"
                  name="clock-time-five"
                  color={Colors.grey1}
                  size={26}
                />
                <Text style={{ marginHorizontal: 6 }}>Now</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                type="material-community"
                name="tune"
                color={Colors.grey1}
                size={26}
              />
            </View>
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList
            data={filterData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => setIndexCheck(item.id)}>
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.selectedSmallCard }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={styles.smallImage}
                    source={item.image}
                    resizeMode="contain"
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.selectedSmallCardText }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now</Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginHorizontal: 10,
              }}
            >
              Options Changing in
            </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{
                backgroundColor: Colors.lightGreen,
                marginBottom: 0,
                marginTop: 10,
              }}
              digitTxtStyle={{
                color: Colors.cardBackground,
              }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "Min", s: "Sec" }}
              timeLabelStyle={{
                fontSize: 14,
                color: Colors.grey1,
                fontWeight: "600",
              }}
            />
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 10 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  faraway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions Available</Text>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 10 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  faraway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants In your Area</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {restaurantsData.map((item) => (
            <View key={item.id} style={{ paddingBottom: 10 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                faraway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReviews={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {delivery && (
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestaurantsMapScreen");
            }}
          >
            <Icon
              name="place"
              type="material"
              size={32}
              color={Colors.PrimaryColor}
            />
            <Text style={{ color: Colors.grey2 }}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
