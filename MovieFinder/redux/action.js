


export const addToSaga = data => ({

     type: 'SEARCH',
     info: data
  
});


export const addToReducerSearch = dataFromServer => ({

     type: 'SEARCHING',
     payload: dataFromServer,
  
}

);





export const addingToSagaFav = (movie, list1) => { 

  return(

  {
       type: 'ADD_TO_FAV',
       payload: {movie, list1}

  })
}


export const addToReducerFav = (movie) => { 



     return(
   
     {
          type: 'FAVORITE',
          info: movie
     })
}



export const loading = (data) => { 
      return {
           type: 'LOADING',
           payload: data
}
}


