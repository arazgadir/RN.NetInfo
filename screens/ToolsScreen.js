import React from 'react';
import { styles } from './screenStyles'
import { View, Button, ImageBackground } from 'react-native';

const calcImage = { uri: 'https://thumbs.dreamstime.com/z/office-tools-isolated-black-background-close-up-business-work-concept-open-notebook-blank-pages-leather-cover-175712794.jpg'}

export const ToolsScreen = ({navigation, route}) => {
  return (

    <ImageBackground source={calcImage} style={styles.screenImage}>

      <View style={styles.movieCalc}>
      <Button  onPress={() => navigation.navigate('Calculator')} title="CALCULATOR" />
      <Button  onPress={() => navigation.navigate("Home")} title="MAIN MENU" />
      </View>
      
    </ImageBackground>
  );
}