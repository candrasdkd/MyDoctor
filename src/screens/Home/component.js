import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavigationService from "../../navigation-service";
import { Gap, HomeProfile } from "../../components";
import { IlPill, IlTeeth, IlEar, IlEye, IlDoctor } from "../../assets";
import Styles from "./style";
import { getScreenDimension, ios } from "../../tools/helper";
import { API_GET_NEWS, COLOR_MAIN, FONT_NUNITO_BOLD, FONT_NUNITO_SEMI_BOLD, NAV_NAME_LIST_DOCTORS, NAV_NAME_WEBVIEW, REST_METHOD_GET } from '../../tools/constant';
import { Rating } from 'react-native-ratings';
import navigationService from '../../navigation-service';
const { height, width } = getScreenDimension();

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
        <SafeAreaView style={Styles.page}>
            <ScrollView style={Styles.scrollWrapper} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: ios ? 50 : 80 }}>
                <HomeProfile containerStyle={{ marginHorizontal: 25 }} />
                <Text style={Styles.textWelcome}>Mau konsusltasi dengan siapa hari ini?</Text>
                <ScrollView scrollEnabled={false}>
                    <FlatList
                        data={Data}
                        horizontal
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) =>
                            <View style={Styles.cardWrapper}>
                                <TouchableOpacity
                                    activeOpacity={ios ? null : .7}
                                    style={Styles.cardButton}
                                    onPress={() => navigationService.navigate(NAV_NAME_LIST_DOCTORS,{header:`${item.firstTitle} ${item.secondTitle}`})}
                                >
                                    <View style={Styles.textCardWrapper}>
                                        <Text style={Styles.firstTitle}>{item.firstTitle}</Text>
                                        <Text style={Styles.secondTitle}>{item.secondTitle}</Text>
                                    </View>
                                    {item.secondTitle === 'Umum' &&
                                        <IlPill height={60} width={60} />
                                    }
                                    {item.secondTitle === 'Gigi' &&
                                        <IlTeeth height={60} width={60} />
                                    }
                                    {item.secondTitle === 'THT' &&
                                        <IlEar height={60} width={60} />
                                    }
                                    {item.secondTitle === 'Mata' &&
                                        <IlEye height={60} width={60} />
                                    }

                                </TouchableOpacity>
                            </View>
                        }
                        contentContainerStyle={{ paddingLeft: 15, paddingRight: 20 }}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
                <Text style={Styles.categoryText}>Top Rated Doctors</Text>
                <View style={Styles.sectionLabel}>
                    {Ratings.map((item) => {
                        return (
                            <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image source={{ uri: item.image }} resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 50 / 2, marginRight: 12 }} />
                                    <View>
                                        <Text style={Styles.fullName}>{item.fullName}</Text>
                                        <Text style={Styles.profession}>{item.profession}</Text>
                                    </View>
                                </View>
                                <Rating
                                    startingValue={item.rating}
                                    style={{ paddingVertical: 10, }}
                                    readonly
                                    imageSize={15}
                                />
                            </View>
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
                                    <Text style={[Styles.fullName, { maxWidth: '80%', textAlign: 'justify', lineHeight: 18 }]}>{item.title}</Text>
                                    <Text style={Styles.profession}>{item.publishedAt}</Text>
                                </View>
                                <Image source={{ uri: item.urlToImage }} style={{ height: '100%', width: 60, borderRadius: 10 }} resizeMode='cover' />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const Data = [
    {
        id: 1,
        firstTitle: 'Dokter',
        secondTitle: 'Umum',
    },
    {
        id: 2,
        firstTitle: 'Dokter',
        secondTitle: 'Gigi',
    },
    {
        id: 3,
        firstTitle: 'Dokter',
        secondTitle: 'THT',
    },
    {
        id: 4,
        firstTitle: 'Dokter',
        secondTitle: 'Mata',
    },
]

const Ratings = [
    {
        id: 1,
        fullName: 'Ada Wong',
        profession: 'Forensic Pathologist',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        fullName: 'Claire Redfield',
        profession: 'Ophthalmologist',
        rating: 3,
        image: 'https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 3,
        fullName: 'Rian Valentine',
        profession: 'General Practitioner',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 4,
        fullName: 'Usman Winters',
        profession: 'Psychiatrist ',
        rating: 3,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
]


export default HomeScreen