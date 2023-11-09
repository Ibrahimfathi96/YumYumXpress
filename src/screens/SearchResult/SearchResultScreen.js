import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import styles from "./SearchResult.styles";
import SearchResultCard from "../../components/SearchResultCard";
import { restaurantsData } from "../../global/data";
import { Colors } from "../../global/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;
export default function SearchResultScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ backgroundColor: Colors.cardBackground }}
          data={restaurantsData}
          keyExtractor={(_, index) => index.toString()}
          ListHeaderComponent={
            <View style={styles.headerRow}>
              <Icon
                name="arrow-left"
                type="material-community"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <Text style={styles.listHeader}>
                {restaurantsData.length} Result for {route.params.item}
              </Text>
            </View>
          }
          renderItem={({ item, index }) =>
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              avgReview={item.averageReview}
              numOfReviews={item.numberOfReview}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
              onCardPressHandler={() => {
                navigation.navigate("RestaurantHomeScreen", {
                  id: index,
                  restaurant: item.restaurantName
                });
              }}
            />}
        />
      </View>
    </View>
  );
}
