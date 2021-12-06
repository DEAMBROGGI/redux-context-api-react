import { put, call } from 'redux-saga/effects';
import {actionTypes} from './reducers';
import {getSearch} from '../services'

export function* apiSearch({key}) {
    try {
      const response = yield call(getSearch, key)  
console.log(response)
        yield put({
          type: actionTypes.ADD_ARRAY_REDUX,
          arrayAxiosRedux: response.data.results
        })
        
      
    } catch (err) {
      yield put({
        type: actionTypes.ADD_ARRAY_REDUX,
        arrayAxiosRedux:[]
          })
    }
  }
  
  