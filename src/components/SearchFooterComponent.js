import {
  FlatList,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../screens/Search/SearchScreen.styles";
import { searchData } from "../global/data";
import { Colors } from "../global/styles";

export default function SearchFooterComponent() {
  const navigation = useNavigation();
  return (
    <FlatList
      style={{ marginBottom: 10 }}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={searchData}
      ListHeaderComponent={
        <Text style={[styles.listHeader, { marginTop: 8 }]}>
          More Categories
        </Text>
      }
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("SearchResultScreen", {
              item: item.name,
            });
          }}
        >
          <View style={styles.imageView}>
            <ImageBackground style={styles.image} source={item.image}>
              <View style={styles.textView}>
                <Text
                  style={{
                    color: Colors.cardBackground,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
}
