import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, globalStyles } from '../theme/styles'
import { Ionicons } from '@expo/vector-icons'

const ListDetail = ({ text, onPress, iconName, color, text2 }) => {
  return (
    <View style={[styles.modal]}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={[globalStyles.h2, color && { color: color }]}>{text}</Text>
        <Text style={[globalStyles.h2, color && { color: color }]}>{text2}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'flex-end', borderBottomWidth: 1, borderBottomColor: COLORS.primary }}
          onPress={onPress}
        >
          <Text style={[globalStyles.paragraphLeft, color && { color: color }]}>Voir plus</Text>
          {iconName && (
            <Ionicons
              name={iconName}
              size={25}
              color={COLORS.primary}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ListDetail

const styles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 10,
    gap: 30,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
    flexWrap: 'wrap',
    width: '100%'
  }
})
