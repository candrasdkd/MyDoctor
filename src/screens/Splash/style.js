import { StyleSheet } from "react-native";
import { COLOR_MAIN, COLOR_WHITE, FONT_NUNITO_BOLD } from "../../tools/constant";
import { getScreenDimension, ios } from "../../tools/helper";
const { height, width } = getScreenDimension();

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
        alignItems: 'center'
    },
    containerLottie: {
        width,
        height: ios ? height - 150 : height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottie: {
        width: '40%',
    },
    title: {
        fontSize: 28,
        fontFamily: FONT_NUNITO_BOLD,
        color: COLOR_MAIN,
    }

});