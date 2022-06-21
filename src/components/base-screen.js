import React from 'react';
import { View, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { COLOR_WHITE } from '../tools/constant';
import { getScreenDimension } from '../tools/helper';


const { height } = getScreenDimension();

const styles = {
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    height
  },
};


const BaseScreen = ({
  children, containerStyle, statusbarColor, useScrollViewContainer, ...props
}) => {
  const Container = useScrollViewContainer ? ScrollView : View;
  return (
    <SafeAreaView style={styles.container} {...props}>
      <StatusBar
        translucent
        backgroundColor={statusbarColor}
        barStyle={statusbarColor !== COLOR_WHITE ? 'light-content' : 'dark-content'}
      />
      <Container style={[styles.container, containerStyle]}>
        {children}
      </Container>
    </SafeAreaView>
  );
};
export default BaseScreen;

