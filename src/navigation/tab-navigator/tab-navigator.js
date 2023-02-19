import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/home-screen'
import CartScreen from '../../screens/cart-screen'
import FavoriteScreen from '../../screens/favorite-screen'
import { Ionicons, Feather } from '@expo/vector-icons'
import HomeStack from '../home-stack/home-stack'

const TabsNavigator = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle : {backgroundColor : '#ad40af'},
                tabBarInactiveTintColor : '#ffffff',
                tabBarActiveTintColor : 'yellow'
            }}
        >
            <Tab.Screen
                name='home-tab'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home-outline' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='cart-screen'
                component={CartScreen}
                options={{
                    tabBarBadge : 3,
                    tabBarBadgeStyle : {
                        backgroundColor : 'yellow',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='shopping-bag' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='favorite-screen'
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='heart-outline' size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabsNavigator