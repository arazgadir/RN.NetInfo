import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducerSearch from './reducerSearch';
import reducerFav from './reducerFav';
import reducerLoading from './reducerLoading'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware  from 'redux-saga'
import {watcher} from '../saga/watcher'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({ reducerSearch, reducerFav, reducerLoading })

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  blacklist: ['reducerSearch']
}


const persistedReducer = persistReducer(persistConfig, reducers)


export const configureStore = () => {
  
  let myStore = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  let mypersistor = persistStore(myStore);
  sagaMiddleware.run(watcher)
  return {myStore, mypersistor };
};

  
