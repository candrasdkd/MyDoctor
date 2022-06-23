import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR_WHITE } from '../tools/constant';
import { ios } from '../tools/helper';

const BaseScreen = ({
  children, containerStyle, contentStyle, useScrollViewContainer = false, ...props
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {useScrollViewContainer &&
        <ScrollView
          style={[styles.contentWrapper, contentStyle]}
          showsVerticalScrollIndicator={false}
          {...props}
        >
          {children}
        </ScrollView>
      }
      {!useScrollViewContainer &&
        <View style={[styles.contentWrapper, contentStyle]}>
          {children}
        </View>
      }
    </SafeAreaView>
  );
};

const styles = {
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    paddingVertical: ios ? 0 : 25,
  },
  contentWrapper: {
    flex: 1,
  }
};

export default BaseScreen;

