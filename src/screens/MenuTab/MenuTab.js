import { View, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./MenuTab.styles";
import { menuDetailedData } from "../../global/data";
import MenuCard from "../../components/MenuCard";

export const Route1 = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            <Pressable>
              <MenuCard
                productName={item.meal}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </Pressable>}
        />
      </View>
    </View>
  );
};
export const Route2 = () => {
  // return <View style={{ ...styles.container, backgroundColor: "#DDA0DD" }} />;
  return <Route1 />;
};
export const Route3 = () => {
  // return <View style={{ ...styles.container, backgroundColor: "#DA70D6" }} />;
  return <Route1 />;
};
export const Route4 = () => {
  // return <View style={{ ...styles.container, backgroundColor: "#BA55D3" }} />;
  return <Route1 />;
};
export const Route5 = () => {
  // return <View style={{ ...styles.container, backgroundColor: "#8A2BE2" }} />;
  return <Route1 />;
};
export const Route6 = () => {
  // return <View style={{ ...styles.container, backgroundColor: "#9400D3" }} />;
  return <Route1 />;
};
export const Route7 = () => {
  // return <View style={{ ...styles.container, backgroundColor: "#9932CC" }} />;
  return <Route1 />;
};
export const Route8 = () => {
  // return <View style={{ ...styles.container, backgroundColor: "#800080" }} />;
  return <Route1 />;
};
