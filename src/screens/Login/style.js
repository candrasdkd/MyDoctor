import { StyleSheet } from "react-native";
import { COLOR_WHITE, COLOR_BLACK } from "../../tools/constant";
import { getScreenDimension, ios } from "../../tools/helper";
const { height, width } = getScreenDimension();

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
        fontSize: 20,
        fontFamily: 'Nunito-Bold',
        color: COLOR_BLACK,
        marginVertical: 40,
        maxWidth: width - 150,
    }

});