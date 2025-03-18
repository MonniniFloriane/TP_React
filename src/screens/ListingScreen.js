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

const ListingScreen = ({ navigation }) => {
  /*const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState('')

  const handleConfirm = async () => {
    const emailError = emailValidator(email)
    const passwordError = validator(password)

    if (!emailError || !passwordError) {
      Alert.alert('Error', 'Email or Password is incorrect')
      return
    }

    const result = await updateUserApi(user, email, password)

    if (result.success) {
      setPassword('')
      ToastCustom('User account updated', 'This account has been updated successfully!', 3000)
    }
  }*/

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: COLORS.white }}
      edges={['top']}
    >
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', padding: 30, gap: 10, backgroundColor: COLORS.white }}
        edges={['bottom']}
      >
        <TextCustom
          text="Les étudiants"
          h1
          color={COLORS.primary}
        />
        <View style={{ gap: 30, paddingTop: 30 }}>
          <ListDetail
            text="Nommmmm"
            text2="Notes"
            color={COLORS.primary}
            iconName="arrow-forward-outline"
            onPress={() => navigation.navigate('FicheEtudiant')}
          ></ListDetail>

          <ListDetail
            text="Nommmmm"
            text2="Notes"
            color={COLORS.primary}
            iconName="arrow-forward-outline"
          ></ListDetail>

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
    </ScrollView>
  )
}

export default ListingScreen
