import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, globalStyles } from '../theme/styles'
import { Ionicons } from '@expo/vector-icons'

const ButtonCustom = ({ text, onPress, btnPrimary, btnSecondary, width, color, iconName }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, btnPrimary && styles.btnPrimary, btnSecondary && styles.btnSecondary, width && { width: width }]}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        {iconName && (
          <Ionicons
            name={iconName}
            size={25}
            color={COLORS.white}
          />
        )}
        <Text style={[globalStyles.btnText, color && { color: color }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    padding: 10
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.white,
    borderRadius: 50
  },
  btnSecondary: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    borderRadius: 50
  },
  btnSeeMore: {
    borderBottomWidth: 1,
    borderBlockEndColor: COLORS.secondary
  }
})
