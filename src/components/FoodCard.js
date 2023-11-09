import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { Colors } from "../global/styles";
import { Icon } from "react-native-elements";

export default function FoodCard({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercentage,
  numberOfReviews,
  businessAddress,
  faraway,
  averageReview,
  images,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.image, width: screenWidth }}
          source={{ uri: images }}
          resizeMode="cover"
        />
        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={Colors.grey2}
                size={18}
                iconStyle={{ marginTop: 4 }}
              />
              <Text style={styles.minutes}>{faraway} mins</Text>
            </View>

            <View style={{ flex: 9, flexDirection: "row" }}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.averageReview}>{averageReview}</Text>
        <Text style={styles.numberOfReviews}>{numberOfReviews} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginLeft: 8,
    paddingBottom: 16,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  image: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    height: 150,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.grey1,
    marginTop: 6,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: Colors.grey4,
    paddingHorizontal: 6,
    borderRightWidth: 1,
  },
  minutes: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 6,
    color: Colors.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 6,
    color: Colors.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(52,52,52,0.3)",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 22,
  },
  averageReview: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -4,
  },
  numberOfReviews: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    marginRight: 0,
    marginLeft: 0,
  },
});
