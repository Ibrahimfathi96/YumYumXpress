import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../global/styles";

const MenuCard = ({ productName, image, price, productDetails }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardRow}>
        <View style={styles.mealsData}>
          <Text style={styles.productName}>
            {productName}
          </Text>
          <View>
            <Text style={styles.productDetails}>
              {productDetails}
            </Text>
          </View>
          <Text style={styles.price}>
            {price} EGP
          </Text>
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    elevation: 4,
    shadowOpacity: 0.6,
    shadowColor: "black",
    marginHorizontal: 8,
    marginVertical: 6,
    padding: 6,
    height: 90
  },

  cardRow: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    justifyContent: "space-between",
    alignContent: "center"
  },

  mealsData: {
    flex: 5,
    justifyContent: "space-between",
    paddingLeft: 4
  },

  productName: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: "bold"
  },

  productDetails: {
    fontSize: 15,
    color: Colors.grey3,
    marginRight: 2
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black
  },
  imageView: {
    flex: 2,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  },
  image: {
    flex: 1
  }
});
