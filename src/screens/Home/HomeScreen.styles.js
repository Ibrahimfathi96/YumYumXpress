import { StyleSheet } from "react-native";
import { Colors } from "../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 6,
  },
  deliveryButtonText: {
    marginLeft: 6,
    fontSize: 16,
    color: "black",
    fontWeight: "700",
  },
  filterRowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginVertical: 10,
  },
  addressAndClock: {
    flex: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.grey4,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  style1: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliverAndPickUpWrapper: {
    backgroundColor: Colors.cardBackground,
    paddingBottom: 6,
  },
  deliverAndPickUpView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  headerText: {
    color: Colors.grey2,
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  headerTextView: {
    backgroundColor: Colors.grey5,
    paddingVertical: 2,
  },
  smallCard: {
    borderRadius: 20,
    backgroundColor: Colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    width: 80,
    height: 100,
    margin: 10,
  },
  selectedSmallCard: {
    borderRadius: 20,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    width: 80,
    height: 100,
    margin: 10,
  },
  smallImage: {
    height: 70,
    width: 70,
    borderRadius: 20,
  },
  selectedSmallCardText: {
    fontWeight: "bold",
    color: Colors.cardBackground,
  },
  smallCardText: {
    fontWeight: "bold",
    color: Colors.grey2,
  },
  countdownText: {
    marginLeft: 16,
    fontSize: 16,
    marginTop: -10,
    marginRight: 6,
  },
  floatingButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: "white",
    elevation: 10,
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
