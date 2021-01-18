import React, {Component} from 'react';
import {View,Text, ScrollView,TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import {styles} from './styles/Style'
import {connect}  from  'react-redux'
import {addToSaga, addingToSagaFav} from './redux/action'
import SecondAnimation from '../Animation/SecondAnimation'
import NetInfo from "@react-native-community/netinfo";



 class searchScreen extends Component {

  NetInfoSubscribtion = null;


  constructor(props) {
    super(props);

    this.state = {

      changeInput: '',
      title: 'YOUR  ONLINE  CINEMA',
     
      connectionReachable: false
  
       
    };
  }


  componentDidMount(){
  
    this.NetInfoSubscribtion = NetInfo.addEventListener(this.changeConnect)

  }
  

componentWillUnmount() {
 this.NetInfoSubscribtion && this.NetInfoSubscribtion()
}


changeConnect = (state) => {
  
  this.setState({
    connectionReachable: state.isInternetReachable
  })
   !state.isInternetReachable?alert('Disconnect') : alert('connect')

}



 

 
  render() {

    const {title} = this.state;

  

    

    return (

     <View style={{backgroundColor: 'black', flex: 1}}>


 
              <Header title={title} />
              
               <View style={{flexDirection: 'row', paddingTop: 5}}>
      
                              <TextInput placeholder="Search movie"  placeholderTextColor="#666" style={styles.im}
                    
                                          onChangeText={(text) => this.changeInput = text}>   </TextInput>
                    
                    
                              <TouchableOpacity
                                        onPress={() => this.props.search(this.changeInput)}
                                        style={styles.searchButton}>
                                        <Text style={{color: 'grey', fontWeight: 'bold'}}>S E A R C H</Text>
                              </TouchableOpacity>
               </View>
      
      
               <View> 
                       <TouchableOpacity
                              onPress={() => this.props.search('star')}
                              style={styles.mainButton}>
                              <Text style={{color: 'grey', fontWeight: 'bold'}}>M A I N    M E N U</Text>
                       </TouchableOpacity>
               </View>
      
           
              <ScrollView >


             

        







              <View>
                    <Text style={styles.mainButton} >
                     Connection Status : {this.state.connectionReachable? 'Connected' : 'Disconnected'}
                    </Text>
              </View>








                     

                        <View style={styles.container}>
                        
                             <View style={styles.row}>
                           
                             
                             {this.props.loadData? <SecondAnimation/>  :   this.props.list?.map(item => (
                                   <View >
                                      
                                            <ImageCard data={item.show} key={item.id}/>  

                                               {<TouchableOpacity

                                                       onPress={() => this.props.compareFav(item.show, this.props.list1)}
                                                              style={styles.mainButton}>
                                                       <Text style={{color: 'grey', fontWeight: 'bold'}}>ADD TO FAV</Text>
                                               </TouchableOpacity>}  
                                               
              
                                  </View>
                                  
                                  )
                                  )
                             }   
                                                  
                             </View>
                             
                        </View>
              </ScrollView>
              
      </View>
    );
  }

}



function mapStateToProps(state) {
  
  return{list: state.reducerSearch.list,
         list1: state.reducerFav.list1, 
         loadData: state.reducerLoading.loadData
        };

}



function mapDispatchToProps(dispatch) {
  return {

    search: (text) => dispatch(addToSaga(text)),
    compareFav: (text1, list1) => dispatch(addingToSagaFav(text1, list1))
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(searchScreen);

