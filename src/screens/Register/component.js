import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native'
import { CustomTextInput, CustomButton, Gap, Header } from '../../components';
import { NAV_NAME_UPLOAD_PHOTO, } from '../../tools/constant';
import navigationService from '../../navigation-service';
import LocalizedString from "../../tools/localization";
import Styles from "./style";

const RegisterScreen = () => {
    return (
        <SafeAreaView style={Styles.page}>
            <Header
                title={LocalizedString.registerEmailScreen.title}
                showIcon={true}
                nameIcon={'backArrow'}
                onPressed={() => navigationService.back()}
            />
            <KeyboardAwareScrollView style={{ padding: 40, paddingTop: 0 }}>
                <Gap height={24} />
                <CustomTextInput label={LocalizedString.registerEmailScreen.labelFullName} />
                <Gap height={24} />
                <CustomTextInput label={LocalizedString.registerEmailScreen.labelJobTitle} />
                <Gap height={24} />
                <CustomTextInput label={LocalizedString.registerEmailScreen.labelEmail} />
                <Gap height={24} />
                <CustomTextInput label={LocalizedString.registerEmailScreen.labelPassword} />
                <Gap height={24} />
                <CustomTextInput label={LocalizedString.registerEmailScreen.labelConfirmPassword} />
                <Gap height={40} />
                <CustomButton
                    title={LocalizedString.registerEmailScreen.buttonCaptionRegister}
                    onPressed={() => navigationService.navigate(NAV_NAME_UPLOAD_PHOTO)}
                />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen