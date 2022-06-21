import { StyleSheet } from "react-native";
import { COLOR_WHITE, COLOR_BLACK, FONT_NUNITO_BOLD } from "../../tools/constant";
import { getScreenDimension } from "../../tools/helper";
const { width } = getScreenDimension();

export default StyleSheet.create({
    page: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
    },
    image: {
        width: width / 3.5,
        height: width / 3.5,
    },
    title: {
        fontSize: 24,
        fontFamily: FONT_NUNITO_BOLD,
        color: COLOR_BLACK,
        marginVertical: 40,
        maxWidth: width - 150,
    }

});