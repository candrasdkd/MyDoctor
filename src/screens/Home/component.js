import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BaseScreen, HomeCard, HomeProfile, MyFlatlist, RatingCard } from "../../components";
import Styles from "./Style";
import { ios } from "../../tools/helper";
import { API_GET_NEWS, NAV_NAME_LIST_DOCTORS, NAV_NAME_WEBVIEW, REST_METHOD_GET } from '../../tools/constant';
import navigationService from '../../navigation-service';


const HomeScreen = () => {
    const [dataNews, setDataNews] = useState([])
    const sendGetNews = async () => {
        const url = API_GET_NEWS
        const method = REST_METHOD_GET;
        const response = await fetch(url, { method });
        const responseJSON = await response.json();
        setDataNews(responseJSON)
    };
    useEffect(() => {
        sendGetNews()
    }, [])
    return (
        <BaseScreen useScrollViewContainer={true} contentContainerStyle={{ paddingBottom: ios ? 40 : 50 }}>
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
            <View style={Styles.sectionLabel}>
                {Ratings.map((item) => {
                    return (
                        <RatingCard
                            key={item.id}
                            image={item.image}
                            fullName={item.fullName}
                            profession={item.profession}
                            value={item.value}
                        />

                    )
                })}
            </View>
            <Text style={Styles.categoryText}>Good News</Text>
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
        icon: 'https://cdn-icons.flaticon.com/png/512/508/premium/508791.png?token=exp=1655975723~hmac=576ddd1489146723500232eb91e8bafe'
    },
    {
        id: 4,
        firstTitle: 'Dokter',
        secondTitle: 'Mata',
        icon: 'https://cdn-icons.flaticon.com/png/512/2547/premium/2547870.png?token=exp=1655975776~hmac=7468ffdcc97f34457874db7b4daba3e4'
    },
]

const Ratings = [
    {
        id: 1,
        fullName: 'Ada Wong',
        profession: 'Forensic Pathologist',
        value: 5,
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        fullName: 'Claire Redfield',
        profession: 'Ophthalmologist',
        value: 3,
        image: 'https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 3,
        fullName: 'Rian Valentine',
        profession: 'General Practitioner',
        value: 4,
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 4,
        fullName: 'Usman Winters',
        profession: 'Psychiatrist ',
        value: 3,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
]


export default HomeScreen