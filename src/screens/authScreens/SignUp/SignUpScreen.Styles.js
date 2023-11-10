import { StyleSheet } from "react-native";
import { Colors } from "../../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  title2: {
    color: Colors.grey2,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 2,
  },
  formContainer: {
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  textInputView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.grey3,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  termsAndConditionView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  termsAndConditionText: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.grey2,
    fontWeight: "400",
  },
  termsAndConditionText2: {
    color: "#3fbe70",
    fontWeight: "600",
  },
  signInButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.PrimaryColor,
    height: 50,
    paddingHorizontal: 20,
  },
  signInButtonTitle: {
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
  haveAccountText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginVertical: 20,
  },
});
export default styles;
