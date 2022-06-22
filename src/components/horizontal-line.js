import React from 'react';
import { View } from 'react-native';

const styles = {
    horizontalLine: {
        borderWidth: 1,
    },
};

const HorizontalLine = ({ width, borderColor }) => (
    <View style={[styles.horizontalLine, { width, borderColor }]} />
);

export default HorizontalLine;

