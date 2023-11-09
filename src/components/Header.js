import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors, Parameters } from "../global/styles";
import { Icon } from "react-native-elements";

export default function Header({ title, iconName, navigation }) {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          type="material-community"
          name={iconName}
          color={Colors.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: Parameters.HeaderHeight,
    backgroundColor: Colors.PrimaryColor,
    alignItems: "center",
  },
  headerText: {
    color: Colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
});
