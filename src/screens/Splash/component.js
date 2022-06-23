import { View, Text, StatusBar } from 'react-native'
import React, { useCallback } from 'react'
import LottieView from 'lottie-react-native';
import Styles from './Style'
import NavigationService from "../../navigation-service";
import { NAV_NAME_GET_STARTED } from '../../tools/constant';
import { BaseScreen } from '../../components';

const SplashScreen = () => {
    useCallback(
        setTimeout(() => {
            NavigationService.replace(NAV_NAME_GET_STARTED)
        }, 3000)
        , []
    )

    return (
        <BaseScreen containerStyle={{paddingVertical:0}}>
             <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
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
        </BaseScreen>
    )
}

export default SplashScreen