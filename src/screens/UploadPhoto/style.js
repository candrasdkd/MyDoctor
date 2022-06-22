import { StyleSheet } from "react-native";
import { COLOR_WHITE, COLOR_BLACK, COLOR_MAIN, FONT_NUNITO_REGULAR, FONT_NUNITO_BOLD, COLOR_REGULER_BLACK } from "../../tools/constant";
import { getScreenDimension, ios, } from "../../tools/helper";
const { width } = getScreenDimension();

export default StyleSheet.create({
    page: {
        backgroundColor: COLOR_WHITE,
        flex: 1,
        paddingVertical: ios ? 20 : 30,
    },
    content:{
        flex:1,
        paddingHorizontal:40,
        paddingBottom:40,
        justifyContent:'space-between',
    },
    profile:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    avatar: {
        width: width / 3,
        height: width / 3,
    },
    avatarWrapper: {
        borderWidth: 1,
        borderColor: COLOR_MAIN,
        width: width / 3,
        height: width / 3,
        borderRadius: width / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconAdd: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    textName: {
        fontSize: 24,
        fontFamily: FONT_NUNITO_BOLD,
        color: COLOR_BLACK,
        textAlign: 'center'
    },
    textJob: {
        fontSize: 18,
        fontFamily: FONT_NUNITO_REGULAR,
        color: COLOR_REGULER_BLACK,
        textAlign: 'center'
    }

});