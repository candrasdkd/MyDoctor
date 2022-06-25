import React, { useEffect, useState } from 'react'
import Styles from "./Style";
import navigationService from '../../navigation-service';
import { View } from 'react-native'
import { IconName } from '../../tools/helper';
import { BaseScreen, ContactCard, CustomLoading, Header, HorizontalLine, Loading, MyFlatlist } from "../../components";
import { COLOR_HORIZONTAL_LINE, } from '../../tools/constant';
import { faker } from "@faker-js/faker";

const ListDoctorsScreen = ({ route }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const createRandomData = async () => {
        let USERS = []
        for (let index = 0; index < 20; index++) {
            USERS.push({
                key: faker.datatype.uuid(),
                image: faker.image.avatar(),
                name: faker.name.findName(),
                jobTitle: route.params.header,
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
        <BaseScreen containerStyle={{ paddingBottom: 0 }}>
            <Header
                title={route.params.header}
                typeIcon={IconName.MaterialCommunityIcons}
                labelIcon={'arrow-left-circle-outline'}
                sizeIcon={35}
                onPressed={() => navigationService.back()}
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
                                secondText={item.jobTitle}
                                typeIcon={IconName.MaterialCommunityIcons}
                                labelIcon={'chevron-right'}
                                sizeIcon={40}
                            />
                            <HorizontalLine borderColor={COLOR_HORIZONTAL_LINE} width="100%" />
                        </View>
                    }

                    showsHorizontalScrollIndicator={false}
                />
            }

        </BaseScreen>

    )
}



export default ListDoctorsScreen