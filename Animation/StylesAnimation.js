
import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({

container: {
  flex:1,
  backgroundColor: '#5257F2',
  justifyContent: 'center',
  alignItems: 'center',
},


movieText: {
  color: 'white',
  fontSize: 30,
  marginTop: 29,
  fontWeight: '400',

 },

button: {
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  padding: 10
},

nextButton: {

    fontSize: 18,
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    backgroundColor: '#660000',
    
   
  
},
screenImage: 
     {flex:1,
      justifyContent: 'center',
      alignItems: 'center',
     },


 circle: {

  flex: 1,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center'

      },

textGo: {
        color: 'white', 
        fontWeight: 'bold'
        }






})