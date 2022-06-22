import { StyleSheet } from "react-native";
import { COLOR_WHITE, COLOR_BLACK, FONT_NUNITO_EXTRA_BOLD } from "../../tools/constant";
import { getScreenDimension, ios, } from "../../tools/helper";
const { width } = getScreenDimension();

export default StyleSheet.create({
    page: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
        paddingVertical: ios ? 20 : 30,
    },
    image: {
        width: width / 3.5,
        height: width / 3.5,
    },
    title: {
        fontSize: 20,
        fontFamily: FONT_NUNITO_EXTRA_BOLD,
        color: COLOR_BLACK,
        marginVertical: 40,
        maxWidth: width - 150,
    }

});