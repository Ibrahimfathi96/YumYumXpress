import {Dimensions, StyleSheet} from "react-native";
import {Colors} from "../../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
    image: {
        flex: 1, // Make the image expand to fill the container
        resizeMode: "cover",
    },
    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
        overflow: "hidden", // This is important for the borderRadius to take effect
    },
    listHeader: {
        fontSize: 16,
        color: Colors.grey1,
        fontWeight: "600",
        marginLeft: 16,
        marginBottom: 10,
    },
    textView: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52,52,52,0.3)",
    },
});
export default styles;
