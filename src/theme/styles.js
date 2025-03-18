import { StyleSheet } from 'react-native'
import { COLORS } from '../constant/colors'
import { TYPOGRAPHY } from '../constant/typography'
import { SPACING } from '../constant/spacing'

export const globalStyles = StyleSheet.create({
  containerFlex: {
    display: 'flex',
    padding: SPACING.md
  },
  title: {
    fontSize: TYPOGRAPHY.fontSizeXXLarge,
    color: COLORS.white,
    textTransform: 'uppercase',
    textAlign: 'left',
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  h1: {
    fontSize: TYPOGRAPHY.fontSizeXLarge,
    color: COLORS.white,
    textTransform: 'uppercase',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  h2: {
    fontSize: TYPOGRAPHY.fontSizeLarge,
    color: COLORS.white,
    textTransform: 'inherit',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  h3: {
    fontSize: TYPOGRAPHY.fontSizeLarge,
    color: COLORS.white
  },
  h4: {
    fontSize: TYPOGRAPHY.fontSizeSmall,
    textTransform: 'inherit'
  },
  h5: {
    fontSize: TYPOGRAPHY.fontSizeMedium,
    textTransform: 'inherit'
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: TYPOGRAPHY.fontSizeExtraSmall,
    textTransform: 'uppercase'
  },
  paragraphLeft: {
    fontFamily: 'sans-serif',
    textTransform: 'none',
    fontSize: TYPOGRAPHY.fontSizeExtraSmall,
    textAlign: 'left',
    lineHeight: 23
  },
  container: {
    flex: 1
  }
})

export { COLORS, SPACING, TYPOGRAPHY }
