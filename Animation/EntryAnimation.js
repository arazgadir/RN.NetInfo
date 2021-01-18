import React, { Component } from 'react'
import {Animated, Image,  Text, TouchableOpacity, ImageBackground} from 'react-native'
import { styles} from './StylesAnimation'
import MovieLogo from './images/images/MovieLogo.png'
import App from '../App'
import {SecondAnimation} from './SecondAnimation'

class EntryAnimation extends Component {
  state = { 
    MovieLogoAnime: new Animated.Value(0),
    TextLogo: new Animated.Value(0),
    ButtonLogo:  new Animated.Value(0),
    loadingAnime: false,
    timePassed: false,

   }

  
  componentDidMount () {

    this.splashAnimate ()

  }


splashAnimate () {
  const {MovieLogoAnime, TextLogo, ButtonLogo,} = this.state;
  
  
      Animated.parallel ([
        Animated.spring(MovieLogoAnime, {
          toValue: 1,
          tension: 10,
          friction: 2,
          duration: 2000
        }),
  
        Animated.timing(TextLogo, {
          toValue: 1,
          duration: 3000,
          
        }),

        Animated.timing(ButtonLogo, {
          toValue: 1,
          duration: 3000
        }),
  
      ]).start() 
      
    

    }



  render() {

  
const LogoMove = this.state.MovieLogoAnime.interpolate({
  inputRange: [0, 1],
  outputRange: [-150, 20],
 
})

const TextMove = this.state.TextLogo.interpolate({
  inputRange: [0, 1],
  outputRange: [80, 0],
})

const image1 = { uri: "https://www.startfilm.ru/images/base/film/f_23777/big_00841859.jpg" };

    return (
      
      <ImageBackground source={image1} style={styles.screenImage}>

        <Animated.View style = {{
              opacity: this.state.MovieLogoAnime,
              top: LogoMove
              }}>

             <Image style={{width:200 , height:200}} source={MovieLogo}/>
        </Animated.View>


        <Animated.View style = {{
               opacity: this.state.TextLogo,
                top: TextMove
                }}>
              <Text style={styles.movieText}>O N L I N E   C I N E M A</Text>
       </Animated.View>
 

       <Animated.View style = {{

               opacity: this.state.TextLogo,
               
                }}>
                              {/* <TouchableOpacity

                                        onPress={() => this.props.navigation.navigate('SecondAnimation')}
                                        style={styles.nextButton}>
                                        <Text style={styles.textGo}>G O</Text>

                              </TouchableOpacity> */}
       </Animated.View>
       
       </ImageBackground>
      
        
      

    );
  }
}

export default EntryAnimation;


