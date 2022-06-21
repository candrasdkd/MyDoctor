import { Dimensions, Platform } from "react-native";


export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

export const getScreenDimension = () => {
    const { height, width } = Dimensions.get('window');
    return { height, width };
};