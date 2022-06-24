import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { BaseScreen, HomeCard, HomeProfile, MyFlatlist, RatingCard } from "../../components";
import Styles from "./Style";
import { ios } from "../../tools/helper";
import { API_GET_NEWS, NAV_NAME_LIST_DOCTORS, NAV_NAME_WEBVIEW, REST_METHOD_GET } from '../../tools/constant';
import navigationService from '../../navigation-service';
import { faker } from "@faker-js/faker";
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const [users, setUsers] = useState([])
    const [dataNews, setDataNews] = useState([])
    const [loading, setLoading] = useState(true)
    const sendGetNews = async () => {


    };

    const createRandomData = async () => {
        let USERS = []
        const url = API_GET_NEWS
        const method = REST_METHOD_GET;
        for (let index = 0; index < 5; index++) {
            USERS.push({
                key: faker.datatype.uuid(),
                image: faker.image.avatar(),
                name: faker.name.findName(),
                jobTitle: faker.name.jobTitle(),
                rating: faker.datatype.number({
                    max: 5,
                    min: 1
                })
            })
        }
        const response = await fetch(url, { method });
        const responseJSON = await response.json();
        setUsers(USERS)
        setDataNews(responseJSON)
        setTimeout(() => {
            setLoading(false)
        }, 10000);

    }
    useEffect(() => {
        createRandomData()
    }, [])
    return (
        <BaseScreen useScrollViewContainer={true} contentContainerStyle={{ paddingBottom: ios ? 40 : 50, paddingTop: ios ? 40 : 0 }}>
            <HomeProfile containerStyle={{ marginHorizontal: 25 }} />
            <Text style={Styles.textWelcome}>Mau konsusltasi dengan siapa hari ini?</Text>
            <MyFlatlist
                data={Data}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <HomeCard
                        activeOpacity={ios ? null : .2}
                        firstTitle={item.firstTitle}
                        secondTitle={item.secondTitle}
                        image={item.icon}
                        onPressed={() =>
                            navigationService.navigate(
                                NAV_NAME_LIST_DOCTORS, { header: `${item.firstTitle} ${item.secondTitle}` }
                            )
                        }
                    />
                }
                contentContainerStyle={{ paddingLeft: 15, paddingRight: 20 }}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={Styles.categoryText}>Top Rated Doctors</Text>
            {loading ?
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <LottieView
                        source={require('../../assets/lotties/loading.json')}
                        autoPlay
                        resizeMode='contain'
                        style={{ height: 100 }}
                    />
                </View> :
                <View style={Styles.sectionLabel}>
                    {users?.map((item) => {
                        return (
                            <RatingCard
                                key={item.key}
                                image={item.image}
                                fullName={item.name}
                                profession={item.jobTitle}
                                value={item.rating}
                            />

                        )
                    })}
                </View>
            }
            <Text style={Styles.categoryText}>Good News</Text>
            {loading ?
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <LottieView
                        source={require('../../assets/lotties/loading.json')}
                        autoPlay
                        resizeMode='contain'
                        style={{ height: 100 }}
                    />
                </View> :
                <View style={Styles.sectionLabel}>
                    {dataNews?.articles?.map((item) => {
                        return (
                            <TouchableOpacity
                                key={item.title}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, }}
                                onPress={() => navigationService.navigate(NAV_NAME_WEBVIEW, { url: item.url })}
                            >
                                <View >
                                    <Text style={Styles.firstText}>{item.title}</Text>
                                    <Text style={Styles.secondText}>{item.publishedAt}</Text>
                                </View>
                                <Image source={{ uri: item.urlToImage }} style={{ height: '100%', width: 60, borderRadius: 10 }} resizeMode='cover' />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            }

        </BaseScreen>
    )
}

const Data = [
    {
        id: 1,
        firstTitle: 'Dokter',
        secondTitle: 'Umum',
        icon: 'https://cdn-icons-png.flaticon.com/512/822/822143.png'
    },
    {
        id: 2,
        firstTitle: 'Dokter',
        secondTitle: 'Gigi',
        icon: 'https://cdn-icons.flaticon.com/png/512/2779/premium/2779588.png?token=exp=1655975751~hmac=cd007e05e0a708f983f3c5b8bdb0f07a'
    },
    {
        id: 3,
        firstTitle: 'Dokter',
        secondTitle: 'THT',
        icon: 'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/344/external-ear-medical-smashingstocks-flat-smashing-stocks.png'
    },
    {
        id: 4,
        firstTitle: 'Dokter',
        secondTitle: 'Mata',
        icon: 'https://img.icons8.com/external-justicon-flat-justicon/344/external-eye-plastic-surgery-justicon-flat-justicon-1.png'
    },
]


export default HomeScreen