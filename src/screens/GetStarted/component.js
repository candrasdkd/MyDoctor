import React from 'react'
import { View, Text, ImageBackground, Image, StatusBar, } from 'react-native'
import { IlLogo, IlGetStarted, } from "../../assets";
import { CustomButton } from '../../components';
import navigationService from '../../navigation-service';
import { NAV_NAME_LOGIN, NAV_NAME_REGISTER } from '../../tools/constant';
import Styles from "./style";

const GetStarted = () => {
    return (
        <ImageBackground source={IlGetStarted} style={Styles.page}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={Styles.bgTransparent}>
                <View>
                    <Image source={IlLogo} style={Styles.image} />
                    <Text style={Styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
                </View>
                <View>
                    <CustomButton
                        title='Get Started'
                        onPressed={() => navigationService.navigate(NAV_NAME_REGISTER)}
                    />
                    <View style={{ height: 16 }} />
                    <CustomButton
                        title='Sign In'
                        type='secondary'
                        onPressed={() => navigationService.navigate(NAV_NAME_LOGIN)}
                    />
                </View>
            </View>


        </ImageBackground>
    )
}

export default GetStarted