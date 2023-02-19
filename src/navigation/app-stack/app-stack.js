import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer' 
import MessagesScreen from '../../screens/messages-screen'
import MomentsScreen from '../../screens/moments-screen'
import SettingsScreen from '../../screens/settings-screen'
import ProfileScreen from '../../screens/profile-screen'
import DrawerContent from '../../components/drawer-content'
import { Ionicons } from '@expo/vector-icons'
import TabsNavigator from '../tab-navigator/tab-navigator'

const AppStack = () => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{ 
                headerShown: false,
                drawerLabelStyle : {marginLeft : -25, fontSize : 15},
                drawerActiveBackgroundColor : '#aa18ea',
                drawerInactiveTintColor : '#333333',
                drawerActiveTintColor : '#ffffff',
            }}
        >
            <Drawer.Screen
                name='home-tabs'
                component={TabsNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: (({ color }) => {
                        return (
                            <Ionicons name='home-outline' size={22} color={color} />
                        )
                    })
                }}
            />
            <Drawer.Screen
                name='profile-screen'
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    drawerIcon: (({ color }) => {
                        return (
                            <Ionicons name='person-outline' size={22} color={color} />
                        )
                    })
                }}
            />
            <Drawer.Screen
                name='messages-screen'
                component={MessagesScreen}
                options={{
                    title: 'Messages',
                    drawerIcon: (({ color }) => {
                        return (
                            <Ionicons name='chatbox-outline' size={22} color={color} />
                        )
                    })
                }}
            />
            <Drawer.Screen
                name='moments-screen'
                component={MomentsScreen}
                options={{
                    title: 'Moments',
                    drawerIcon: (({ color }) => {
                        return (
                            <Ionicons name='timer-outline' size={22} color={color} />
                        )
                    })
                }}
            />
            <Drawer.Screen
                name='settings-screen'
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    drawerIcon: (({ color }) => {
                        return (
                            <Ionicons name='settings-outline' size={22} color={color} />
                        )
                    })
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})