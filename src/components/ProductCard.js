import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../global/styles";

const ProductCard = ({ productName, productPrice, productImage }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.textView}>
        <View style={styles.productNameView}>
          <Text style={styles.text}>{productName}</Text>
          <Text style={styles.text}>{productPrice} L.E</Text>
        </View>
        <View style={styles.productImageView}>
          <Image source={{ uri: productImage }} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "white",
    elevation: 8,
    shadowOpacity: 0.4,
    margin: 6,
    width: 210,
    padding: 10,
    borderRadius: 6,
  },
  textView: {
    flexDirection: "row",
    padding: 0,
    justifyContent: "space-between",
  },
  productNameView: {
    justifyContent: "space-between",
    width: 110,
  },
  productImageView: {
    width: 75,
    height: 65,
  },
  image: {
    width: 75,
    height: 65,
  },
  text: {
    fontSize: 16,
    color: Colors.grey1,
  },
});
