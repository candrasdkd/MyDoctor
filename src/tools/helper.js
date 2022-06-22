import { Dimensions, Platform } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

export const getScreenDimension = () => {
    const { height, width } = Dimensions.get('window');
    return { height, width };
};

export const IconName = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    AntDesign,
    Entypo,
    Octicons,
    EvilIcons,
}