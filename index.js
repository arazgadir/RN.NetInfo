/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import * as React from 'react';
import Transition  from './Transition'




const Main = () =>  {
return (

  <Transition/>

)
}
  


AppRegistry.registerComponent(appName, () => Main);
