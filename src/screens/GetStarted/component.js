import React from 'react'
import { View, Text, ImageBackground, Image, StatusBar, } from 'react-native'
import { IlLogo, IlGetStarted, } from "../../assets";
import { CustomButton, Gap } from '../../components';
import { NAV_NAME_LOGIN, NAV_NAME_REGISTER } from '../../tools/constant';
import navigationService from '../../navigation-service';
import LocalizedString from "../../tools/localization";
import Styles from "./style";

const GetStarted = () => {
    return (
        <ImageBackground source={IlGetStarted} style={Styles.page}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={Styles.bgTransparent}>
                <View>
                    <Image source={IlLogo} style={Styles.image} />
                    <Text style={Styles.title}>{LocalizedString.getStartedScreen.description}</Text>
                </View>
                <View>
                    <CustomButton
                        title={LocalizedString.getStartedScreen.buttonCaptionRegister}
                        onPressed={() => navigationService.navigate(NAV_NAME_REGISTER)}
                    />
                    <Gap height={16} />
                    <CustomButton
                        title={LocalizedString.getStartedScreen.buttonCaptionLogin}
                        type='secondary'
                        onPressed={() => navigationService.navigate(NAV_NAME_LOGIN)}
                    />
                </View>
            </View>


        </ImageBackground>
    )
}

export default GetStarted