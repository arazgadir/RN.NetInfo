import React from 'react';
import { View, ImageBackground } from 'react-native';
import StyledText from 'react-native-styled-text';
import {styles} from './screenStyles'

const homeImage = { uri: 'https://s3.amazonaws.com/www-inside-design/uploads/2018/10/black-mirror-810x810.jpg'}

export const HomeScreen = ({navigation, route}) => {
  return (
    
     
     <ImageBackground source={homeImage} style={styles.screenImage}>
          <View style = {{paddingTop: 10}}>
             <StyledText

             style={styles.mainmenu}>
             {"<b>MAIN MENU</b>"}

             </StyledText>
          </View>
    
    </ImageBackground>
    
  );
}