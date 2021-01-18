import React, {Component} from 'react';
import {styles} from '../styles/Style'
import ImageCard from '../components/ImageCard';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import {connect}  from  'react-redux'




class favScreen extends Component {

  constructor(props){
    super(props);
  }

render(){
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
       <ScrollView >
             
              <View style={styles.container}>

                                                
                <View style={styles.row}>
   
                        {this.props.list1?.map(item => (

                        
                          
                           <View >
                          
                                 {<ImageCard data={item} key={item.id}/>}
                                 
                                            
                                                
                           </View>
                         )
   
                        )}
   
                 </View>
              </View>

       </ScrollView>
    </View>
  );



}

}


function mapStateToFavProps(state) {

   return{list1: state.reducerFav.list1};
  
 }
 


 

export default connect(mapStateToFavProps )(favScreen);


