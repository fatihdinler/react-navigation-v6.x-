import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}>
            <View style={{ marginTop: 20 }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#20315f',
                    }}>
                    GAMEON
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Entypo name="game-controller" size={250} color="#AD40AF" />
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#AD40AF',
                    padding: 20,
                    width: '90%',
                    borderRadius: 10,
                    marginBottom: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                onPress={() => navigation.navigate('home-screen')}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}>
                    Let's Begin
                </Text>
                <Ionicons name="arrow-forward-circle-outline" size={22} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnboardingScreen