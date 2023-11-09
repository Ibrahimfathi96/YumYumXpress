import { StyleSheet } from "react-native";
import { Colors } from "../../global/styles";

export default (styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10
  },
  listHeader: {
    color: Colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 16,
    fontWeight: "bold"
  }
}));
