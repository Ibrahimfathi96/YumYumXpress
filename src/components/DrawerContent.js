import { View, Text, Switch, StyleSheet, Alert } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Icon, Avatar } from "react-native-elements";
import { Colors } from "../global/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { auth } from "../../firebaseConfig";
import { SignInContext } from "../contexts/AuthContext";

export default function DrawerContent(props) {
  const insets = useSafeAreaInsets;
  const { dispatchSignedIn } = useContext(SignInContext);
  async function signOut() {
    try {
      await auth.signOut().then(() => {
        console.log("Signed out successfully");
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: {
            userToken: null,
          },
        });
      });
    } catch (error) {
      Alert.alert("ErrorMsg:", error.message);
      Alert.alert("ErrorCode:", error.code);
    }
  }
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: insets.top,
        }}
        {...props}
      >
        <View style={styles.drawerHeader}>
          <View style={styles.avatarRow}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={70}
              source={require("../../assets/images/avatar.png")}
            />

            <View style={styles.titleView}>
              <Text style={styles.headerTitle}>Ibrahim Fathi</Text>
              <Text style={styles.headerSubTitle}>
                ibrahimfathi796@outlook.com
              </Text>
            </View>
          </View>

          <View style={styles.myCartAndFavMainView}>
            <View style={styles.myCartAndFavView}>
              <View style={styles.myCartAndFavView}>
                <Text style={styles.myCartAndFavNumber}>1</Text>
                <Text style={styles.myCartAndFavText}>My Favorites</Text>
              </View>
            </View>

            <View style={styles.myCartAndFavView}>
              <View style={styles.myCartAndFavView}>
                <Text style={styles.myCartAndFavNumber}>0</Text>
                <Text style={styles.myCartAndFavText}>My Cart</Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />

        <View style={styles.preferencesView}>
          <Text style={styles.preferencesText}>Preferences</Text>
          <View style={styles.switchView}>
            <Text style={styles.darkThemeText}>Dark Theme</Text>
            <View style={styles.switchButtonView}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                // thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                thumbColor={"#f4f3f4"}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        onPress={() => {
          console.log("Sign Out pressed");
          signOut();
        }}
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
            onPress={() => {
              console.log("Sign Out pressed");
              signOut();
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: Colors.PrimaryColor,
    paddingVertical: 10,
  },
  avatar: {
    borderWidth: 4,
    borderColor: "white",
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    color: Colors.cardBackground,
    fontSize: 18,
  },
  headerSubTitle: {
    color: Colors.cardBackground,
    fontSize: 14,
  },
  titleView: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 12,
  },
  myCartAndFavText: {
    color: Colors.cardBackground,
    fontSize: 14,
    fontWeight: "bold",
  },
  myCartAndFavNumber: {
    fontWeight: "bold",
    color: Colors.cardBackground,
    fontSize: 18,
  },
  myCartAndFavView: {
    alignItems: "center",
    justifyContent: "center",
  },
  myCartAndFav: {
    flexDirection: "row",
  },
  myCartAndFavMainView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 6,
  },
  preferencesView: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey5,
  },
  preferencesText: {
    fontSize: 16,
    color: Colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingVertical: 6,
    paddingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    color: Colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: "bold",
  },
  switchButtonView: {
    paddingRight: 10,
  },
});
