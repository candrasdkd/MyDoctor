import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native'
import { CustomTextInput, CustomButton, Gap, Header, BaseScreen } from '../../components';
import { NAV_NAME_UPLOAD_PHOTO, } from '../../tools/constant';
import navigationService from '../../navigation-service';
import LocalizedString from "../../tools/localization";
import Styles from "./Style";
import { IconName } from '../../tools/helper';

const RegisterScreen = () => {
    return (
        <BaseScreen style={Styles.page}>
            <Header
                title={LocalizedString.registerEmailScreen.title}
                typeIcon={IconName.MaterialCommunityIcons}
                labelIcon={'arrow-left-circle-outline'}
                sizeIcon={35}
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
        </BaseScreen>
    )
}

export default RegisterScreen