import { StyleSheet } from "react-native";
import { COLOR_WHITE, COLOR_TRANSPARENT_DARK, COLOR_BLACK } from "../../tools/constant";
import { getScreenDimension, ios } from "../../tools/helper";
const { height, width } = getScreenDimension();

export default StyleSheet.create({
    page: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
    },
    bgTransparent: {
        backgroundColor: COLOR_TRANSPARENT_DARK,
        padding:40,
        justifyContent: 'space-between',
        height,
        width
    },
    image: {
        width: width / 3.5,
        height: width / 3.5,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Nunito-Bold',
        color: COLOR_WHITE,
        marginTop: 91
    }

});