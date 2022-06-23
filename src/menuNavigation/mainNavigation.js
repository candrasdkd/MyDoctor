import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import { 
    SplashScreen, GetStartedScreen, LoginScreen, RegisterScreen, 
    UploadPhotoScreen, WebviewScreen, DetailChatScreen, ListDoctorsScreen,
} from "../screens";
import TabScreen from "./BottomTab";
import { 
    NAV_NAME_SPLASH, NAV_NAME_GET_STARTED, NAV_NAME_LOGIN, NAV_NAME_REGISTER,
    NAV_NAME_UPLOAD_PHOTO, NAV_NAME_TAB, NAV_NAME_WEBVIEW, NAV_NAME_DETAIL_CHAT,
    NAV_NAME_LIST_DOCTORS,
} from "../tools/constant";
import { NavigationContainer, } from '@react-navigation/native';
import NavigationService from '../navigation-service';


const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer ref={NavigationService.navigationRef} initialRouteName={NAV_NAME_SPLASH}>
            <Stack.Navigator initialRouteName={NAV_NAME_SPLASH}>
                <Stack.Screen
                    name={NAV_NAME_SPLASH}
                    component={SplashScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
                        headerShown: false,
                        gestureEnabled:true,
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_GET_STARTED}
                    component={GetStartedScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                        gestureEnabled:true,
                        headerShown: false, 
                        gestureDirection: 'vertical',
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_LOGIN}
                    component={LoginScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                        gestureEnabled:true,
                        headerShown: false, 
                        gestureDirection: 'vertical',
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_REGISTER}
                    component={RegisterScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                        gestureEnabled:true,
                        headerShown: false, 
                        gestureDirection: 'vertical',
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_UPLOAD_PHOTO}
                    component={UploadPhotoScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled:true,
                        headerShown: false, 
                        gestureDirection: 'horizontal',
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_TAB}
                    component={TabScreen}
                    options={{ 
                        headerShown: false, 
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_WEBVIEW}
                    component={WebviewScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                        headerShown: false, 
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_DETAIL_CHAT}
                    component={DetailChatScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                        headerShown: false, 
                    }}
                />
                <Stack.Screen
                    name={NAV_NAME_LIST_DOCTORS}
                    component={ListDoctorsScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                        headerShown: false, 
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;