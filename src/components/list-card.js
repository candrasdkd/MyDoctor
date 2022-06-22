import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR_BLACK, COLOR_WHITE } from '../tools/constant'
import { android } from '../tools/helper'

const ListCard = () => {
  return (
    <View>
      <Text>ListCard</Text>
    </View>
  )
}

export default ListCard

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: COLOR_WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: android ? 30 : 0,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        color: COLOR_BLACK,
        flex: 1,
    }
})