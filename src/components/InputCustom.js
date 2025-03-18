import { StyleSheet, TextInput, View } from 'react-native'
import { COLORS, SPACING, globalStyles } from '../theme/styles'

const InputCustom = ({ placeholder, value, secureTextEntry, multiline, numberOfLines, onChangeText, onSubmitEditing, inputPrimary, width, color }) => {
  return (
    <View style={[styles.inputDefault, inputPrimary && styles.inputPrimary, width && { width: width }]}>
      <TextInput
        autoCapitalize="none"
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={COLORS.primary}
        secureTextEntry={secureTextEntry ? true : false}
        style={[globalStyles.paragraphLeft, color && { color: color }]}
        value={value}
      />
    </View>
  )
}

export default InputCustom

const styles = StyleSheet.create({
  inputDefault: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    gap: 10,
    paddingLeft: SPACING.sm,
    width: 329,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    borderColor: COLORS.secondary,
    elevation: 4
  },
  inputPrimary: {
    borderRadius: 'none',
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    borderColor: COLORS.primary,
    elevation: 0
  }
})
