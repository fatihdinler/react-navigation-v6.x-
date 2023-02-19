import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/home-screen'
import GameDetailsScreen from '../../screens/game-details-screen'

const HomeStack = () => {

    const Stack = createNativeStackNavigator()

    return (

        <Stack.Navigator>
            <Stack.Screen
                name='home-screen'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='game-details-screen'
                component={GameDetailsScreen}
                options={({route}) => ({
                    title : route.params?.title
                })}
            />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})