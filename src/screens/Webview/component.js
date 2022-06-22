import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import NavigationService from "../../navigation-service";
import WebView from 'react-native-webview';
import Styles from "./style";
import { android } from '../../tools/helper';

const WebviewScreen = ({ route }) => {
    return (
        <SafeAreaView style={Styles.page}>
            <StatusBar hidden />
            <WebView
                originWhitelist={['*']}
                source={{ uri: route.params.url }}
                style={{ flex: 1 }}
                startInLoadingState
                javaScriptEnabled={true}
                userAgent={
                    android ?
                        'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.99 Mobile Safari/537.36' :
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/102.0.5005.87 Mobile/15E148 Safari/604.1'}
            />
        </SafeAreaView>
    )
}

export default WebviewScreen