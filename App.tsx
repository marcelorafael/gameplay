import React from 'react'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import Background from './src/component/Background'

import { View, StatusBar } from 'react-native'
import { theme } from './src/global/styles/theme'
import SignIn from './src/screens/SignIn'

export default function App() {
  const [fontsLoaded] =  useFonts({
    Inter_400Regular, Inter_500Medium,
    Rajdhani_500Medium, Rajdhani_700Bold,
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <SignIn />
    </Background>
  )
}
