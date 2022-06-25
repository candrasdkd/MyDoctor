import { StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Loading = () => {
    return (
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                source={require('../assets/lotties/loading.json')}
                autoPlay
                resizeMode='contain'
                style={{ height: 100 }}
            />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})