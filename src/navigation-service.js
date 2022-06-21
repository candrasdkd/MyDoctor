import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';
import { Alert, BackHandler } from 'react-native';
import RNExitApp from 'react-native-exit-app';
import { ios } from './tools/helper';

const navigationRef = createNavigationContainerRef()
function navigate(routeName, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(routeName, params);
    }
}

function back() {
    if (navigationRef.isReady()) {
        if (navigationRef.canGoBack()) {
            navigationRef.goBack()
        } else {
            Alert.alert(
                'Exit',
                'Are you sure you want to exit?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => ios ? RNExitApp.exitApp() : BackHandler.exitApp() },
                ],
                { cancelable: false },
            );
        }
    }
}

function replace(...args) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(...args));
    }
}

function push(...args) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(...args));
    }
}

function reset(...args) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.reset(...args));
    }
}

export default {
    navigate,
    back,
    replace,
    push,
    reset,
    navigationRef
};
