import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { KeyboardAvoidingView, View } from 'react-native'
import { CustomTextInput, CustomButton, Gap, Header } from '../../components';
import navigationService from '../../navigation-service';
import { NAV_NAME_HOME, } from '../../tools/constant';
import Styles from "./style";

const RegisterScreen = () => {
    return (
        <KeyboardAwareScrollView style={Styles.page}>
            <Header
                title={'Daftar Akun'}
                showIcon={true}
                nameIcon={'backArrow'}
                onPressed={() => navigationService.back()}
            />
            <View style={{ padding: 40, paddingTop: 0 }}>
                {/* <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" /> */}
                <CustomTextInput label={'Full Nama'} />
                <Gap height={24} />
                <CustomTextInput label={'Pekerjaan'} />
                <Gap height={24} />
                <CustomTextInput label={'Email'} />
                <Gap height={24} />
                <CustomTextInput label={'Password'} />
                <Gap height={40} />
                <CustomButton
                    title='Sign Up'
                    onPressed={() => navigationService.reset({
                        index: 0,
                        routes: [{ name: NAV_NAME_HOME }],
                    })}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default RegisterScreen