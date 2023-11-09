import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Colors } from "../global/styles";
import ProductCard from "./ProductCard";
import { ProductsData } from "../global/data";

const SearchResultCard = ({
  onCardPressHandler,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPrecentage,
  numOfReviews,
  avgReview,
  businessAddress,
  farAway,
  images,
  productData,
  screenWidth,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onCardPressHandler}>
        <View style={styles.cardView}>
          <View style={{ height: 150 }}>
            <ImageBackground
              style={{ height: 160 }}
              source={{ uri: images }}
              imageStyle={styles.bgImageStyle}
            />

            <View style={styles.review}>
              <Text style={styles.avgReviewText}>{avgReview}</Text>
              <Text style={styles.numOfReviewsText}>
                {numOfReviews} reviews
              </Text>
            </View>
          </View>

          <View style={styles.restaurantDataView}>
            <View style={{ paddingTop: 6 }}>
              <Text style={styles.restaurantNameText}>{restaurantName}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.farAwayView}>
                <Icon
                  name="place"
                  type="material"
                  color={Colors.cardComment}
                  size={18}
                  iconStyle={{ marginTop: 4, marginLeft: -4 }}
                />
                <Text style={styles.view5}>{farAway} mins</Text>
              </View>
              <View style={{ flex: 9 }}>
                <Text style={styles.businessAddressText}>
                  {businessAddress}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 6, paddingBottom: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: Colors.cardBackground }}
          data={ProductsData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, _ }) => (
            <ProductCard
              productImage={item.image}
              productName={item.name}
              productPrice={item.price}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 10,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -6,
  },
  restaurantDataView: {
    flexDirection: "column",
    marginHorizontal: 6,
    marginBottom: 10,
    marginLeft: 0,
    marginTop: 8,
  },
  farAwayView: {
    flex: 4,
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: Colors.grey4,
    paddingHorizontal: 6,
  },
  view5: {
    fontSize: 12,
    fontWeight: "bold",
    borderRightColor: Colors.grey3,
    paddingTop: 6,
  },
  review: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(52,52,52,0.4)",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 12,
  },
  bgImageStyle: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  avgReviewText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  numOfReviewsText: {
    color: "white",
    fontSize: 14,
    marginRight: 0,
    marginLeft: 0,
  },
  text34: {
    color: Colors.grey2,
    fontSize: 10,
    fontWeight: "bold",
  },
  restaurantNameText: {
    color: Colors.grey1,
    fontSize: 18,
    fontWeight: "bold",
  },
  businessAddressText: {
    color: Colors.grey2,
    fontSize: 12,
    paddingTop: 6,
    paddingHorizontal: 10,
  },
});
