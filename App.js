import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import InscriptionScreen from './src/screens/InscriptionScreen'
import ListingScreen from './src/screens/ListingScreen'
import FicheEtudiant from './src/screens/FicheEtudiantsScreen'
import StackNavigator from './src/navigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <StackNavigator></StackNavigator>
    //<HomeScreen></HomeScreen>
    //<InscriptionScreen></InscriptionScreen>
    //<ListingScreen></ListingScreen>
    //<FicheEtudiant></FicheEtudiant>
  )
}
