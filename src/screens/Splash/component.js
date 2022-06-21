import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useCallback } from 'react'
import LottieView from 'lottie-react-native';
import Styles from './style'
import NavigationService from "../../navigation-service";
import { NAV_NAME_GET_STARTED } from '../../tools/constant';

const SplashScreen = () => {
    useCallback(
        setTimeout(() => {
            NavigationService.replace(NAV_NAME_GET_STARTED)
        }, 3000)
        , []
    )

    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar hidden />
            <View style={Styles.containerLottie}>
                <LottieView
                    source={require('../../assets/lotties/splash.json')}
                    autoPlay
                    loop={false}
                    resizeMode='cover'
                    style={Styles.lottie}
                />
                <Text style={Styles.title}>My Doctor</Text>
            </View>

        </SafeAreaView>
    )
}

export default SplashScreen