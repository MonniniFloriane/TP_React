import { StyleSheet, Text, View } from 'react-native'
import { COLORS, globalStyles } from '../theme/styles'
import { Ionicons } from '@expo/vector-icons'

const StudentInfos = ({ text, iconName, color, text2 }) => {
  return (
    <View style={[styles.infos]}>
      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          {iconName && (
            <Ionicons
              name={iconName}
              size={25}
              color={COLORS.primary}
            />
          )}
          <Text style={[globalStyles.h2, color && { color: color }]}>{text}</Text>
        </View>

        <Text style={[globalStyles.paragraphLeft, color && { color: color }]}>{text2}</Text>
      </View>
    </View>
  )
}

export default StudentInfos

const styles = StyleSheet.create({
  infos: {
    flexWrap: 'wrap'
  }
})
