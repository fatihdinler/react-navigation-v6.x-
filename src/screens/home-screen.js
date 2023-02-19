import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import Carousel from 'react-native-reanimated-carousel'
import { windowWidth } from '../utils/dimensions'
import { freeGames, paidGames, sliderData } from '../model/data'
import BannerSlider from '../components/banner-slider'
import CustomSwitch from '../components/custom-switch'
import ListItem from '../components/list-item'
const HomeScreen = () => {

    const [gamesTab, setGamesTab] = useState(1)

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />
    }

    const onSelectSwitch = value => {
        setGamesTab(value)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                    }}>
                    <Text style={{ fontSize: 18, }}>
                        Hello John Doe
                    </Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={require('../assets/images/user-profile.jpg')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                    }}>
                    <Feather
                        name="search"
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }}
                    />
                    <TextInput placeholder="Search" />
                </View>
                <View
                    style={{
                        marginVertical: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ fontSize: 18, }}>
                        Upcoming Games
                    </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: '#0aada8' }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <Carousel
                    width={windowWidth}
                    height={windowWidth / 2}
                    loop
                    data={sliderData}
                    scrollAnimationDuration={1000}
                    renderItem={renderBanner}
                    mode='parallax'
                />
                <View style={{ marginVertical: 20, marginTop : -20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Free to play"
                        option2="Paid games"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>
                {gamesTab == 1 &&
                    freeGames.map(item => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            onPress={() =>
                                navigation.navigate('GameDetails', {
                                    title: item.title,
                                    id: item.id,
                                })
                            }
                        />
                    ))}
                {gamesTab == 2 &&
                    paidGames.map(item => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            price={item.price}
                            onPress={() =>
                                navigation.navigate('GameDetails', {
                                    title: item.title,
                                    id: item.id,
                                })
                            }
                        />
                    ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen