import { Text, View } from 'react-native'
import { globalStyles, COLORS } from '../theme/styles'
import { Ionicons } from '@expo/vector-icons'

const TextCustom = ({ text, h1, h2, h3, h4, h5, paragraph, paragraphLeft, color, multiLines, numberOfLines, iconName }) => {
  return (
    <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10, paddingBottom: 10 }}>
      {iconName && (
        <Ionicons
          name={iconName}
          size={25}
          color={COLORS.primary}
        />
      )}
      <Text
        ellipsizeMode="tail"
        multiLines={multiLines}
        numberOfLines={numberOfLines}
        style={{ width: '90%' }}
      >
        {text.split('\n').map((line, index) => (
          <Text
            key={index}
            style={[globalStyles.title, paragraph && globalStyles.paragraph, h1 && globalStyles.h1, h2 && globalStyles.h2, h3 && globalStyles.h3, h4 && globalStyles.h4, h5 && globalStyles.h5, paragraphLeft && globalStyles.paragraphLeft, color && { color: color }]}
          >
            {line}
            {'\n'}
          </Text>
        ))}
      </Text>
    </View>
  )
}

export default TextCustom
