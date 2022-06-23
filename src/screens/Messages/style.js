import { StyleSheet } from "react-native";
import { COLOR_WHITE } from "../../tools/constant";
import { ios } from "../../tools/helper";

export default StyleSheet.create({
    page: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
        paddingVertical: ios ? 20 : 30,
    },
});