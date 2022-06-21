import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View } from 'react-native'
import { CustomTextInput, CustomButton, Gap, Header } from '../../components';
import { NAV_NAME_HOME, } from '../../tools/constant';
import navigationService from '../../navigation-service';
import LocalizedString from "../../tools/localization";
import Styles from "./style";

const RegisterScreen = () => {
    return (
        <KeyboardAwareScrollView style={Styles.page}>
            <Header
                title={LocalizedString.registerEmailScreen.title}
                showIcon={true}
                nameIcon={'backArrow'}
                onPressed={() => navigationService.back()}
            />
            <View style={{ padding: 40, paddingTop: 0 }}>
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