import {takeEvery} from 'redux-saga/effects'
import {worker, workerFav, workerDel} from './worker'


export function* watcher () {

  yield takeEvery ('SEARCH', worker);
  yield takeEvery('ADD_TO_FAV', workerFav)
  

}