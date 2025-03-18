//import { useState } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, View, input } from 'react-native'
//import { updateUserApi } from '../api/userApi'
import ButtonCustom from '../components/ButtonCustom'
import InputCustom from '../components/InputCustom'
import TextCustom from '../components/TextCustom'
//import ToastCustom from '../components/ToastCustom'
import { COLORS } from '../theme/styles'
//import { emailValidator, validator } from '../utils/validators'
import { rangeYear } from '../utils/helpers'
//import DatePicker from 'react-date-picker'

const InscriptionScreen = ({ navigation, route }) => {
  /*const [buildYear, setBuildYear] = useState(new Date().getFullYear())

  const handleApprove = async () => {
    const result = await approveBuildingApi(buildId)
    if (result.success) {
      navigation.goBack()
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
          text="Inscriptions"
          h1
          color={COLORS.primary}
        />
        <View style={{ gap: 30 }}>
          <View style={{ paddingTop: 30 }}>
            <TextCustom
              text="Nom"
              h2
              color={COLORS.primary}
            />
            <InputCustom
              color={COLORS.primary}
              inputPrimary
              //onChangeText={setEmail}
              placeholder="Entrer un nom"
              //value={email}
              width={'100%'}
            />
          </View>

          <ImageBackground style={{ backgroundColor: COLORS.secondary, height: 2, width: '100%' }}>
            <TextCustom text={'-'} />
          </ImageBackground>

          <View>
            <TextCustom
              text="Prenom"
              h2
              color={COLORS.primary}
            />
            <InputCustom
              color={COLORS.primary}
              inputPrimary
              //onChangeText={setEmail}
              placeholder="Entrer un prenom"
              //value={email}
              width={'100%'}
            />
          </View>

          <ImageBackground style={{ backgroundColor: COLORS.secondary, height: 2, width: '100%' }}>
            <TextCustom text={'-'} />
          </ImageBackground>

          <View>
            <TextCustom
              text="Date de naissance"
              h2
              color={COLORS.primary}
            />
            <input
              aria-label="Date"
              type="date"
            />
          </View>

          <ImageBackground style={{ backgroundColor: COLORS.secondary, height: 2, width: '100%' }}>
            <TextCustom text={'-'} />
          </ImageBackground>

          <View>
            <TextCustom
              text="E-mail"
              h2
              color={COLORS.primary}
            />
            <InputCustom
              color={COLORS.primary}
              inputPrimary
              //onChangeText={setEmail}
              placeholder="Entrer une adresse mail"
              //value={email}
              width={'100%'}
            />
          </View>

          <ImageBackground style={{ backgroundColor: COLORS.secondary, height: 2, width: '100%' }}>
            <TextCustom text={'-'} />
          </ImageBackground>

          <View>
            <TextCustom
              text="Téléphone"
              h2
              color={COLORS.primary}
            />
            <InputCustom
              color={COLORS.primary}
              inputPrimary
              //onChangeText={setEmail}
              placeholder="Entrer un numéros"
              //value={email}
              width={'100%'}
            />
          </View>

          <ImageBackground style={{ backgroundColor: COLORS.secondary, height: 2, width: '100%' }}>
            <TextCustom text={'-'} />
          </ImageBackground>

          <View>
            <TextCustom
              text="Moyenne générale"
              h2
              color={COLORS.primary}
            />
            <InputCustom
              color={COLORS.primary}
              inputPrimary
              //onChangeText={setEmail}
              placeholder="Entrer votre moyenne"
              //value={email}
              width={'100%'}
            />
          </View>

          <View style={{ paddingTop: 50, paddingBottom: 30, gap: 20 }}>
            <ButtonCustom
              btnSecondary
              color={COLORS.primary}
              //onPress={handleConfirm}
              text="confirm"
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default InscriptionScreen

const styles = StyleSheet.create({
  body: {
    alignItems: 'flex-start',
    marginTop: 50,
    marginBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    gap: 20
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    width: '100%'
  },
  imageBackgroundContainer: {
    backgroundColor: '#023E58',
    flex: 1
  }
})
