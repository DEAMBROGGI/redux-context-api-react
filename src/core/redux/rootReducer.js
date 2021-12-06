import { combineReducers } from 'redux'
// importo un combineReducers para combinar todos los estados que vaya a crear en el fururo
import data from './reducers';

export default combineReducers({
  // raceReducer === nombre que va tomar el state general
  dataReducer: data
});
