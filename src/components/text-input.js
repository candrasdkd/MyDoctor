import { Text, StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { COLOR_DISABLED } from '../tools/constant'

const CustomTextInput = ({ label }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: COLOR_DISABLED,
        borderRadius: 10,
        padding: 12,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Nunito-Regular',
        marginBottom: 6,
        color: COLOR_DISABLED
    }
})

export default CustomTextInput