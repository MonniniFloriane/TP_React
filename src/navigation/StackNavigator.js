import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import InscriptionScreen from '../screens/InscriptionScreen'
import ListingScreen from '../screens/ListingScreen'
import FicheEtudiant from '../screens/FicheEtudiantsScreen'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="InscriptionScreen"
          component={InscriptionScreen}
        />
        <Stack.Screen
          name="ListingScreen"
          component={ListingScreen}
        />
        <Stack.Screen
          name="FicheEtudiant"
          component={FicheEtudiant}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
