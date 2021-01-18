const initialState1 = {list1:[]};

function reducerFav (state = initialState1, action) {

  switch (action.type)  {

    case 'FAVORITE': 
            
              return {list1: [ ...state.list1, action.info ] };

 
            
    default:
           
              return state
           
  }         

}

export default reducerFav;


