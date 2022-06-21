import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR_DISABLED, COLOR_WHITE } from '../tools/constant'

const CustomTextInput = ({ title, size, align, onPressed }) => {
    return (
        <TouchableOpacity onPress={onPressed}>
            <Text style={styles.title(size, align)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: (size, align) => ({
        fontSize: size,
        fontFamily: 'Nunito-Regular',
        textAlign: 'center',
        color: COLOR_DISABLED,
        textDecorationLine: 'underline',
        textAlign: align,
    })
})

export default CustomTextInput