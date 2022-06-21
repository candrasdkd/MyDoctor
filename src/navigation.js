import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import { 
    SplashScreen, GetStartedScreen, LoginScreen, RegisterScreen, 
    HomeScreen,
} from "./screens";
import { 
    NAV_NAME_SPLASH, NAV_NAME_GET_STARTED, NAV_NAME_LOGIN, NAV_NAME_REGISTER,
    NAV_NAME_HOME,
} from "./tools/constant";
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './navigation-service';


const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer ref={NavigationService.navigationRef}>
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
                    name={NAV_NAME_HOME}
                    component={HomeScreen}
                    options={{ 
                        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
                        gestureEnabled:true,
                        headerShown: false, 
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;