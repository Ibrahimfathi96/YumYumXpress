import React from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./SearchScreen.styles";
import SearchComponent from "../../components/SearchComponent";
import { searchData } from "../../global/data";
import { Colors } from "../../global/styles";
import SearchFooterComponent from "../../components/SearchFooterComponent";

export default function SearchScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <SearchComponent />
      <FlatList
        style={{ marginBottom: 10 }}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={searchData}
        ListHeaderComponent={
          <Text style={styles.listHeader}>Top Categories</Text>
        }
        ListFooterComponent={<SearchFooterComponent />}
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
    </View>
  );
}
