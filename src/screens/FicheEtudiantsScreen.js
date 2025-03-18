//import { useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
//import { updateUserApi } from '../api/userApi'
import ButtonCustom from '../components/ButtonCustom'
import InputCustom from '../components/InputCustom'
import TextCustom from '../components/TextCustom'
//import ToastCustom from '../components/ToastCustom'
import { COLORS, SPACING } from '../theme/styles'
import ListDetail from '../components/ListDetailsCustom'
//import { emailValidator, validator } from '../utils/validators'
import { Ionicons } from '@expo/vector-icons'
import StudentInfos from '../components/StudentInfosCustom'

const FicheEtudiant = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'flex-start', padding: 30, gap: 10, backgroundColor: COLORS.white }}
      edges={['top']}
    >
      <TextCustom
        text="Fiche étudiant"
        h1
        color={COLORS.primary}
      />
      <View style={{ gap: 50, paddingTop: 30 }}>
        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
          <StudentInfos
            text="Nom :"
            text2="infos"
            color={COLORS.primary}
            iconName="person-outline"
          ></StudentInfos>

          <StudentInfos
            text="Prénom :"
            text2="infos"
            color={COLORS.primary}
          ></StudentInfos>
        </View>

        <StudentInfos
          text="Date de naissance :"
          text2="infos"
          color={COLORS.primary}
          iconName="calendar-outline"
        ></StudentInfos>

        <StudentInfos
          text="E-mail :"
          text2="infos"
          color={COLORS.primary}
          iconName="mail-outline"
        ></StudentInfos>

        <StudentInfos
          text="Téléphone :"
          text2="infos"
          color={COLORS.primary}
          iconName="phone-portrait-outline"
        ></StudentInfos>

        <StudentInfos
          text="Moyenne :"
          text2="infos"
          color={COLORS.primary}
          iconName="bar-chart-outline"
        ></StudentInfos>

        <View style={{ paddingTop: 30 }}>
          <ButtonCustom
            text="retour"
            btnPrimary
            color={COLORS.white}
            iconName="return-up-back-outline"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FicheEtudiant
