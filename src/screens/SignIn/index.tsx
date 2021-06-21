import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'

import { theme } from '../../global/styles/theme'


import ButtonIcon from '../../component/Button'
import { styles } from './styles'
export default function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.background} />
      <Image 
        source={require('../../assets/illustration.png')} 
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize suas {`\n`}
          jogatinas.
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com sues amigos.
        </Text>
      </View>
      <ButtonIcon title="Entrar com discord." activeOpacity={0.7} />
    </View>
  )
}
