import React, { Component } from 'react'
import {Text, View, Animated, Image,} from 'react-native'
import circleLogo from './images/images/circleLogo.png'
import { styles} from './StylesAnimation'

export default class SecondAnimation extends Component {
  constructor () {
    super()
    this.loadingCircle = new Animated.Value(0)
  }


  componentDidMount () {
    this.circleAnimation()
  }

  
  circleAnimation () {
    this.loadingCircle.setValue(0)
    Animated.sequence([
      Animated.timing(
      this.loadingCircle,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
       
      }
    )]).start(() => this.circleAnimation())
  }


  
  render () {
    
    const circle = this.loadingCircle.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={ styles.circle }>
           <Animated.Image

                style={{ width:100 , height:100, transform: [{rotate: circle}] }}
                   source = {circleLogo} >

          
           </Animated.Image>
           <Text style={styles.movieText}>L o a d i n g  . . .</Text>
           
      </View>
    )
  }
}


