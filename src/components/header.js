import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { COLOR_BLACK, COLOR_WHITE } from '../tools/constant'
import MyIcon from './MyIcon';

const CustomHeader = ({
    containerStyle, showIcon, title, onPressed, typeIcon, labelIcon, colorIcon,
    sizeIcon, ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity onPress={onPressed}>
                <MyIcon
                    type={typeIcon}
                    name={labelIcon}
                    color={colorIcon}
                    size={sizeIcon}
                    {...props}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: 24 }} />
        </View>
    )
}
export default CustomHeader

const styles = StyleSheet.create({
    container: {
        // height:30,
        paddingHorizontal: 30,
        marginTop: 5,
        marginBottom: 20,
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

