import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import searchScreen from '../searchScreen';
import favScreen from './FavTab'



const Tab = createBottomTabNavigator();

export const Tab1 = () => {
  return (
    
      

            <Tab.Navigator

                  tabBarOptions={{

                      labelPosition: "beside-icon",
                      activeTintColor: "white",

                      style: {  backgroundColor: "black", },

                      labelStyle: { fontSize: 20, },
           
                      tabStyle: { fontSize: 10, },

                  }}
            >
            
                   <Tab.Screen name="Profile" component={searchScreen} />
                   <Tab.Screen   name="Favorite" component={favScreen} />

            </Tab.Navigator>

      
      
    
  );
}