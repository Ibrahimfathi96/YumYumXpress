import { StyleSheet } from "react-native";
import { Colors } from "../../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    flex: 3,
    alignContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  titleText: {
    fontSize: 26,
    color: Colors.PrimaryColor,
    fontWeight: "bold",
  },
  swiperContainer: {
    flex: 4,
    justifyContent: "center",
  },
  swiper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 24,
    backgroundColor: Colors.PrimaryColor,
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey1,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: Colors.grey1,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  buttonView: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 20,
  },
  buttonMainView: {
    flex: 4,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
export default styles;
