import * as React from 'react';
import {DrawerMenu} from './components/DrawerTabMenu'
import EntryAnimation  from './Animation/EntryAnimation'

import { NavigationContainer } from '@react-navigation/native';

import {Provider} from 'react-redux';


import { PersistGate } from 'redux-persist/integration/react'



import {configureStore} from './MovieFinder/redux/store'

const {myStore, mypersistor } = configureStore();



export default function App () {
  return (
  
  <Provider store = {myStore}>
    <PersistGate loading={null} persistor={mypersistor}>
     <NavigationContainer>

      <DrawerMenu/>
      
      </NavigationContainer>
      </PersistGate>
   </Provider>

   
     
  );
}