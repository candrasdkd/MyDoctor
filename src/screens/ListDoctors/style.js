import { StyleSheet } from "react-native";
import { COLOR_WHITE, COLOR_TRANSPARENT_DARK, COLOR_BLACK } from "../../tools/constant";
import { getScreenDimension, ios } from "../../tools/helper";
const { height, width } = getScreenDimension();

export default StyleSheet.create({
    page: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
        paddingTop: ios ? 0 : 25,
    },
});