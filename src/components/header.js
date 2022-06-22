import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { COLOR_BLACK, COLOR_WHITE } from '../tools/constant'
import { IconBack } from '../assets';
import { android } from '../tools/helper';

const CustomHeader = ({ showIcon, title, onPressed, width, height, colorIcon, nameIcon }) => {
    const renderIcon = () => {
        if (nameIcon === 'backArrow') {
            return (
                <IconBack
                    width={width ? width : 24}
                    height={height ? height : 24}
                    fill={colorIcon ? colorIcon : COLOR_BLACK}
                />
            )
        }
    }

    return (
        <View style={styles.container}>
            {showIcon &&
                <TouchableOpacity onPress={onPressed}>
                    {renderIcon()}
                </TouchableOpacity>
            }
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: 24 }} />
        </View>
    )
}
export default CustomHeader

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: COLOR_WHITE,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        color: COLOR_BLACK,
        flex: 1,
    }
})

