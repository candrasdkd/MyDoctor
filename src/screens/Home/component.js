import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationService from "../../navigation-service";

const HomeScreen = () => {
    return (
        <View style={{ margin: 50 }}>
            <TouchableOpacity onPress={() => NavigationService.back()}>
                <Text>BACK TO GetStarted</Text>
            </TouchableOpacity>

        </View>

    )
}

export default HomeScreen