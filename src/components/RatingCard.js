import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating } from 'react-native-ratings';
import { COLOR_BLACK, COLOR_DISABLED, COLOR_WHITE, FONT_NUNITO_REGULAR, FONT_NUNITO_SEMI_BOLD } from '../tools/constant';

const RatingCard = ({ image, fullName, profession, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={{ uri: image }}
                    resizeMode='cover'
                    style={styles.imageStyle} />
                <View>
                    <Text style={styles.firstTextStyle}>{fullName}</Text>
                    <Text style={styles.secondTextStyle}>{profession}</Text>
                </View>
            </View>
            <Rating
                startingValue={value}
                style={{ paddingVertical: 10, }}
                readonly
                imageSize={15}
            />
        </View>
    )
}

export default RatingCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    content: {
        flexDirection: 'row',
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginRight: 12
    },
    firstTextStyle: {
        fontSize: 16,
        color: COLOR_BLACK,
        fontFamily: FONT_NUNITO_REGULAR,
    },
    secondTextStyle: {
        fontSize: 14,
        color: COLOR_DISABLED,
        fontFamily: FONT_NUNITO_REGULAR
    },
})