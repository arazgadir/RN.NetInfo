import { StyleSheet} from "react-native";

export const styles = StyleSheet.create ({

  container: {
   flex: 1
  },
  
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center' 
  },
  
  secondScreen: {
    fontSize: 50,
    color: '#000000'
  },
  
  firstScreen: {
    fontFamily: 'monospace',
    fontSize: 45,
    color: '#ffa600'
  },
  
  btntext: {
    fontFamily: 'monospace',
  fontSize: 33,
  },
  
  white: {
  color: '#4d4d4d'
  },
  
  row: {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  },
  
  result: {
    flex: 2,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'flex-end'
    
  },
  
  calculation: {
  flex: 1.5,
  backgroundColor: '#595959',
  justifyContent: 'center',
  alignItems: 'flex-end'
  
  
  },
  buttons: {
    flex: 5,
    flexDirection: 'row'
  },
  
  numbers: {
    flex: 3,
    backgroundColor: 'grey'
  },
  
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#ffa600'
  }
  
  
  })