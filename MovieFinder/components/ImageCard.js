import React from 'react'
import { Image, View, Text } from 'react-native'
import {styles} from '../styles/Style'



const ImageCard = ({ data }) => {
  const { container1,  h1, cover} = styles
  const { image, name,  } = data
   
let caption = 

  data.image == null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaFnTqJMVV-1gnkn-Gt7h7B5NYaT8ejHK3g&usqp=CAU' : data.image.medium

  return (

 
    <View style={container1}>
     
             <View style={{ backgroundColor: 'black'}}>
                  <Image style={cover} source={{ uri: caption}} />
                  
             </View>
       
             <Text style={h1}>{data.name.toUpperCase()}</Text>
                 
                                
      
      
    </View>
  )
  
}

 export default ImageCard


