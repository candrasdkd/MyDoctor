import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR_MAIN, COLOR_WHITE } from '../tools/constant'

const CustomButton = ({ type, title, onPressed, styleContainerButton, styleTextButton }) => {
    return (
        <TouchableOpacity
            style={[styles.containerButton(type), styleContainerButton]}
            onPress={onPressed}
        >
            <Text style={[styles.textButton(type), styleTextButton]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButton: type => ({
        backgroundColor: type === 'secondary' ? COLOR_WHITE : COLOR_MAIN,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    textButton: type => ({
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        color: type === 'secondary' ? COLOR_MAIN : COLOR_WHITE
    })
})

export default CustomButton