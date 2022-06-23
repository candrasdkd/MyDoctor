import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { COLOR_BLACK, COLOR_MAIN, COLOR_WHITE, FONT_NUNITO_SEMI_BOLD } from '../tools/constant'
import { getScreenDimension } from '../tools/helper';
const { height, width } = getScreenDimension();

const CustomCard = ({
  onPressed, firstTitle, secondTitle, image, buttonStyle,
  firstTitleStyle, secondTitleStyle, ...props
}) => {
  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        {...props}
        style={[styles.cardButton, buttonStyle]}
        onPress={onPressed}
      >
        <View style={styles.textCardWrapper}>
          <Text style={[styles.firstTitle, firstTitleStyle]}>{firstTitle}</Text>
          <Text style={[styles.secondTitle, secondTitleStyle]}>{secondTitle}</Text>
        </View>
        <Image
          style={[styles.image]}
          source={{ uri: image }}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  )
}

export default CustomCard

const styles = StyleSheet.create({
  cardWrapper: {
    height: height / 5,
    width: width / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  cardButton: {
    backgroundColor: COLOR_MAIN,
    height: '90%',
    width: '90%',
    borderRadius: 20,
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textCardWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 70,
  },
  firstTitle: {
    fontSize: 14,
    color: COLOR_WHITE,
    fontFamily: FONT_NUNITO_SEMI_BOLD
  },
  secondTitle: {
    fontSize: 16,
    color: COLOR_WHITE,
    fontFamily: FONT_NUNITO_SEMI_BOLD
  },
})