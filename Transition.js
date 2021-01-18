import React, { Component } from 'react'
import EntryAnimation  from './Animation/EntryAnimation'
import App from './App'
import {AppState, Text} from 'react-native';

export default class Transition extends Component {
  constructor(props){
    super(props);
    this.state = {
    checkTime: false,
    appState: AppState.currentState,
    };
  }
 
  


  componentDidMount() {
    AppState.addEventListener('change', this.myhandlerAppStateChange);

    setTimeout( () => {
       this.getTimeAnimation();
    },2000);
  }



  getTimeAnimation() {
    this.setState({checkTime: true});
 }

 myhandlerAppStateChange = nextAppState => {
  if (
    this.state.appState.match(/inactive|background/) &&
    nextAppState === 'active'
  ) {
    alert('WELCOME BACK')
  }
  this.setState({appState: nextAppState});
};


  render() {

    
    if (!this.state.checkTime){

        return <EntryAnimation/>;
    }

    else{
      return (
    
        <App/>
      );
  }
}
}


