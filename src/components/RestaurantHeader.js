import React, { useState, useEffect } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../global/styles";
import { Icon } from "react-native-elements";
import { restaurantsData } from "../global/data";

const RestaurantHeader = ({ navigation, id }) => {
  const index10 = 10;
  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const likeHandler = () => {
    if (liked == false) setVisible(true);
    setLiked(!liked);
    setCounter(index10);
  };

  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          friction: 2,
          useNativeDriver: true,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{ uri: restaurantsData[id].images }}
      >
        <View style={styles.iconsView}>
          <View style={styles.icon}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={Colors.black}
              size={24}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>

          <View style={styles.icon}>
            <Icon
              name={
                liked && index10 == counter ? "favorite" : "favorite-border"
              }
              type="material"
              color="red"
              size={24}
              onPress={likeHandler}
            />
          </View>
        </View>
        <View style={styles.view4}>
          {visible && index10 == counter && (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: currentValue,
                  },
                ],
              }}
            >
              <Icon name="favorite" type="material" size={40} color="red" />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  iconsView: {
    marginHorizontal: 10,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: Colors.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  view4: {
    alignItems: "center",
    justifyContent: "center",
  },
});
