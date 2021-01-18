import {put, call} from 'redux-saga/effects'
import {addToReducerSearch} from '../redux/action'
import {addToReducerFav} from '../redux/action'
import {loading} from '../redux/action'


 url1 = 'https://api.tvmaze.com/search/shows?q=';


 function fetchData (info) {

 

    return async () => {
     try {
   
         if (info != '') {
           
              const response = await fetch(this.url1 + info.info);
              return await response.json();
               
          }
     }

      catch (e) {
              console.log('url is wrong');
      }
    }
};


   function checkFav(payload) {

 
          return  () => {
              try {
       
                const checkFavButton = (payload.payload.list1.some(element  => { 
                
                 
                     if (element.id == payload.payload.movie.id){
       
                          {return true}
                     }
       
                 }))
                
                      if (checkFavButton == false ) {

                       return payload.payload.movie
       
                 }
               }
              
          catch (e) {
                     console.log('operation is wrong');
                    }
       
                  }
      
}



export function* worker (info){

  yield put (loading(true)) 

  const data = yield call (fetchData(info))

  yield put (loading(false)) 

  yield put (addToReducerSearch(data)) 
}


export function* workerFav(payload) {

 
  const dataFav =  yield call(checkFav(payload))
  if (typeof dataFav !== 'undefined'){
 
  yield put (addToReducerFav(dataFav))
  }
  

}

