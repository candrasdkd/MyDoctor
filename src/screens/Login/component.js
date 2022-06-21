import React from 'react'
import { Text, Image, StatusBar, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IlLogo } from "../../assets";
import { CustomTextInput, CustomButton, CustomTextLink, Gap } from '../../components';
import navigationService from '../../navigation-service';
import { NAV_NAME_HOME, NAV_NAME_REGISTER } from '../../tools/constant';
import Styles from "./style";

const LoginScreen = () => {
    return (
        <KeyboardAwareScrollView style={Styles.page}>
            <View style={{ padding: 40 }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Image source={IlLogo} style={Styles.image} />
                <Text style={Styles.title}>Masuk untuk mulai berkonsultasi</Text>
                <CustomTextInput label={'Email Address'} />
                <Gap height={24} />
                <CustomTextInput label={'Password'} />
                <Gap height={10} />
                <CustomTextLink
                    title={'Lupa Password?'}
                    size={12}
                    align={'left'}
                />
                <Gap height={40} />
                <CustomButton
                    title='Sign In'
                    onPressed={() => navigationService.reset({
                        index: 0,
                        routes: [{ name: NAV_NAME_HOME }],
                    })}
                />
                <Gap height={30} />
                <CustomTextLink
                    title={'Belum punya akun?'}
                    size={16}
                    align={'center'}
                    onPressed={() => navigationService.navigate(NAV_NAME_REGISTER)}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen