import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors, Parameters } from "../global/styles";
import { Icon, withBadge } from "react-native-elements";

export default function HomeHeader({ navigation }) {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View style={styles.IconView}>
        <Icon
          type="material-community"
          name="menu"
          color={Colors.cardBackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>YumYumXpress</Text>
      </View>

      <View style={styles.IconView}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={Colors.cardBackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.PrimaryColor,
    height: Parameters.HeaderHeight,
    paddingHorizontal: 16,
  },
  IconView: {
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.cardBackground,
    fontSize: 22,
    fontWeight: "500",
  },
});
