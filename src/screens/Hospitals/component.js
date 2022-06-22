import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import NavigationService from "../../navigation-service";
import Styles from "./style";

const HospitalsScreen = () => {
    return (
        <SafeAreaView style={Styles.page}>
            <TouchableOpacity onPress={() => NavigationService.back()}>
                <Text>BACK TO Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HospitalsScreen