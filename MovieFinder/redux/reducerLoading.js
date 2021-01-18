const initialState = {

 loadData: false

}


function reducerLoading (state = initialState, action) {

  switch (action.type)  {

    case 'LOADING': 
            
           return {loadData: action.payload}
            
    default:
              
              return state;
            
  }         

}

export default reducerLoading;