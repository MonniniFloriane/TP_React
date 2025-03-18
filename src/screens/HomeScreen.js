import { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import ButtonCustom from '../components/ButtonCustom'
import TextCustom from '../components/TextCustom'
import { COLORS } from '../theme/styles'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.primary, flex: 1, height: '100%', justifyContent: 'space-between', padding: 30, gap: 10 }}>
      <TextCustom
        text="Bienvenu sur Parcours sup"
        title
        color={COLORS.white}
      />
      <View style={{ width: '100%', alignItems: 'flex-start', paddingBottom: 25, gap: 30 }}>
        <ButtonCustom
          text="S'inscrire"
          btnPrimary
          color={COLORS.white}
          onPress={() => navigation.navigate('InscriptionScreen')}
          width="100%"
        />
        <ButtonCustom
          text="liste étudiants"
          btnSecondary
          color={COLORS.primary}
          onPress={() => navigation.navigate('ListingScreen')}
          width="100%"
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default HomeScreen
