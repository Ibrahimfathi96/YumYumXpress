import { StyleSheet } from "react-native";
import { Colors } from "../../../global/styles";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 16,
    borderBottomColor: Colors.grey5,
  },
  text1: {
    color: Colors.grey3,
    fontSize: 18,
    fontWeight: "bold",
  },
});
