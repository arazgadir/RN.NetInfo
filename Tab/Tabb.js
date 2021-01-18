import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from './SettingsScreen'
import { ProfileScreen } from './ProfileScreen'


const Tab = createBottomTabNavigator();

export const Tab1 = () => {
  return (
    
      <Tab.Navigator

            tabBarOptions={{

                 labelPosition: "beside-icon",
                 activeTintColor: "white",
                 style: { backgroundColor: "black"},
                 labelStyle: {fontSize: 20 },
                 tabStyle: { fontSize: 10 }

             }}
             >
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />

      </Tab.Navigator>
    
  );
}


