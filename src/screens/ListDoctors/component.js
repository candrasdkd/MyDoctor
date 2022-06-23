import React from 'react'
import Styles from "./Style";
import navigationService from '../../navigation-service';
import { SafeAreaView, View } from 'react-native'
import { IconName } from '../../tools/helper';
import { BaseScreen, ContactCard, Header, HorizontalLine, MyFlatlist } from "../../components";
import { COLOR_HORIZONTAL_LINE, } from '../../tools/constant';

const ListDoctorsScreen = ({ route }) => {
    const Chat = [
        {
            id: 1,
            fullName: 'Ada Wong',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            fullName: 'Claire Redfield',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            id: 3,
            fullName: 'Rian Valentine',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            id: 4,
            fullName: 'Usman Winters',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
            id: 5,
            fullName: 'Austin Levi',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 6,
            fullName: 'Ashley Birkin',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1586370392767-5ce4de129388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGZlbWFsZSUyMGxhYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 7,
            fullName: 'Bella Willy',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 8,
            fullName: 'Bruno Walker',
            profession: route.params.header,
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
    ]
    return (
        <BaseScreen containerStyle={{ paddingBottom: 0 }}>
            <Header
                title={route.params.header}
                typeIcon={IconName.MaterialCommunityIcons}
                labelIcon={'arrow-left-circle-outline'}
                sizeIcon={35}
                onPressed={() => navigationService.back()}
            />
            <MyFlatlist
                data={Chat}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <View style={Styles.cardWrapper}>
                        <ContactCard
                            image={item.image}
                            firstText={item.fullName}
                            secondText={item.profession}
                            typeIcon={IconName.MaterialCommunityIcons}
                            labelIcon={'chevron-right'}
                            sizeIcon={40}
                        />
                        <HorizontalLine borderColor={COLOR_HORIZONTAL_LINE} width="100%" />
                    </View>
                }
                showsHorizontalScrollIndicator={false}
            />
        </BaseScreen>

    )
}



export default ListDoctorsScreen