import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import OnboardingScreen from './src/screens/onboarding-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/home-screen'

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='onboarding-screen' component={OnboardingScreen} options={{headerShown : false}}/>
          <Stack.Screen name='home-screen' component={HomeScreen} options={{headerShown : false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})