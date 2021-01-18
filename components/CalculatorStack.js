import * as React from 'react';
import Calculator from '../calc/Calculator.js';
import { createStackNavigator } from '@react-navigation/stack';
import { ToolsScreen } from '../screens/ToolsScreen'

const Stack1 = createStackNavigator();

export function CalcStack() {
  return (

    <Stack1.Navigator>
      <Stack1.Screen name="Tools" component={ToolsScreen} />
      <Stack1.Screen name="Calculator" component={Calculator} />
    </Stack1.Navigator>

  );
}