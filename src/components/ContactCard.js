import React from 'react'
import MyIcon from './MyIcon'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLOR_BLACK, COLOR_DISABLED, FONT_NUNITO_SEMI_BOLD } from '../tools/constant'

const ContactCard = ({
    image, firstText, secondText, typeIcon, labelIcon, colorIcon,
    sizeIcon, ...props
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('GO TO DETAIL CHAT')}
            >
                <Image
                    source={{ uri: image }}
                    resizeMode='cover'
                    style={styles.imageStyle}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.firstTextStyle} numberOfLines={1} ellipsizeMode={'tail'}>{firstText}</Text>
                    <Text style={styles.secondTextStyle} numberOfLines={1} ellipsizeMode={'tail'}>{secondText}</Text>
                </View>
                <View>
                    <MyIcon
                        type={typeIcon}
                        name={labelIcon}
                        color={colorIcon}
                        size={sizeIcon}
                        {...props}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding:4,
    },
    button:{
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: 10, 
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginRight: 14,
    },
    firstTextStyle: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: FONT_NUNITO_SEMI_BOLD,
        color: COLOR_BLACK,
        maxWidth: '95%',
    },
    secondTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: FONT_NUNITO_SEMI_BOLD,
        color: COLOR_DISABLED,
        maxWidth: '95%',
    }
})

export default ContactCard

