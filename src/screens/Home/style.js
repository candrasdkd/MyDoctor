import { StyleSheet } from "react-native";
import { COLOR_WHITE, COLOR_TRANSPARENT_DARK, COLOR_BLACK, FONT_NUNITO_BOLD, COLOR_MAIN, FONT_NUNITO_SEMI_BOLD, FONT_NUNITO_REGULAR, COLOR_DISABLED } from "../../tools/constant";
import { getScreenDimension, ios } from "../../tools/helper";
const { height, width } = getScreenDimension();

export default StyleSheet.create({
    page: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
        paddingVertical: ios ? 0 : 25,
    },
    scrollWrapper: {
        paddingVertical: ios ? 20 : 20,
        flex: 1
    },
    textWelcome: {
        fontSize: 20,
        fontFamily: FONT_NUNITO_BOLD,
        color: COLOR_BLACK,
        marginTop: 30,
        marginBottom: 16,
        marginHorizontal: 25,
        maxWidth: 250
    },
    cardWrapper: {
        height: height / 5,
        width: width / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    cardButton: {
        backgroundColor: COLOR_MAIN,
        height: '90%',
        width: '90%',
        borderRadius: 20,
        shadowColor: COLOR_BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textCardWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstTitle: {
        fontSize: 14,
        color: COLOR_WHITE,
        fontFamily: FONT_NUNITO_SEMI_BOLD
    },
    secondTitle: {
        fontSize: 16,
        color: COLOR_WHITE,
        fontFamily: FONT_NUNITO_SEMI_BOLD
    },
    categoryText: {
        fontSize: 16,
        marginHorizontal: 25,
        color: COLOR_BLACK,
        fontFamily: FONT_NUNITO_SEMI_BOLD
    },
    sectionLabel: {
        marginVertical: 20,
        marginHorizontal: 25,
    },
    fullName: {
        fontSize: 16,
        color: COLOR_BLACK,
        fontFamily: FONT_NUNITO_REGULAR,

    },
    profession: {
        fontSize: 14,
        color: COLOR_DISABLED,
        fontFamily: FONT_NUNITO_REGULAR
    },
});