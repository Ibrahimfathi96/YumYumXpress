import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../global/styles";
const SCREEN_WIDTH = Dimensions.get("window").width;
export const initialLayout = SCREEN_WIDTH;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0
  },

  menuHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.PrimaryColor,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25
  },

  menuHeaderText: {
    fontWeight: "bold",
    marginLeft: 40,
    color: "white",
    fontSize: 22
  },

  view2: {
    marginTop: 5,
    paddingBottom: 20
  },

  tab: {
    paddingTop: 0,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: "space-between"
    // alignItems:"center"
  },

  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },

  tabLabel: {
    fontWeight: "bold",
    color: Colors.cardBackground
  },

  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45
  },
  scene2: {
    backgroundColor: "#673ab7"
  }
});
export default styles;
