import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {styles} from '../styles/Style'

const image = { uri: 'https://kclr96fm.com/media/2015/05/cinema-seats.jpg' };




const Header = props => {
  const { textStyle} = styles
 

  return (
    
    <View>
    <ImageBackground source={image} style={image}>
      <Text style={textStyle}>{props.title}</Text>
    </ImageBackground>
    </View>
    
  )
}


export default Header