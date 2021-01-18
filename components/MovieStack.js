import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieFinder from '../MovieFinder/index'
import { EntertaimentScreen } from '../screens/EntertaimentScreen'

const Stack2 = createStackNavigator();

export function MovieStack() {
  return (

    <Stack2.Navigator>

      <Stack2.Screen name="go" component={EntertaimentScreen} />
      <Stack2.Screen name="Movie App" component={MovieFinder} />

    </Stack2.Navigator>
  );
}