import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { COLOR_BLACK, COLOR_MAIN, COLOR_REGULER_BLACK, FONT_NUNITO_BOLD } from '../tools/constant';
import {
    HomeScreen, MessagesScreen, HospitalsScreen, ProfileScreen
} from "../screens";
import {
    NAV_NAME_HOME, NAV_NAME_MESSAGES, NAV_NAME_HOSPITALS, NAV_NAME_PROFILE
} from "../tools/constant";
import { IconName, ios } from "../tools/helper";
import * as Animatable from 'react-native-animatable';


const TabArr = [
    {
        route: NAV_NAME_HOME,
        label: 'Home',
        type: IconName.Ionicons,
        activeIcon: 'home',
        inActiveIcon: 'home-outline',
        component: HomeScreen
    },
    {
        route: NAV_NAME_MESSAGES,
        label: 'Messages',
        type: IconName.Ionicons,
        activeIcon: 'chatbubbles',
        inActiveIcon: 'chatbubbles-outline',
        component: MessagesScreen
    },
    {
        route: NAV_NAME_HOSPITALS,
        label: 'Hospitals',
        type: IconName.MaterialCommunityIcons,
        activeIcon: 'map',
        inActiveIcon: 'map-legend',
        component: HospitalsScreen
    },
    {
        route: NAV_NAME_PROFILE,
        label: 'Profile',
        type: IconName.MaterialCommunityIcons,
        activeIcon: 'account',
        inActiveIcon: 'account-outline',
        component: ProfileScreen
    },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: .5, rotate: '0deg' }, 1: { scale: 1.2, rotate: '360deg' } });
        } else {
            viewRef.current.animate({ 0: { scale: 1.5, rotate: '360deg' }, 1: { scale: 1, rotate: '0deg' } });
        }
    }, [focused])

    const fontSize = 24;
    const Tag = item.type;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container]}>
            <Animatable.View
                ref={viewRef}
                duration={1000}
            >
                <Tag
                    name={focused ? item.activeIcon : item.inActiveIcon}
                    size={fontSize}
                    color={focused ? COLOR_MAIN : COLOR_REGULER_BLACK}
                    style={{ alignSelf: 'center' }}
                />
                {focused &&
                    <Text
                        style={{
                            color: focused ? COLOR_MAIN : COLOR_REGULER_BLACK,
                            fontSize: 10,
                            fontFamily: FONT_NUNITO_BOLD,
                        }}
                    >
                        {item.label}
                    </Text>
                }

            </Animatable.View>
        </TouchableOpacity>
    )
}

export default function TabScreen() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: ios ? styles.shadowIos : styles.shadowAndroid
            }}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: ios ? 'relative' : null,
        top: ios ? 15 : 0,
    },
    shadowIos: {
        height: 60,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 16,
        shadowColor: COLOR_BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    shadowAndroid: {
        height: 60,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 16,
        elevation: 3
    }
})