import { StyleSheet, Dimensions } from "react-native";
import { Colors, fonts, FONTS } from "../../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default (styles = StyleSheet.create({
  container: {
    flex: 1
  },
  discountView: {
    padding: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  discountText: {
    color: "green",
    fontSize: 14,
    fontWeight: "bold"
  },
  restaurantDataMainView: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 6,
    marginHorizontal: 10,
    justifyContent: "space-between"
  },
  restaurantDataView: {
    flex: 8
  },
  restaurantNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.grey1
  },
  foodTypeText: {
    fontSize: 14,
    color: Colors.grey3
  },
  starIconView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6
  },
  reviewText: {
    fontSize: 14,
    color: Colors.grey3,
    marginLeft: 2,
    marginRight: 6
  },
  deliveryAndCollectText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.grey1
  },
  collectAndDeliveryTimerView: {
    width: 40,
    height: 40,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-around"
  },
  timeText: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    fontWeight: "bold",
    color: Colors.black,
    marginTop: 6
  },
  deliveryAndCollectView: {
    flex: 3,
    alignItems: "center"
  },
  minuteText: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: Colors.black,
    marginBottom: 6
  },
  TabsView: {
    elevation: 20,
    backgroundColor: Colors.cardBackground,
    marginBottom: 4
  },
  bottomCartView: {
    backgroundColor: Colors.PrimaryColor,
    height: 50,
    alignContent: "center",
    marginBottom: 0,
    justifyContent: "center"
  },
  bottomCartWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cartNumberView: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: Colors.cardBackground,
    borderRadius: 6,
    paddingBottom: 2
  },
  cartText: {
    paddingHorizontal: 8,
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.cardBackground
  },
  tab: {
    paddingTop: 0,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: "space-between",
    alignItems: "center"
  },
  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  tabLabel: {
    fontWeight: "bold",
    color: "white"
  },
  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 46
  },
  menuHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.PrimaryColor,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 26
  },
  menuHeaderText: {
    fontWeight: "bold",
    marginLeft: 40,
    color: "white",
    fontSize: 22
  },
}));
