import React from 'react';
import { styles } from './screenStyles'
import { View, Button, ImageBackground } from 'react-native';

const movieImage = { uri: "https://images-na.ssl-images-amazon.com/images/I/515kE2dEFaL._AC_.jpg" };


export const EntertaimentScreen = ({navigation, route}) => {
  return (
   
    <ImageBackground source={movieImage} style={styles.screenImage}>

         <View style={styles.movieCalc}>
   
                 <Button  onPress={() => navigation.navigate('Movie App')} title="MOVIE APP" />
                 <Button  onPress={() => navigation.navigate("Home")} title="MAIN MENU" />
                 
         </View>

     </ImageBackground>
    
  );
}