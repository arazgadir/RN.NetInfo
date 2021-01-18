const initialState = {list:[]};


function reducerSearch (state = initialState, action) {

  switch (action.type)  {

    case 'SEARCHING': 
            
                return {  list: action.payload  };
            
    

   
    default:
              return state;
            
  }         

}

export default reducerSearch;









