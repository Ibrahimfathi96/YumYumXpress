import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./OnBoardingScreen.Styles";
import Swiper from "react-native-swiper";
import { Images, Parameters } from "../../../global/styles";
import { Button } from "react-native-elements";

export default function OnBoardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.titleText}>IN YOUR AREA</Text>
      </View>

      <View style={styles.swiperContainer}>
        <Swiper autoplay={true}>
          <View style={styles.swiper}>
            <Image
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
              source={{
                uri: Images.image1
              }}
            />
          </View>
          <View style={styles.swiper}>
            <Image
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
              source={{
                uri: Images.image2
              }}
            />
          </View>
          <View style={styles.swiper}>
            <Image
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
              source={{
                uri: Images.image3
              }}
            />
          </View>
          <View style={styles.swiper}>
            <Image
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
              source={{
                uri: Images.image4
              }}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.buttonMainView}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
            title="SIGN IN"
            buttonStyle={Parameters.styledButton}
            titleStyle={Parameters.buttonTitle}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
            title="CREATE ACCOUNT"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}
