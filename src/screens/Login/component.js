import React from 'react'
import { Text, Image, StatusBar, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CustomTextInput, CustomButton, CustomTextLink, Gap } from '../../components';
import { NAV_NAME_HOME, NAV_NAME_REGISTER } from '../../tools/constant';
import { IlLogo } from "../../assets";
import navigationService from '../../navigation-service';
import LocalizedString from "../../tools/localization";
import Styles from "./style";

const LoginScreen = () => {
    return (
        <KeyboardAwareScrollView style={Styles.page}>
            <View style={{ padding: 40 }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Image source={IlLogo} style={Styles.image} />
                <Text style={Styles.title}>{LocalizedString.loginScreen.description}</Text>
                <CustomTextInput label={LocalizedString.loginScreen.labelEmail} />
                <Gap height={24} />
                <CustomTextInput label={LocalizedString.loginScreen.labelPassword} />
                <Gap height={10} />
                <CustomTextLink
                    title={LocalizedString.loginScreen.buttonCaptionForgetPassword}
                    size={12}
                    align={'left'}
                />
                <Gap height={40} />
                <CustomButton
                    title={LocalizedString.loginScreen.buttonCaptionLogin}
                    onPressed={() => navigationService.reset({
                        index: 0,
                        routes: [{ name: NAV_NAME_HOME }],
                    })}
                />
                <Gap height={30} />
                <CustomTextLink
                    title={LocalizedString.loginScreen.labelRegister}
                    size={16}
                    align={'center'}
                    onPressed={() => navigationService.navigate(NAV_NAME_REGISTER)}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen