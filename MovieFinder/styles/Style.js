import {StyleSheet, Dimensions} from 'react-native';


const size=Dimensions.get('window')
const w=size.width
const h=size.height

export const styles = StyleSheet.create({

  container: {
    marginTop: 30,
    
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingBottom: 15
    
    
  },
  searchButton: {
    fontSize: 18,
    height: 40,
    borderWidth: 2,
    paddingLeft: 20,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#660000',
    marginVertical: 10,
    width: '30%',
  },
  im: {
    color: 'white',
    fontSize: 18,
    height: 39,
    borderColor: 'gray',
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: 'black',
    marginVertical: 10,
    width: '70%',
  },

  mainButton: {
    fontSize: 18,
    height: 40,
    borderWidth: 2,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#660000',
    alignItems: 'center',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },


  textStyle: {
    color: 'white',
    paddingTop: 90,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },

  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width:  4.1,
    height: 0.33,
    
  },


  container1: {
    width: w / 3,
    paddingVertical: 10,
    paddingBottom: 15
  },
  
  h1: {
    paddingTop: 15,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white', 
    paddingBottom: 15
    
  },
  cover: {
    width: w / 3.5,
    height: w * 0.43,
    borderRadius: 10,
    alignSelf: 'center',
    
  }


});