import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlNullAvatar } from "../assets";
import { COLOR_DISABLED, COLOR_MAIN, FONT_NUNITO_BOLD, FONT_NUNITO_SEMI_BOLD } from '../tools/constant';

const HomeProfile = ({ picture, containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {picture &&
                <Image source={picture} style={styles.avatar} />
            }
            {!picture &&
                <Image source={IlNullAvatar} style={styles.avatar} />
            }
            <View>
                <Text style={styles.textName}>Candra Sidik Dermawan</Text>
                <Text style={styles.textProfession}>Mobile Developer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight:12
    },
    textName: {
        fontSize: 17,
        fontFamily: FONT_NUNITO_BOLD,
        color: COLOR_MAIN,
        textTransform:'uppercase'
    },
    textProfession: {
        fontSize: 14,
        fontFamily: FONT_NUNITO_SEMI_BOLD,
        color: COLOR_DISABLED
    }
})

export default HomeProfile