import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { Gap, Header, BaseScreen } from '../../components';
import { IlNullAvatar, IconAdd } from "../../assets";
import LocalizedString from "../../tools/localization";
import Styles from "./Style";

const ProfileScreen = () => {
    return (
        <BaseScreen>
            <Header title={'Profile'}/>
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
            </View>
        </BaseScreen>
    )
}

export default ProfileScreen