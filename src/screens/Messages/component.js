import React, { useEffect, useState } from 'react'
import Styles from "./Style";
import { View } from 'react-native'
import { BaseScreen, ContactCard, CustomLoading, Header, HorizontalLine, MyFlatlist } from "../../components";
import { COLOR_HORIZONTAL_LINE } from '../../tools/constant';
import LottieView from 'lottie-react-native';
import { faker } from "@faker-js/faker";

const MessagesScreen = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const createRandomData = async () => {
        let USERS = []
        for (let index = 0; index < 20; index++) {
            USERS.push({
                key: faker.datatype.uuid(),
                image: faker.image.avatar(),
                name: faker.name.findName(),
                text: faker.random.words(10),

            })
        }
        setUsers(USERS)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }
    useEffect(() => {
        createRandomData()
    }, [])
    return (
        <BaseScreen>
            <Header
                title={'Messages'}
            />
            {loading ?
                <CustomLoading /> :
                <MyFlatlist
                    data={users}
                    keyExtractor={item => item.key.toString()}
                    renderItem={({ item }) =>
                        <View style={Styles.cardWrapper}>
                            <ContactCard
                                image={item.image}
                                firstText={item.name}
                                secondText={item.text}
                            />
                            <HorizontalLine borderColor={COLOR_HORIZONTAL_LINE} width="100%" />
                        </View>
                    }
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            }

        </BaseScreen>
    )
}

const Chat = [
    {
        id: 1,
        fullName: 'Ada Wong',
        text: "A performant interface for rendering sectioned lists, supporting the most handy features",
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        fullName: 'Claire Redfield',
        text: 'Note that you must specify some width and height style attributes.',
        image: 'https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 3,
        fullName: 'Rian Valentine',
        text: 'Component to control the app\'s status bar The status bar is the zone, typically at the top of the screen, that displays the current time, WiFi and cellular network information, battery level and/or other status icons',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 4,
        fullName: 'Usman Winters',
        text: 'Rendered at the top of all the items. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },

]

export default MessagesScreen