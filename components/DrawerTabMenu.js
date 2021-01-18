import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen } from '../screens/HomeScreen'
import  {NewsScreen}  from '../screens/NewsScreen'
import { Tab1 } from '../Tab/Tabb'
import { CalcStack } from './CalculatorStack'
import { MovieStack } from './MovieStack'

const Drawer = createDrawerNavigator();

export function DrawerMenu() {
  return (
  

    <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
        <Drawer.Screen name="Entertaiment" component={MovieStack} />
        <Drawer.Screen name="Tools" component={CalcStack} />
        <Drawer.Screen name="Aboutme" component={Tab1} />

    </Drawer.Navigator>

  )
}