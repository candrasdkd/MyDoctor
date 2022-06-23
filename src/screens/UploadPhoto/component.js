import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { CustomButton, Gap, Header, CustomTextLink, BaseScreen } from '../../components';
import { NAV_NAME_LOGIN, } from '../../tools/constant';
import { IlNullAvatar, IconAdd } from "../../assets";
import navigationService from '../../navigation-service';
import LocalizedString from "../../tools/localization";
import Styles from "./Style";
import { IconName } from '../../tools/helper';

const UploadPhoto = () => {
    return (
        <BaseScreen>
            <Header
                title={LocalizedString.uploadPhotoScreen.title}
                typeIcon={IconName.MaterialCommunityIcons}
                labelIcon={'arrow-left-circle-outline'}
                sizeIcon={35}
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
        </BaseScreen>
    )
}

export default UploadPhoto