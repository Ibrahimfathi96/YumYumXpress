import { StyleSheet } from "react-native";
import { Colors, Parameters } from "../../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: Colors.grey2,
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: "500",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  text2: {
    textAlign: "right",
    marginHorizontal: 30,
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  text3: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginVertical: 20,
  },
  socialIcon: {
    borderRadius: 16,
    height: Parameters.HeaderHeight,
  },
  ORLine: {
    alignItems: "center",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 22,
  },
  ORText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 12,
  },
  line: {
    backgroundColor: "black",
    height: 2,
    flex: 1,
    alignSelf: "center",
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.PrimaryColor,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: Colors.PrimaryColor,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  buttonView: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
    margin: 10,
  },
});
export default styles;
