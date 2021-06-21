import React from 'react'
import {View, StatusBar} from 'react-native'
import { theme } from './src/global/styles/theme'
import SignIn from './src/screens/SignIn'

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={theme.colors.background} />
      <SignIn />
    </View>
  )
}
