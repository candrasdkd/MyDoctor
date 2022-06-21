import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { CustomTextInput, CustomButton, Gap, Header, CustomTextLink } from '../../components';
import { COLOR_BLACK, NAV_NAME_LOGIN, NAV_NAME_UPLOAD_PHOTO, } from '../../tools/constant';
import { IlNullAvatar, IconAdd } from "../../assets";
import navigationService from '../../navigation-service';
import LocalizedString from "../../tools/localization";
import Styles from "./style";

const UploadPhoto = () => {
    return (
        <SafeAreaView style={Styles.page}>
            <Header
                title={LocalizedString.uploadPhotoScreen.title}
                showIcon={true}
                nameIcon={'backArrow'}
                onPressed={() => navigationService.back()}
            />
            <View style={Styles.content}>
                <View style={Styles.profile}>
                    <View style={Styles.avatarWrapper}>
                        <Image source={IlNullAvatar} style={Styles.avatar} />
                        <TouchableOpacity style={Styles.iconAdd} >
                            <IconAdd width={30} height={30} />
                        </TouchableOpacity>
                    </View>
                    <Gap height={15} />
                    <Text style={Styles.textName}>Candra Sidik Dermawan</Text>
                    <Gap height={10} />
                    <Text style={Styles.textJob}>Mobile Developers</Text>
                </View>
                <View>
                    <CustomButton
                        title={LocalizedString.uploadPhotoScreen.buttonCaptionContinue}
                        onPressed={() => navigationService.navigate(NAV_NAME_LOGIN)}
                    />
                    <Gap height={30} />
                    <CustomTextLink
                        title={LocalizedString.uploadPhotoScreen.buttonCaptionSkip}
                        align='center'
                        onPressed={() => navigationService.navigate(NAV_NAME_LOGIN)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default UploadPhoto